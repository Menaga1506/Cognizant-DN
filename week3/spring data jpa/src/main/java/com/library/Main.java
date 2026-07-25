package com.library;

import com.library.model.Book;
import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

    public static void main(String[] args) {

        // Load the Spring container using the XML configuration
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the BookService bean (Spring wires in BookRepository automatically)
        BookService bookService = context.getBean("bookService", BookService.class);

        // Exercise the wired beans to confirm the configuration works
        bookService.addBook("978-0134685991", "Effective Java", "Joshua Bloch");
        bookService.addBook("978-0596007126", "Head First Design Patterns", "Freeman & Robson");

        System.out.println("\nAll books in library:");
        for (Book book : bookService.listBooks()) {
            System.out.println(" - " + book);
        }

        Book found = bookService.getBook("978-0134685991");
        System.out.println("\nLookup by ISBN: " + found);
    }
}
