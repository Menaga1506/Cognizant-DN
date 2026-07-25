# LibraryManagement

A small Spring Core / Spring Context demo project that wires a `BookService`
to a `BookRepository` using XML-based configuration (`applicationContext.xml`).

## Project structure

```
LibraryManagement/
├── pom.xml
├── .gitignore
├── README.md
└── src/main/
    ├── java/com/library/
    │   ├── Main.java
    │   ├── model/Book.java
    │   ├── repository/BookRepository.java
    │   └── service/BookService.java
    └── resources/
        └── applicationContext.xml
```

## Prerequisites

- JDK 11+ installed
- Maven installed
- Git installed
- VS Code with the "Extension Pack for Java" and "Maven for Java" extensions (recommended)

## Build and run

From the `LibraryManagement` folder:

```bash
mvn clean install
mvn exec:java
```

Or, without the exec plugin:

```bash
mvn clean package
java -cp target/classes;target/dependency/* com.library.Main   # Windows
java -cp target/classes:target/dependency/* com.library.Main   # macOS/Linux
```

(The simplest option is `mvn exec:java`, already configured in `pom.xml`.)

Expected output:

```
Added: Book{isbn='978-0134685991', title='Effective Java', author='Joshua Bloch'}
Added: Book{isbn='978-0596007126', title='Head First Design Patterns', author='Freeman & Robson'}

All books in library:
 - Book{isbn='978-0134685991', title='Effective Java', author='Joshua Bloch'}
 - Book{isbn='978-0596007126', title='Head First Design Patterns', author='Freeman & Robson'}

Lookup by ISBN: Book{isbn='978-0134685991', title='Effective Java', author='Joshua Bloch'}
```

## Opening in VS Code

1. Open VS Code → File → Open Folder → select the `LibraryManagement` folder.
2. VS Code should detect it as a Maven project (via the Java extensions) and resolve dependencies automatically.
3. Open `Main.java` and click "Run" above the `main` method, or use the terminal commands above.

## Pushing to GitHub

1. Create a new, empty repository on GitHub (do **not** initialize it with a README/.gitignore).
2. In a terminal, from inside the `LibraryManagement` folder:

```bash
git init
git add .
git commit -m "Initial commit: Spring Core Library Management project"
git branch -M main
git remote add origin https://github.com/<your-username>/LibraryManagement.git
git push -u origin main
```

Replace `<your-username>` with your GitHub username (and `LibraryManagement` with your repo name if different).
