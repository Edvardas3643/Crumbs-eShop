package lt.codeacademy.shop_api.dto;

import lombok.Data;
import lt.codeacademy.shop_api.entities.PaymentInfo;

import javax.validation.constraints.NotNull;

@Data
public class PaymentInfoDTO {

    public Long id;
    @NotNull
    public String name;
    @NotNull
    public String surname;
    @NotNull
    public String address;
    @NotNull
    public Long postCode;
    @NotNull
    public Long cardNumber;

    public PaymentInfoDTO(PaymentInfo p) {
        this.id = p.getId();
        this.name = p.getName();
        this.surname = p.getSurname();
        this.address = p.getAddress();
        this.postCode = p.getPostCode();
        this.cardNumber = p.getCardNumber();
    }

    public PaymentInfoDTO() {
    }
}
