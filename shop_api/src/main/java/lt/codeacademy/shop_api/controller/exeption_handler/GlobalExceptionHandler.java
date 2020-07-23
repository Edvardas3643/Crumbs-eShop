package lt.codeacademy.shop_api.controller.exeption_handler;

import lt.codeacademy.shop_api.exeptions.SuchUserAlreadyExistException;
import lt.codeacademy.shop_api.exeptions.UserCredentialsException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({
            SuchUserAlreadyExistException.class,
            UserCredentialsException.class,
            UsernameNotFoundException.class,
            MethodArgumentNotValidException.class,
            RuntimeException.class
    })
    public ResponseEntity<ErrorContext> handleErrors(Exception ex) {
        if (ex instanceof UsernameNotFoundException) {
            return ResponseEntity.badRequest().body(
                    new ErrorContext.ErrorContextBuilder()
                            .code("404")
                            .error("Username not found")
                            .build());
        } else if (ex instanceof MethodArgumentNotValidException) {
            return ResponseEntity.badRequest().body(
                    new ErrorContext.ErrorContextBuilder()
                            .code("501")
                            .error("Not Valid Arguments Exception")
                            .build());
        } else if (ex instanceof SuchUserAlreadyExistException) {
            return ResponseEntity.badRequest().body(
                    new ErrorContext.ErrorContextBuilder()
                            .code("504")
                            .error("Such a User Already Exists")
                            .build());
        } else if (ex instanceof UserCredentialsException) {
            return ResponseEntity.badRequest().body(
                    new ErrorContext.ErrorContextBuilder()
                            .code("503")
                            .error("Wrong User Credentials")
                            .build());
        } else {
            return ResponseEntity.badRequest().body(
                    new ErrorContext.ErrorContextBuilder()
                            .code("505")
                            .error("Internal Server Error")
                            .build());
        }
    }
}
