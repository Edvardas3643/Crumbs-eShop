package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserByUsername(String username){
            return userRepository.findUserByUsername(username).orElseThrow(() ->new UsernameNotFoundException("No user found by name: " + username));
    }

}
