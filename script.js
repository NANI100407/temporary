document.addEventListener("DOMContentLoaded", () => {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  const section = document.getElementById("books-section");

  books.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "book-card";

    const img = document.createElement("img");
    img.src = book.cover;
    img.alt = book.name;
    img.className = "cover";
    img.onclick = () => {
      let count = Number(localStorage.getItem(`views_${index}`)) || 0;
      localStorage.setItem(`views_${index}`, count + 1);
      window.open(book.link, "_blank");
    };

    const name = document.createElement("h2");
    name.textContent = book.name;

    const views = document.createElement("p");
    views.className = "views";
    let count = Number(localStorage.getItem(`views_${index}`)) || 0;
    views.textContent = `Views: ${count}`;

    const btn = document.createElement("button");
    btn.textContent = "Read";
    btn.onclick = () => {
      localStorage.setItem(`views_${index}`, count + 1);
      views.textContent = `Views: ${count + 1}`;

      if (typeof gtag === "function") {
        gtag('event', 'click_read', {
          'event_category': 'Book',
          'event_label': book.name
        });
      }

      window.open(book.link, "_blank");
    };

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(views);
    card.appendChild(btn);
    section.appendChild(card);
  });
});
