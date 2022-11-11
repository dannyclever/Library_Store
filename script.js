const formContainer = document.querySelector("#container");
const form = document.querySelector("#form");
const newBook = document.querySelector("#new-book");
const overlay = document.querySelector(".overlay");
const closeButton= document.querySelector(".close");
const bookshelf = document.querySelector(".bookshelf");
let books = JSON.parse(localStorage.getItem("books")) || [];
let formOpen = false;


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function formOpenOrClosed() {
    if (formOpen) {
        formContainer.style.transform ="scale(0)";
        newBook.style.transform = "rotate(0)";
        form.reset();
        overlay.style.opacity = 0;
        formOpen = false;
    } else {
        formContainer.style.transform ="scale(1)";
        newBook.style.transform = "rotate(45deg)";
        overlay.style.opacity = 1;
        formOpen = true;
    }
}