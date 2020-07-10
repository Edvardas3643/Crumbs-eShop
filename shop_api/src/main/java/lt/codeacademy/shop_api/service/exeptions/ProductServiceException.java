package lt.codeacademy.shop_api.service.exeptions;

public class ProductServiceException extends RuntimeException {
    public ProductServiceException(String message) {
        super(message);
    }
}
