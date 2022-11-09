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