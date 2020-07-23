package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.dto.UserDTO;
import lt.codeacademy.shop_api.entities.Role;
import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.exeptions.SuchUserAlreadyExistException;
import lt.codeacademy.shop_api.exeptions.UserCredentialsException;
import lt.codeacademy.shop_api.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserDetailsServiceImpl userDetailsService;
    private final PasswordEncoder passwordEncoder;
    private final RoleService roleService;

    public UserService(UserRepository userRepository, UserDetailsServiceImpl userDetailsService, PasswordEncoder passwordEncoder, RoleService roleService) {
        this.userRepository = userRepository;
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
        this.roleService = roleService;
    }

    public void newUser(UserDTO userDTO) {
        Set<Role> role = roleService.findRoleByValue(userDTO.getRoles());
        User user = new User();
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setUsername(userDTO.getUsername());
        user.setRoles(role);

        try {
            userRepository.save(user);
        }catch (Exception ex){
            throw new SuchUserAlreadyExistException("Such a User Already Exists");
        }

    }

    public User getAuthenticatedUser(UserDTO userDTO) {
        User user = (User) userDetailsService.loadUserByUsername(userDTO.getUsername());
//        System.out.println(user.getPassword());
//        System.out.println(userDTO.getPassword());
//        System.out.println(passwordEncoder.encode(userDTO.getPassword()));
//        if (user.getPassword().equals(passwordEncoder.encode(userDTO.getPassword()))) {
            return user;
//        } else {
//            throw new UserCredentialsException("Wrong password");
//        }
    }
}
