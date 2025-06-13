import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkuHOtFVPAAdf4eD_6BA0gn4PJQXnJQlA",
  authDomain: "temporaryviewer-e1507.firebaseapp.com",
  databaseURL: "https://temporaryviewer-e1507-default-rtdb.firebaseio.com",
  projectId: "temporaryviewer-e1507",
  storageBucket: "temporaryviewer-e1507.appspot.com",
  messagingSenderId: "846271951058",
  appId: "1:846271951058:web:f4f9405c2defe247687d0b",
  measurementId: "G-SBNF3DC1ZJ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const bookList = document.getElementById("bookList");

onValue(ref(db, "books"), (snapshot) => {
  bookList.innerHTML = "";
  snapshot.forEach((child) => {
    const data = child.val();
    const key = child.key;
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      <h3>${data.name}</h3>
      <img src="${data.cover}" alt="Cover Image" onerror="this.src='https://via.placeholder.com/200x300?text=Image+Not+Found'">
      <p>👁️ Views: ${data.views}</p>
      <button onclick="readBook('${key}', '${data.pdf}')">Read</button>
    `;
    bookList.appendChild(div);
  });
});

window.readBook = function (key, link) {
  const bookRef = ref(db, "books/" + key);
  update(bookRef, {
    views: Math.floor(Math.random() * 10000000) + 1
  });
  window.open(link, "_blank");
};
