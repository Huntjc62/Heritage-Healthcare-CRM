# Heritage Healthcare CRM setup

1. Keep your existing `branding/` folder beside these files.
2. Deploy these files to GitHub Pages.
3. In Firebase Authentication, keep Email/Password enabled.
4. For every Authentication user, create a Firestore document in `users` using that user's Firebase Auth UID as the document ID.
5. User fields:
   - `email`
   - `name`
   - `role`: `admin` or `franchise`
   - `office`: office name, or `All Offices` for admin
   - `active`: `true`
6. Publish `firestore.rules` in Firebase Console.
7. The `enquiries` collection is created automatically when the first enquiry is saved.

Pipeline statuses:
- New
- Contacted
- Contact in Future
- Closed - Won
- Closed - Lost
- Junk Lead

Passwords are handled by Firebase Authentication and are not stored in GitHub or JavaScript.

Important: localStorage is no longer used as the security mechanism. Firestore Security Rules enforce office-level access.
