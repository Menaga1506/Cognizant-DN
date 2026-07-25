public class EcommerceSearch {

    public static Product linearSearch(Product[] products, int searchId) {

        for (int i = 0; i < products.length; i++) {

            if (products[i].productId == searchId) {
                return products[i];
            }
        }

        return null;
    }

    public static Product binarySearch(Product[] products, int searchId) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            if (products[mid].productId == searchId) {
                return products[mid];
            }

            if (products[mid].productId < searchId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] productList = {
            new Product(104, "Watch", "Accessories"),
            new Product(101, "Laptop", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(102, "Mobile", "Electronics")
        };

        Product[] sortedProductList = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories")
        };

        Product linearResult = linearSearch(productList, 103);

        if (linearResult != null) {
            System.out.println("Linear Search Found : "
                    + linearResult.productName);
        }

        Product binaryResult = binarySearch(sortedProductList, 104);

        if (binaryResult != null) {
            System.out.println("Binary Search Found : "
                    + binaryResult.productName);
        }
    }
}
