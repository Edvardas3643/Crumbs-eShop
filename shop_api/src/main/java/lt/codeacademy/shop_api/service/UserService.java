package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.dto.UserDTO;
import lt.codeacademy.shop_api.entities.Role;
import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleService roleService;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, RoleService roleService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleService = roleService;
    }

    public User getUserByUsername(String username){
            return userRepository.findUserByUsername(username).orElseThrow(() ->new UsernameNotFoundException("No user found by name: " + username));
    }

    public void newUser(UserDTO userDTO) {
        Set<Role> role = roleService.findRoleByValue(userDTO.getRoles());
        User user = new User();
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setUsername(userDTO.getUsername());
        user.setRoles(role);

        userRepository.save(user);
    }
}
