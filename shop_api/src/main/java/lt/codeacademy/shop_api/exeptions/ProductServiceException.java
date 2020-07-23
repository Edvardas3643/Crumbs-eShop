package lt.codeacademy.shop_api.exeptions;

public class ProductServiceException extends RuntimeException {
    public ProductServiceException(String message) {
        super(message);
    }
}
