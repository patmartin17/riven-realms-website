# Firebase Setup Guide for Riven Realms

## What is Firebase?

Firebase is Google's Backend-as-a-Service (BaaS) platform that provides:
- **Authentication**: Secure user sign-up, sign-in, and password management
- **Firestore Database**: NoSQL cloud database for storing user data
- **Real-time Updates**: Automatic synchronization of data across clients
- **Scalability**: Handles millions of users without server management

## Implementation Overview

This project uses Firebase for:
1. **User Authentication**: Email/password login and registration
2. **User Profiles**: Storing user data including:
   - Email address
   - Hytale username (for linking in-game accounts)
   - Newsletter subscription preferences
   - Account creation date
3. **Protected Routes**: Secure access to user-specific pages
4. **Password Reset**: Email-based password recovery

## Setup Instructions

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard:
   - Enter project name: "Riven Realms" (or your preferred name)
   - Enable Google Analytics (optional but recommended)
   - Create the project

### Step 2: Enable Authentication

1. In Firebase Console, go to **Authentication** → **Get Started**
2. Click on **Sign-in method** tab
3. Enable **Email/Password** provider:
   - Click on "Email/Password"
   - Toggle "Enable" to ON
   - Click "Save"

### Step 3: Create Firestore Database

1. In Firebase Console, go to **Firestore Database** → **Create database**
2. Choose **Start in test mode** (for development)
   - ⚠️ **Important**: Update security rules before production!
3. Select a location closest to your users
4. Click "Enable"

### Step 4: Configure Security Rules (Important!)

1. Go to **Firestore Database** → **Rules**
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Click "Publish"

### Step 5: Get Firebase Configuration

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to "Your apps" section
3. Click the **Web** icon (`</>`) to add a web app
4. Register your app (nickname: "Riven Realms Web")
5. Copy the configuration values

### Step 6: Add Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and fill in your Firebase config values:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=riven-realms.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=riven-realms
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=riven-realms.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
   NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef
   ```

3. **Never commit `.env.local` to git!** (It's already in `.gitignore`)

### Step 7: Configure Email Templates (Optional)

1. Go to **Authentication** → **Templates**
2. Customize the password reset email template
3. Add your branding and custom message

## Project Structure

```
lib/firebase/
├── config.ts          # Firebase initialization
├── auth.ts            # Authentication functions
├── AuthContext.tsx    # React context for auth state
└── index.ts           # Exports

components/
└── ProtectedRoute.tsx # HOC for protected pages
```

## Features Implemented

### ✅ User Registration
- Email/password sign-up
- Automatic user document creation in Firestore
- Error handling with user-friendly messages

### ✅ User Login
- Email/password authentication
- Session persistence
- Redirect handling

### ✅ User Profile
- Display user email and account info
- Edit Hytale username (for linking in-game accounts)
- Toggle newsletter subscription
- View member since date

### ✅ Password Reset
- Email-based password recovery
- Secure reset link generation

### ✅ Protected Routes
- Automatic redirect for unauthenticated users
- Loading states during auth checks

## Firestore Schema

### Collection: `users`

Document ID: `{userId}` (matches Firebase Auth UID)

```typescript
{
  uid: string                    // User's Firebase Auth UID
  email: string                  // User's email address
  displayName?: string            // Optional display name
  hytaleUsername?: string        // In-game Hytale username (for linking accounts)
  newsletterSubscribed: boolean  // Newsletter subscription status
  createdAt: Timestamp           // Account creation date
  updatedAt: Timestamp           // Last update date
}
```

## Usage Examples

### Check if user is authenticated:
```tsx
import { useAuth } from "@/lib/firebase"

function MyComponent() {
  const { user, userData, loading } = useAuth()
  
  if (loading) return <div>Loading...</div>
  if (!user) return <div>Please log in</div>
  
  return <div>Welcome, {user.email}!</div>
}
```

### Protect a route:
```tsx
import { ProtectedRoute } from "@/components/ProtectedRoute"

export default function MyPage() {
  return (
    <ProtectedRoute>
      <div>Protected content</div>
    </ProtectedRoute>
  )
}
```

## Next Steps for Forums

When you're ready to build the forums:

1. Create a `posts` collection in Firestore
2. Add `forumPosts` array to user documents (or use separate collection)
3. Use Firebase Auth to verify user identity for posting
4. Implement real-time listeners for live updates

## Security Best Practices

1. ✅ **Never expose Firebase Admin SDK keys** in client-side code
2. ✅ **Use Firestore security rules** to protect data
3. ✅ **Validate user input** before saving to database
4. ✅ **Enable Firebase App Check** in production (optional but recommended)
5. ✅ **Set up proper CORS** if using Firebase Storage
6. ✅ **Monitor usage** in Firebase Console to prevent abuse

## Troubleshooting

### "Firebase: Error (auth/configuration-not-found)"
- Check that all environment variables are set correctly
- Restart your Next.js dev server after adding env variables

### "Missing or insufficient permissions"
- Check Firestore security rules
- Ensure user is authenticated before accessing data

### "User document not found"
- User document is created automatically on registration
- Check Firestore console to verify document exists

## Support

For Firebase-specific issues, check:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Support](https://firebase.google.com/support)
