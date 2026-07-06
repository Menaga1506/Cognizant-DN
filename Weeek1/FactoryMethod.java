interface Document {
    void openDocument();
}

class WordDocument implements Document {
    public void openDocument() {
        System.out.println("Word document opened");
    }
}

class PdfDocument implements Document {
    public void openDocument() {
        System.out.println("PDF document opened");
    }
}

class ExcelDocument implements Document {
    public void openDocument() {
        System.out.println("Excel document opened");
    }
}

abstract class DocumentFactory {
    abstract Document createDocument();
}

class WordDocumentFactory extends DocumentFactory {
    Document createDocument() {
        return new WordDocument();
    }
}

class PdfDocumentFactory extends DocumentFactory {
    Document createDocument() {
        return new PdfDocument();
    }
}

class ExcelDocumentFactory extends DocumentFactory {
    Document createDocument() {
        return new ExcelDocument();
    }
}

public class FactoryMethodPatternExample {

    public static void main(String[] args) {

        DocumentFactory wordCreator = new WordDocumentFactory();
        DocumentFactory pdfCreator = new PdfDocumentFactory();
        DocumentFactory excelCreator = new ExcelDocumentFactory();

        Document wordFile = wordCreator.createDocument();
        Document pdfFile = pdfCreator.createDocument();
        Document excelFile = excelCreator.createDocument();

        wordFile.openDocument();
        pdfFile.openDocument();
        excelFile.openDocument();
    }
}
