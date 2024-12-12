# Contact Management App
A simple Contact Management App built with React and Tailwind CSS. This app allows users to add, edit, delete, search, and view content if content is present else display not found details easily.

# Features:

1. Add Contact: Click on the plus (+) button to open a modal where you can add new Contact. You can provide a title and description.
2. Edit Contact: Each Contact item has an "Edit" button that opens a form where you can update the title or description of the Contact.
3. Delete Contact: Each Contact item has a "Delete" button to remove it from the app and Firebase.
4. Search by Name: You can search for Contact by title using a search bar at the top of the page. The Contact list will update dynamically based on your search query.
5. View Full Contact Details: You can click on any Contact's title to view the full details. Clicking the Contact area again will close the details.
6. Responsive Design: The app is fully responsive, ensuring a smooth experience on both desktop and mobile devices.

# Tech Stack:

1. Frontend: React, Tailwind CSS
2. Backend: Firebase (Firestore for database, Firebase Auth for authentication)
3. Notification: React Toastify for toast notifications

# How to Works 

# Add Contact:

1.  Click on the plus (+) button to open a modal.
2.  Enter the title and description in the modal form.
3.  Click Add to save the Contact, which will be stored in Firebase Firestore.

# Edit Contact:

1.  Each Contact item has an Edit button.
2.  Clicking Edit button opens a form where you can change the title or description.
3.  After making changes, click Save to update the Contact in Firestore.

# Delete Contact:

1.  Each Contact item has a Delete button.
2.  Clicking Delete will remove the Contact from the list and delete it from Firestore.

# Search by Name:

1.  At the top of the app, there's a search bar.
2.  Type the title of the Contact you're looking for.
3.  The Contact list will filter dynamically based on your search input.

# View Full Contact Details:

1.  Click on the title of any Contact item to reveal its full details (i.e., the description).
2.  Click on the Contact again to close the details.

# Toast Notifications:

1.  Toastify is used to show short and non-intrusive notifications for actions like adding, editing, or deleting Contact.
2.  This gives instant feedback to the user after performing an action.

# Website URL 

https://guptakumarankit.github.io/Contact-App/
