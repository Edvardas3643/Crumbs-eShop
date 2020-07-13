package lt.codeacademy.shop_api.dto;

import lombok.Builder;
import lombok.Data;
import java.util.Set;

@Data
@Builder
public class UserDTO {

    private String username;
    private String password;
    private Set<String> roles;
    private PaymentInfoDTO paymentInfo;

}
