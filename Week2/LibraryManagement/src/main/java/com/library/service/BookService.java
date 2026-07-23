package com.library.service;

import com.library.model.Book;
import com.library.repository.BookRepository;

import java.util.Collection;

/**
 * Service layer. Spring injects the BookRepository dependency
 * (configured in applicationContext.xml) via constructor injection.
 */
public class BookService {

    private final BookRepository bookRepository;

    // Constructor used by Spring for dependency injection
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String isbn, String title, String author) {
        Book book = new Book(isbn, title, author);
        bookRepository.save(book);
        System.out.println("Added: " + book);
    }

    public Book getBook(String isbn) {
        return bookRepository.findByIsbn(isbn);
    }

    public Collection<Book> listBooks() {
        return bookRepository.findAll();
    }

    public void removeBook(String isbn) {
        bookRepository.deleteByIsbn(isbn);
        System.out.println("Removed book with ISBN: " + isbn);
    }
}
