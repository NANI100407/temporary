document.getElementById("upload-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("book-name").value.trim();
  const cover = document.getElementById("cover-link").value.trim();
  const link = document.getElementById("pdf-link").value.trim();

  if (!name || !cover || !link) {
    document.getElementById("status-msg").textContent = "Please fill all fields.";
    return;
  }

  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.push({ name, cover, link });
  localStorage.setItem("books", JSON.stringify(books));

  document.getElementById("status-msg").textContent = "Book uploaded successfully!";
  this.reset();
});
