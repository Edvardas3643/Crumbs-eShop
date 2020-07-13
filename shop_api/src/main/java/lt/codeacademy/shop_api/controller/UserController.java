package lt.codeacademy.shop_api.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lt.codeacademy.shop_api.dto.UserDTO;
import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.service.PaymentInfoService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping()
public class UserController {

    private final PaymentInfoService paymentInfoService;
    private final static ObjectMapper mapper = new ObjectMapper();

    public UserController(PaymentInfoService paymentInfoService) {
        this.paymentInfoService = paymentInfoService;
    }

    @GetMapping("/private/user")
    public UserDTO getUser(@AuthenticationPrincipal User user) {
        return new UserDTO(user, paymentInfoService.getNewestPaymentInfo(user));
    }

    @GetMapping("/newUser")
    public void newUSer(@RequestParam String user) throws JsonProcessingException {

        UserDTO userDTO = mapper.readValue(user, UserDTO.class);

        System.out.println(userDTO);
    }
}
