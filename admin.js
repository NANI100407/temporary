const form = document.getElementById("uploadForm");

form.onsubmit = (e) => {
  e.preventDefault();

  const name = document.getElementById("bookName").value;
  const cover = document.getElementById("coverURL").value;
  const link = document.getElementById("pdfLink").value;

  const newBook = { name, cover, link };

  const books = JSON.parse(localStorage.getItem("books") || "[]");
  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));

  alert("Book uploaded successfully!");
  form.reset();
};
