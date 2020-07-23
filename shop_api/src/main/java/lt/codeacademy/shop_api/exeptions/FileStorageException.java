package lt.codeacademy.shop_api.exeptions;


public class FileStorageException extends RuntimeException {
    public FileStorageException(String message) {
        super(message);
    }
}