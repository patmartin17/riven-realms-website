# Prompt for Gemini: Firebase Database Setup

Copy and paste this entire prompt to Gemini to help set up your Firebase database:

---

**I need help setting up a Firebase project for my Next.js website called "Riven Realms" - a Hytale server community website. Please guide me through the complete setup process.**

## Project Requirements:

1. **Firebase Authentication**
   - Enable Email/Password authentication
   - Set up password reset functionality
   - Configure email templates

2. **Cloud Firestore Database**
   - Create a database in test mode initially
   - Set up a `users` collection with the following schema:
   
   **Collection: `users`**
   - Document ID: User's Firebase Auth UID
   - Fields:
     - `uid` (string) - Firebase Auth UID
     - `email` (string) - User's email address
     - `displayName` (string, optional) - Optional display name
     - `hytaleUsername` (string, optional) - In-game Hytale username for account linking
     - `newsletterSubscribed` (boolean) - Newsletter subscription status (default: false)
     - `createdAt` (timestamp) - Account creation date
     - `updatedAt` (timestamp) - Last update timestamp

3. **Firestore Security Rules**
   - Users can only read and write their own user document
   - Unauthenticated users cannot access user data
   - Provide secure rules that prevent unauthorized access

4. **Firebase Configuration**
   - Help me get the web app configuration values I need for my Next.js app
   - These will be used as environment variables:
     - NEXT_PUBLIC_FIREBASE_API_KEY
     - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
     - NEXT_PUBLIC_FIREBASE_PROJECT_ID
     - NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
     - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
     - NEXT_PUBLIC_FIREBASE_APP_ID

## What I Need:

1. **Step-by-step instructions** for:
   - Creating the Firebase project
   - Enabling Authentication with Email/Password
   - Creating the Firestore database
   - Setting up the security rules
   - Getting the configuration values

2. **Security Rules Code** - Complete Firestore security rules that:
   - Allow users to read/write only their own user document
   - Prevent unauthorized access
   - Are production-ready (or explain what needs to change for production)

3. **Best Practices** - Any recommendations for:
   - Database structure
   - Security considerations
   - Performance optimization
   - Future scalability (for forums, posts, etc.)

4. **Testing Checklist** - What to test after setup:
   - User registration
   - User login
   - Password reset
   - User data updates

Please provide clear, actionable instructions that I can follow step-by-step in the Firebase Console. Include any warnings about security or production considerations.

---

## Additional Context (Optional - include if relevant):

- This is for a gaming community website
- Users will eventually be able to link their in-game Hytale usernames
- We plan to add forums later, so the structure should be scalable
- The website is built with Next.js 16 and TypeScript
- We're using Firebase v10+ SDK

---
