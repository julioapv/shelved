const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const confirmBtn = document.querySelector("#confirmBtn")
const newBookModal = document.querySelector("#new-book-modal")
const booksContainer = document.querySelector(".books-container")
const userLibrary = [];

function Book(title, author, pageAmount, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pageAmount;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pageAmount, isRead) {
  userLibrary.push(new Book(title, author, pageAmount, isRead));
}

addBookToLibrary("Book1 Book1Book1 Book1Book1", "jose", 5, true);
addBookToLibrary("loremBook2Book2Book2Book2", "pepe", 50, false);
addBookToLibrary("Book3", "maria", 70, true);
addBookToLibrary("Book4", "carlos", 10, false);
addBookToLibrary("Book5", "daniel", 45, true);
addBookToLibrary("Book6", "fabiana", 95, true);

console.log(userLibrary);

// Function that displays each book in the page
function displayBooks() {
  
  const booksHTML = userLibrary.map(book => `
    <div class="book-container flex flex-col items-center justify-evenly w-84  p-2 rounded-md text-xl bg-blue-300">
      <h3 class="text-2xl font-bold text-center w-60 break-words">${book.title}</h3>
      <div class="book-info flex flex-col items-start justify-start">
        <p>Author ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read? ${book.isRead ? 'Read' : 'Not Read'}</p>
        </div class="flex gap-10 text-xs">
        <button class=" bg-lime-700 text-white">Mark as read</button>
        <button class=" bg-red-700 text-white">Remove</button>
        </div>
  `).join('');
  booksContainer.innerHTML = booksHTML;
}

showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").value;

  addBookToLibrary(title, author, pages, isRead)
  displayBooks()
  newBookModal.close(); // Have to send the select box value here.
});

displayBooks()

