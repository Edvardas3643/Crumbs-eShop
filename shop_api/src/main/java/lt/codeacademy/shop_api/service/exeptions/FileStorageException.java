package lt.codeacademy.shop_api.service.exeptions;


public class FileStorageException extends RuntimeException {
    public FileStorageException(String message) {
        super(message);
    }
}