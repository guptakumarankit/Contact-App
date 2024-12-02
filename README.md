# Content Management App
A simple Content Management App built with React and Tailwind CSS. This app allows users to add, edit, delete, search, and view content details easily.

# Features:

1. Add Content: Click on the plus (+) button to open a modal where you can add new content. You can provide a title and description.
2. Edit Content: Each content item has an "Edit" button that opens a form where you can update the title or description of the content.
3. Delete Content: Each content item has a "Delete" button to remove it from the app and Firebase.
4. Search by Name: You can search for content by title using a search bar at the top of the page. The content list will update dynamically based on your search query.
5. View Full Content Details: You can click on any content's title to view the full details. Clicking the content area again will close the details.
6. Responsive Design: The app is fully responsive, ensuring a smooth experience on both desktop and mobile devices.

# Tech Stack:

1. Frontend: React, Tailwind CSS
2. Backend: Firebase (Firestore for database, Firebase Auth for authentication)
3. Notification: React Toastify for toast notifications

# How to Works 

1. Add Content:

(a) Click on the plus (+) button to open a modal.
(b) Enter the title and description in the modal form.
(c) Click Add to save the content, which will be stored in Firebase Firestore.

2. Edit Content:

(a) Each content item has an Edit button.
(b) Clicking Edit button opens a form where you can change the title or description.
(c) After making changes, click Save to update the content in Firestore.

3. Delete Content:

(a) Each content item has a Delete button.
(b) Clicking Delete will remove the content from the list and delete it from Firestore.

4. Search by Name:

(a) At the top of the app, there's a search bar.
(b) Type the title of the content you're looking for.
(c) The content list will filter dynamically based on your search input.

5. View Full Content Details:

(a) Click on the title of any content item to reveal its full details (i.e., the description).
(b) Click on the content again to close the details.

6. Toast Notifications:

(a) Toastify is used to show short and non-intrusive notifications for actions like adding, editing, or deleting content.
(b) This gives instant feedback to the user after performing an action.
