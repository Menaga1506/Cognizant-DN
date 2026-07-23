package com.library.repository;

import com.library.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository.
 *
 * Notice there's no implementation here at all — no Session, no
 * Transaction, no try/catch/finally like the old plain-Hibernate style.
 * Spring Data JPA generates the implementation at runtime (a dynamic
 * proxy) and gives us save(), findById(), findAll(), deleteById(), etc.
 * for free, on top of whichever JPA provider is configured (Hibernate here).
 */
public interface BookRepository extends JpaRepository<Book, String> {
    // Custom finder methods can be added just by declaring a method
    // signature, e.g.:
    // List<Book> findByAuthor(String author);
}
