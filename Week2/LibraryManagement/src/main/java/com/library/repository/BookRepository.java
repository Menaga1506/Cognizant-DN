package com.library.repository;

import com.library.model.Book;

import java.util.HashMap;
import java.util.Collection;
import java.util.Map;

/**
 * Repository (DAO) layer. In a real app this would talk to a database.
 * Here we simulate storage with an in-memory Map so the example runs
 * with plain Spring Core / no database setup required.
 */
public class BookRepository {

    private final Map<String, Book> bookStore = new HashMap<>();

    public void save(Book book) {
        bookStore.put(book.getIsbn(), book);
    }

    public Book findByIsbn(String isbn) {
        return bookStore.get(isbn);
    }

    public Collection<Book> findAll() {
        return bookStore.values();
    }

    public void deleteByIsbn(String isbn) {
        bookStore.remove(isbn);
    }
}
