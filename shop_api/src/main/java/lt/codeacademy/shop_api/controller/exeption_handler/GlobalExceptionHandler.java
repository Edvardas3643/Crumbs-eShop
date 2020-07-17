package lt.codeacademy.shop_api.controller.exeption_handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({
            NumberFormatException.class,
    })
    public ResponseEntity<ErrorContext> handleErrors(Exception ex, WebRequest request) {
            HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
            return handleRuntimeException((NumberFormatException) ex, status);
    }

    private ResponseEntity<ErrorContext> handleRuntimeException(NumberFormatException ex, HttpStatus status) {
        ErrorContext errorContext = new ErrorContext();
        errorContext.error = ex.getMessage();
        errorContext.code = "500";
        System.out.println("error sent");
        return new ResponseEntity<>(errorContext, status);
    }

}