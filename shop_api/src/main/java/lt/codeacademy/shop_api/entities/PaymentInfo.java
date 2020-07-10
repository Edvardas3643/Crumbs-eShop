package lt.codeacademy.shop_api.entities;

import lombok.Builder;
import lombok.Data;
import lombok.experimental.Tolerate;

import javax.persistence.*;

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

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "address")
    private String address;

    @Column(name = "card_number")
    private Long cardNumber;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id", nullable = true)
    private User user;

}
