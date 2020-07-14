package lt.codeacademy.shop_api.controller;

import lt.codeacademy.shop_api.dto.PaymentInfoDTO;
import lt.codeacademy.shop_api.dto.UserDTO;
import lt.codeacademy.shop_api.entities.PaymentInfo;
import lt.codeacademy.shop_api.entities.Role;
import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.service.PaymentInfoService;
import lt.codeacademy.shop_api.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashSet;
import java.util.stream.Collectors;

@RestController
@RequestMapping()
public class UserController {

    private final PaymentInfoService paymentInfoService;
    private final UserService userService;

    public UserController(PaymentInfoService paymentInfoService, UserService userService) {
        this.paymentInfoService = paymentInfoService;
        this.userService = userService;
    }

    @GetMapping("/private/user")
    public UserDTO getUser(@AuthenticationPrincipal User user) {

        PaymentInfo paymentInfo = paymentInfoService.getNewestPaymentInfo(user);

        return UserDTO.builder()
                .username(user.getUsername())
                .paymentInfo(new PaymentInfoDTO(paymentInfo))
                .roles(user.getRoles()
                        .stream()
                        .map(Role::getValue)
                        .map(String::toLowerCase)
                        .collect(Collectors.toSet()))
                .build();
    }

    @PostMapping("/newUser")
    public void newUSer(@RequestParam String username,
                        @RequestParam String password
    ) {
        UserDTO userDTO = UserDTO.builder()
                .username(username)
                .password(password)
                .paymentInfo(null)
                .roles(new HashSet<>(Collections.singletonList("USER")))
                .build();

        userService.newUser(userDTO);
    }

    @PostMapping("/private/newPaymentInfo")
    public PaymentInfo newPaymentInfo(@AuthenticationPrincipal User user,
                               @RequestParam String name,
                               @RequestParam String surname,
                               @RequestParam String address,
                               @RequestParam Long postCode,
                               @RequestParam Long cardNumber
    ) {

        PaymentInfo paymentInfo = PaymentInfo.builder()
                .user(user)
                .name(name)
                .surname(surname)
                .address(address)
                .postCode(postCode)
                .cardNumber(cardNumber)
                .build();

       return paymentInfoService.saveOrUpdatePaymentInfo(paymentInfo);
    }
}
