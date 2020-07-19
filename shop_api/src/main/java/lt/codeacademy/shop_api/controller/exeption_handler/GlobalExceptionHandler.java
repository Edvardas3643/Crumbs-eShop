package lt.codeacademy.shop_api.controller.exeption_handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import javax.validation.constraints.NotNull;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({
            MethodArgumentNotValidException.class,
            NumberFormatException.class,
    })
    public ResponseEntity<ErrorContext> handleErrors(Exception ex, WebRequest request) {
        if(ex instanceof MethodArgumentNotValidException){
            return ResponseEntity.badRequest().body(
                    new ErrorContext.ErrorContextBuilder()
                            .code("502")
                            .error("My Error")
                            .build());
        }else {
            HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
            return null;
        }

    }

//    private ResponseEntity<ErrorContext> numberFormatExceptionHandler(NumberFormatException ex, HttpStatus status) {
//        ErrorContext errorContext = new ErrorContext();
//        errorContext.error = ex.getMessage();
//        errorContext.code = "434";
//        return new ResponseEntity<>(errorContext, status);
//    }

}