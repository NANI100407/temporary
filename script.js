const releasesDiv = document.getElementById("releases");

function loadBooks() {
  const books = JSON.parse(localStorage.getItem("books") || "[]");
  releasesDiv.innerHTML = "";

  books.forEach((book, index) => {
    const count = localStorage.getItem(`views_${index}`) || 0;

    const card = document.createElement("div");
    card.className = "book-card";

    const img = document.createElement("img");
    img.src = book.cover;
    img.alt = book.name;

    const title = document.createElement("h2");
    title.textContent = book.name;
    title.onclick = () => {
      localStorage.setItem(`views_${index}`, Number(count) + 1);
      alert(`View count: ${Number(count) + 1}`);
    };

    const viewInfo = document.createElement("p");
    viewInfo.textContent = `Views: ${count}`;

    const btn = document.createElement("button");
    btn.className = "read-button";
    btn.textContent = "Read";
    btn.onclick = () => {
      localStorage.setItem(`views_${index}`, Number(count) + 1);
      window.open(book.link, "_blank");
    };

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(viewInfo);
    card.appendChild(btn);
    releasesDiv.appendChild(card);
  });
}

loadBooks();
