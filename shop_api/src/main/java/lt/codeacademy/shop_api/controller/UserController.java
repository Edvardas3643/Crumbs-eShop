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

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;
import java.util.Collections;
import java.util.HashSet;
import java.util.stream.Collectors;

@RestController
@RequestMapping
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
           @RequestBody @Valid UserDTO u
    ) {
        UserDTO userDTO = UserDTO.builder()
                .username(u.getUsername())
                .password(u.getPassword())
                .paymentInfo(null)
                .roles(new HashSet<>(Collections.singletonList("USER")))
                .build();

        userService.newUser(userDTO);
    }

    @PostMapping("/private/newPaymentInfo")
    public PaymentInfoDTO newPaymentInfo(
            @AuthenticationPrincipal User user,
            @RequestBody @Valid PaymentInfoDTO p

    ) {
        PaymentInfo paymentInfo = PaymentInfo.builder()
                .user(user)
                .name(p.getName())
                .surname(p.getSurname())
                .address(p.getAddress())
                .postCode(Long.valueOf(p.getPostCode()))
                .cardNumber(Long.valueOf(p.getCardNumber()))
                .build();

        return new PaymentInfoDTO(paymentInfoService.saveOrUpdatePaymentInfo(paymentInfo));
    }
}
