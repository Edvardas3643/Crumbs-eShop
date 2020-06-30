package lt.codeacademy.shop_api.service;

public class ProductServiceException extends RuntimeException {
    public ProductServiceException(String message) {
        super(message);
    }
}
