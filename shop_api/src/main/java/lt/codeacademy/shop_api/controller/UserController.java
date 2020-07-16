package lt.codeacademy.shop_api.controller;

import lt.codeacademy.shop_api.dto.PaymentInfoDTO;
import lt.codeacademy.shop_api.dto.UserDTO;
import lt.codeacademy.shop_api.entities.PaymentInfo;
import lt.codeacademy.shop_api.entities.Role;
import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.service.PaymentInfoService;
import lt.codeacademy.shop_api.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;
import java.util.Collections;
import java.util.HashSet;
import java.util.stream.Collectors;

@RestController
@RequestMapping
@Validated
public class UserController {

    private final PaymentInfoService paymentInfoService;
    private final UserService userService;

    public UserController(PaymentInfoService paymentInfoService, UserService userService) {
        this.paymentInfoService = paymentInfoService;
        this.userService = userService;
    }

    @GetMapping("/private/user")
    public UserDTO getUser(
            @AuthenticationPrincipal User user
    ) {
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
    public void newUSer(
            @RequestParam @Size(min = 6, max = 20) String username,
            @RequestParam @Size(min = 4, max = 20) String password
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
    public PaymentInfoDTO newPaymentInfo(
            @AuthenticationPrincipal User user,
            @RequestParam @Size(max = 40) String name,
            @RequestParam @Size(max = 40) String surname,
            @RequestParam @Size(max = 40) String address,
            @RequestParam @Min(5) @Max(5) Long postCode,
            @RequestParam @Min(8) @Max(8) Long cardNumber
    ) {
        PaymentInfo paymentInfo = PaymentInfo.builder()
                .user(user)
                .name(name)
                .surname(surname)
                .address(address)
                .postCode(postCode)
                .cardNumber(cardNumber)
                .build();

        return new PaymentInfoDTO(paymentInfoService.saveOrUpdatePaymentInfo(paymentInfo));
    }
}
