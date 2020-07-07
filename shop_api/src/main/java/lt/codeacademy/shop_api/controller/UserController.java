package lt.codeacademy.shop_api.controller;

import lt.codeacademy.shop_api.entities.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/private")
public class UserController {

    @GetMapping("/user")
    public User getUser(@AuthenticationPrincipal User user){
        return user;
    }

}
