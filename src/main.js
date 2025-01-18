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

addBookToLibrary("Book1", "jose", 5, true);
addBookToLibrary("Book2", "pepe", 50, false);
addBookToLibrary("Book3", "maria", 70, true);
addBookToLibrary("Book4", "carlos", 10, false);
addBookToLibrary("Book5", "daniel", 45, true);
addBookToLibrary("Book6", "fabiana", 95, true);

console.log(userLibrary);

// Function that displays each book in the page
function displayBooks() {
  
  const booksHTML = userLibrary.map(book => `
    <div class="book-container flex flex-col items-center justify-center w-60 p-2 rounded-md bg-blue-300">
      <h3>${book.title}</h3>
      <div class="book-info">
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>${book.isRead ? 'Read' : 'Not Read'}</p>
      </div>
    </div>
  `).join('');
  booksContainer.innerHTML = booksHTML;


  // userLibrary.forEach(book => {
  //   const bookContainer = document.createElement("div");
  //   const bookTitle = document.createElement("h3");
  //   const bookInfo = document.createElement("div")
  //   const bookAuthor = document.createElement("p");
  //   const bookPages = document.createElement("p");
  //   const bookIsRead = document.createElement("p");
    
  //   bookTitle.innerText = book.title;
  //   bookAuthor.innerText = book.author;
  //   bookPages.innerText = book.pages;
  //   bookIsRead.innerText = book.isRead;

  //   booksContainer.appendChild(bookContainer);
  //   bookContainer.appendChild(bookTitle);
  //   bookContainer.appendChild(bookInfo);
  //   bookInfo.append(bookAuthor, bookPages, bookIsRead);
  // })
}

displayBooks()

