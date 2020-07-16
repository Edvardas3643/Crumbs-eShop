package lt.codeacademy.shop_api.entities;

import lombok.Builder;
import lombok.Data;
import lombok.experimental.Tolerate;
import lt.codeacademy.shop_api.dto.OrderDTO;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;


@Data
@Entity
@Builder
@Table(name = "orders")
public class Order {

    @Tolerate
    public Order() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "price")
    @DecimalMin(value = "0.01", message = "Price Must be Bigger than 0.01")
    @NotNull
    private BigDecimal price;

    @Column(name = "quantity")
    @Min(value = 1, message = "Quantity Must be Bigger than 0")
    private Long quantity;

    @ManyToOne
    @JoinColumn(name = "order_history_id", nullable = true)
    private OrderHistory orderHistory;



}
