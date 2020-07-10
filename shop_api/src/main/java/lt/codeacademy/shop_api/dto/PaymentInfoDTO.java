package lt.codeacademy.shop_api.dto;

import lombok.Data;

@Data
public class PaymentInfoDTO {

    private Long id;
    private String name;
    private String surname;
    private String address;
    private Long postCode;
    private Long cardNumber;
    private Long user;

}
