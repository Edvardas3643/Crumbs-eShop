package lt.codeacademy.shop_api.dto;

import lombok.Data;
import lt.codeacademy.shop_api.entities.PaymentInfo;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class PaymentInfoDTO {

    public Long id;
    @NotEmpty(message = "Name cant be empty")
    public String name;
    @NotEmpty(message = "Surname cant be empty")
    public String surname;
    @NotEmpty(message = "Address cant be empty")
    public String address;
    @Size(min = 5, max = 5, message = "Post Code should be between 6 to 24 characters long")
    public String postCode;
    @Size(min = 8, max = 8, message = "Card Number should be between 6 to 24 characters long")
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
