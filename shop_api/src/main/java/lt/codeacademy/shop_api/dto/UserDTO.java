package lt.codeacademy.shop_api.dto;

import lombok.Data;
import lt.codeacademy.shop_api.entities.PaymentInfo;
import lt.codeacademy.shop_api.entities.Role;
import lt.codeacademy.shop_api.entities.User;

import java.util.Set;
import java.util.stream.Collectors;

@Data
public class UserDTO {

    private String name;
    private String surname;
    private String username;
    private Set<String> roles;
    private PaymentInfoDTO paymentInfo;

    public UserDTO(User user, PaymentInfo paymentInfo) {
        this.name = user.getName();
        this.surname = user.getLastName();
        this.username = user.getUsername();
        this.paymentInfo = new PaymentInfoDTO(paymentInfo);
        this.roles = user.getRoles()
                .stream()
                    .map(Role::getRole)
                    .map(String::toLowerCase)
                    .collect(Collectors.toSet());
    }

    public UserDTO() {
    }
}
