package lt.codeacademy.shop_api.dto;

import lombok.Data;
import lt.codeacademy.shop_api.entities.PaymentInfo;

@Data
public class PaymentInfoDTO {

    private Long id;
    private String name;
    private String surname;
    private String address;
    private Long postCode;
    private Long cardNumber;
    private Long user;

    public PaymentInfoDTO(PaymentInfo p) {
        this.id = p.getId();
        this.name = p.getName();
        this.surname = p.getSurname();
        this.address = p.getAddress();
        this.postCode = p.getPostCode();
        this.cardNumber = p.getCardNumber();
        this.user = p.getUser().getId();
    }
}
