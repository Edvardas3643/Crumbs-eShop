package lt.codeacademy.shop_api.entities;

import lombok.Builder;
import lombok.Data;
import lombok.experimental.Tolerate;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Builder
@Table(name = "order_history")
public class OrderHistory {

    @Tolerate
    public OrderHistory() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_history_id")
    private Long id;

    @CreationTimestamp
    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "created_on")
    private LocalDateTime createdOn;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = true)
    private User user;

    @NotNull
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "payment_info_id")
    private PaymentInfo paymentInfo;

    @OneToMany(
            cascade = CascadeType.ALL,
            mappedBy = "orderHistory",
            fetch = FetchType.EAGER)
    private List<Order> orders;

}
