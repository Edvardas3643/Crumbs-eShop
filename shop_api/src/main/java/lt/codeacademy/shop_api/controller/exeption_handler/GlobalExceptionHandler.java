package lt.codeacademy.shop_api.controller.exeption_handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({
            MethodArgumentNotValidException.class,
            RuntimeException.class
    })
    public ResponseEntity<ErrorContext> handleErrors(Exception ex, WebRequest request) {
        if (ex instanceof MethodArgumentNotValidException) {
            return ResponseEntity.badRequest().body(
                    new ErrorContext.ErrorContextBuilder()
                            .code("502")
                            .error("Not Valid Arguments Exception")
                            .build());
        } else {
            return ResponseEntity.badRequest().body(
                    new ErrorContext.ErrorContextBuilder()
                            .code("502")
                            .error("Internal Server Error")
                            .build());
        }
    }
}