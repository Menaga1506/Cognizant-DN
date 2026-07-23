package com.library.service;

import com.library.model.Book;
import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service layer, now managed by Spring via @Service + component-scan
 * instead of an explicit <bean> definition in XML.
 *
 * @Transactional here is Spring Data JPA handling transaction
 * begin/commit/rollback for us — equivalent to the manual
 * tx.beginTransaction() / tx.commit() / tx.rollback() you'd write
 * by hand with raw Hibernate.
 */
@Service
public class BookService {

    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Transactional
    public void addBook(String isbn, String title, String author) {
        Book book = new Book(isbn, title, author);
        bookRepository.save(book);
        System.out.println("Added: " + book);
    }

    @Transactional(readOnly = true)
    public Book getBook(String isbn) {
        return bookRepository.findById(isbn).orElse(null);
    }

    @Transactional(readOnly = true)
    public List<Book> listBooks() {
        return bookRepository.findAll();
    }

    @Transactional
    public void removeBook(String isbn) {
        bookRepository.deleteById(isbn);
        System.out.println("Removed book with ISBN: " + isbn);
    }
}
