package lt.codeacademy.shop_api.dto;

import lombok.Data;
import lt.codeacademy.shop_api.entities.PaymentInfo;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class PaymentInfoDTO {

    public Long id;
    @NotNull
    public String name;
    @NotNull
    public String surname;
    @NotNull
    public String address;
    @Size(min = 5, max = 5)
    public String postCode;
    @Size(min = 8, max = 8)
    public String cardNumber;

    public PaymentInfoDTO(PaymentInfo p) {

        String postCode = "";
        if (p.getPostCode() != null) {
            postCode = String.valueOf(p.getPostCode());
        }

        String cardNumber = "";
        if (p.getCardNumber() != null) {
            cardNumber = String.valueOf(p.getCardNumber());
        }

        this.id = p.getId();
        this.name = p.getName();
        this.surname = p.getSurname();
        this.address = p.getAddress();
        this.postCode = postCode;
        this.cardNumber = cardNumber;
    }

    public PaymentInfoDTO() {
    }
}
