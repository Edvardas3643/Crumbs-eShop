package lt.codeacademy.shop_api.exeptions;

public class UserCredentialsException extends RuntimeException {
    public UserCredentialsException(String message) {
        super(message);
    }
}
