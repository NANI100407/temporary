import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

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

window.uploadBook = function () {
  const name = document.getElementById("bookName").value;
  const cover = document.getElementById("coverLink").value;
  const pdf = document.getElementById("pdfLink").value;

  if (name && cover && pdf) {
    push(ref(db, "books"), {
      name,
      cover,
      pdf,
      views: 0
    });
    alert("✅ Book uploaded successfully!");
    document.getElementById("bookName").value = "";
    document.getElementById("coverLink").value = "";
    document.getElementById("pdfLink").value = "";
  } else {
    alert("⚠️ Please fill all fields.");
  }
}
