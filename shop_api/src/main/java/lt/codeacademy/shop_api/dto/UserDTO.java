package lt.codeacademy.shop_api.dto;

import lombok.Builder;
import lombok.Data;
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

    public UserDTO(User user) {
        this.name = user.getName();
        this.surname = user.getLastName();
        this.username = user.getUsername();
        this.roles = user.getRoles()
                .stream()
                    .map(Role::getRole)
                    .map(String::toLowerCase)
                    .collect(Collectors.toSet());
    }
}
