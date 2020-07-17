package lt.codeacademy.shop_api.dto;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.Size;
import java.util.Set;

@Data
@Builder
public class UserDTO {

    @Size(min = 6, max = 24)
    private String username;
    @Size(min = 6, max = 24)
    private String password;
    private Set<String> roles;
    private PaymentInfoDTO paymentInfo;

}
