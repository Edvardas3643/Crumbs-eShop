package lt.codeacademy.shop_api.controller.exeption_handler;

import lt.codeacademy.shop_api.service.exeptions.UserNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({
            UserNotFoundException.class,
            MethodArgumentNotValidException.class,
            RuntimeException.class
    })
    public ResponseEntity<ErrorContext> handleErrors(Exception ex) {
        if (ex instanceof UserNotFoundException) {
            return ResponseEntity.badRequest().body(
                    new ErrorContext.ErrorContextBuilder()
                            .code("404")
                            .error(ex.getMessage())
                            .build());
        } else if (ex instanceof MethodArgumentNotValidException) {
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
