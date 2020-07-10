package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

}
