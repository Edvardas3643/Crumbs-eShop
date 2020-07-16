package lt.codeacademy.shop_api.dto;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.util.Set;

@Data
@Builder
public class UserDTO {

    @NotEmpty
    private String username;
    private String password;
    private Set<String> roles;
    private PaymentInfoDTO paymentInfo;

}
