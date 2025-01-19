const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".show-modal-button");
const closeButton = document.querySelector("dialog button");
const confirmBtn = document.querySelector("#confirmBtn")
const newBookModal = document.querySelector("#new-book-modal")
const booksContainer = document.querySelector(".books-container")
const userLibrary = [];

function Book(title, author, pageAmount, isRead) {
  this.id = Date.now().toString();
  this.title = title;
  this.author = author;
  this.pages = pageAmount;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pageAmount, isRead) {
  userLibrary.push(new Book(title, author, pageAmount, isRead));
}

booksContainer.addEventListener("click", (e) => {
  const bookContainer = e.target.closest(".book-container")
  if (!bookContainer) return;

  const bookId = bookContainer.dataset.bookId;

  if (e.target.classList.contains("mark-as-read-button")) {
    toggleReadStatus(bookId);
  } else if (e.target.classList.contains("delete-book-button")) {
    deleteBook(bookId);
  }
});

function deleteBook(bookId) {
  const bookIndex = userLibrary.findIndex(book => book.id === bookId);
  if (bookIndex !== -1) {
    userLibrary.splice(bookIndex, 1);
    displayBooks();
  }
}

function toggleReadStatus(bookId) {
  const book = userLibrary.find(book => book.id === bookId);
  if (book) {
    book.isRead = !book.isRead;
    displayBooks();
  }
}

function displayBooks() {
  const booksHTML = userLibrary.map(book => 
    `
    <div class="book-container flex flex-col justify-evenly w-74 h-80 p-5 rounded-md text-xl bg-card-color" data-book-id="${book.id}">
      <h3 class="text-2xl font-bold text-center w-60 break-words italic">${book.title}</h3>
      <div class="book-info flex-col items-start justify-start">
        <p><span class="font-bold">Author:</span> ${book.author}</p>
        <p><span class="font-bold">Pages:</span> ${book.pages}</p>
        <p><span class="font-bold">Status:</span> ${book.isRead ? 'Read' : 'Not Read'}</p>
      </div>
      <div class="flex justify-center items-center gap-2 text-md">
        <button class="flex gap-1 items-center justify-center mark-as-read-button rounded-lg px-3 py-4 w-32 cursor-pointer break-words ${book.isRead ? 'bg-gray-600' : 'bg-lime-600'} ${book.isRead ? 'hover:bg-gray-700' : 'hover:bg-lime-700'} text-white">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </span>  
          ${book.isRead ? 'Unread' : 'Read'}
        </button>
        <button class="delete-book-button flex gap-1 items-center rounded-lg px-3 py-4 w-32 cursor-pointer bg-red-700 hover:bg-red-900 text-white">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </span>
          Remove
        </button>
      </div>
    </div>
  `).join('');
  booksContainer.innerHTML = booksHTML;
}

showButton.addEventListener("click", () => {
  dialog.showModal();
  dialog.classList.remove("hidden")
});

closeButton.addEventListener("click", () => {
  dialog.close();
  dialog.classList.add("hidden")
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").value;

  if(!title || !author || !pages) {
    alert("Please don't leave any empty fields")
  } else {
    addBookToLibrary(title, author, pages, isRead)
    displayBooks()
    newBookModal.close();
    newBookModal.classList.add("hidden")

    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#pages").value = '';
    document.querySelector("#isRead").value = 'false';
  }
  
});

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
displayBooks()

