// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkuHOtFVPAAdf4eD_6BA0gn4PJQXnJQlA",
  authDomain: "temporaryviewer-e1507.firebaseapp.com",
  databaseURL: "https://temporaryviewer-e1507-default-rtdb.firebaseio.com",
  projectId: "temporaryviewer-e1507",
  storageBucket: "temporaryviewer-e1507.appspot.com",
  messagingSenderId: "846271951058",
  appId: "1:846271951058:web:f4f9405c2defe247687d0b"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const uploadForm = document.getElementById("uploadForm");
const status = document.getElementById("status");

uploadForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const cover = document.getElementById("cover").value;
  const link = document.getElementById("link").value;

  const booksRef = ref(database, 'books');
  push(booksRef, {
    title,
    cover,
    link,
    views: 0
  }).then(() => {
    status.textContent = "Book uploaded successfully!";
    uploadForm.reset();
  }).catch((error) => {
    status.textContent = "Error uploading book.";
    console.error(error);
  });
});
