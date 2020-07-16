package lt.codeacademy.shop_api.entities;

import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.Tolerate;
import lt.codeacademy.shop_api.dto.PaymentInfoDTO;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Data
@Entity
@Builder
@Table(name = "payment_info")
public class PaymentInfo {

    @Tolerate
    public PaymentInfo() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_info_id")
    private Long id;

    @NotNull
    @Column(name = "name")
    private String name;

    @NotNull
    @Column(name = "surname")
    private String surname;

    @NotNull
    @Column(name = "address")
    private String address;


    @Column(name = "post_code")
    @Size(min=5, max=5)
    private Long postCode;

    @Column(name = "card_number")
    @Size(min=8, max=8)
    private Long cardNumber;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;
}
