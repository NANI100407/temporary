// Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

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

const bookContainer = document.getElementById("bookContainer");

const booksRef = ref(database, 'books');
onValue(booksRef, (snapshot) => {
  bookContainer.innerHTML = '';
  snapshot.forEach((childSnapshot) => {
    const book = childSnapshot.val();
    const key = childSnapshot.key;

    const bookDiv = document.createElement("div");
    bookDiv.className = "book-item";
    bookDiv.innerHTML = `
      <img src="${book.cover}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>👁️ ${book.views} views</p>
      <button onclick="window.open('${book.link}', '_blank'); updateViews('${key}', ${book.views})">Read</button>
    `;
    bookContainer.appendChild(bookDiv);
  });
});

window.updateViews = function(key, currentViews) {
  const bookRef = ref(database, `books/${key}/views`);
  set(bookRef, currentViews + 1);
};
