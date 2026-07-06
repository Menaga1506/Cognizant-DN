package com.library.repository;

public class BookRepository {

    public BookRepository() {
        System.out.println("BookRepository object created!");
    }

    public String getBookDetails() {
        return "Book: Java Programming, Author: James Gosling";
    }
}
