package lt.codeacademy.shop_api.service.exeptions;

public class UserNotFoundException extends RuntimeException {
   public UserNotFoundException (String message){
       super(message);
   }
}
