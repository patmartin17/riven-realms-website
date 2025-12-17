import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth"
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore"
import { auth, db } from "./config"

// User data structure in Firestore
export interface UserData {
  uid: string
  email: string
  displayName?: string
  hytaleUsername?: string
  newsletterSubscribed: boolean
  createdAt: any // Firestore timestamp
  updatedAt: any // Firestore timestamp
}

/**
 * Register a new user with email and password
 */
export async function registerUser(
  email: string,
  password: string,
  displayName?: string
): Promise<UserCredential> {
  try {
    // Create auth user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    
    // Update display name if provided
    if (displayName && userCredential.user) {
      await updateProfile(userCredential.user, { displayName })
    }

    // Create user document in Firestore
    const userData: UserData = {
      uid: userCredential.user.uid,
      email: userCredential.user.email || email,
      displayName: displayName || userCredential.user.displayName || null,
      hytaleUsername: null,
      newsletterSubscribed: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }

    await setDoc(doc(db, "users", userCredential.user.uid), userData)

    return userCredential
  } catch (error: any) {
    throw new Error(error.message || "Failed to register user")
  }
}

/**
 * Sign in with email and password
 */
export async function signInUser(email: string, password: string): Promise<UserCredential> {
  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (error: any) {
    throw new Error(error.message || "Failed to sign in")
  }
}

/**
 * Sign out the current user
 */
export async function signOutUser(): Promise<void> {
  try {
    await signOut(auth)
  } catch (error: any) {
    throw new Error(error.message || "Failed to sign out")
  }
}

/**
 * Send password reset email
 */
export async function resetPassword(email: string): Promise<void> {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error: any) {
    throw new Error(error.message || "Failed to send password reset email")
  }
}

/**
 * Get user data from Firestore
 */
export async function getUserData(uid: string): Promise<UserData | null> {
  try {
    const userDoc = await getDoc(doc(db, "users", uid))
    if (userDoc.exists()) {
      return userDoc.data() as UserData
    }
    return null
  } catch (error: any) {
    throw new Error(error.message || "Failed to get user data")
  }
}

/**
 * Update user data in Firestore
 */
export async function updateUserData(
  uid: string,
  updates: Partial<Omit<UserData, "uid" | "createdAt">>
): Promise<void> {
  try {
    const userRef = doc(db, "users", uid)
    await updateDoc(userRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    })
  } catch (error: any) {
    throw new Error(error.message || "Failed to update user data")
  }
}

/**
 * Update Hytale username
 */
export async function updateHytaleUsername(uid: string, hytaleUsername: string): Promise<void> {
  try {
    await updateUserData(uid, { hytaleUsername })
  } catch (error: any) {
    throw new Error(error.message || "Failed to update Hytale username")
  }
}

/**
 * Update newsletter subscription status
 */
export async function updateNewsletterSubscription(
  uid: string,
  subscribed: boolean
): Promise<void> {
  try {
    await updateUserData(uid, { newsletterSubscribed: subscribed })
  } catch (error: any) {
    throw new Error(error.message || "Failed to update newsletter subscription")
  }
}
