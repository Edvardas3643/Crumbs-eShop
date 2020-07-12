package lt.codeacademy.shop_api.controller;

import lt.codeacademy.shop_api.dto.UserDTO;
import lt.codeacademy.shop_api.entities.PaymentInfo;
import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.service.PaymentInfoService;
import lt.codeacademy.shop_api.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/private")
public class UserController {

    private final PaymentInfoService paymentInfoService;

    public UserController(PaymentInfoService paymentInfoService) {
        this.paymentInfoService = paymentInfoService;
    }

    @GetMapping("/user")
    public UserDTO getUser(@AuthenticationPrincipal User user) {
        return new UserDTO(user, paymentInfoService.getNewestPaymentInfo(user));
    }

}
