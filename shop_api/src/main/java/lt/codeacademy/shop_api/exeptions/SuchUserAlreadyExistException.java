package lt.codeacademy.shop_api.exeptions;

public class SuchUserAlreadyExistException extends RuntimeException {
    public SuchUserAlreadyExistException(String message) {
        super(message);
    }
}
