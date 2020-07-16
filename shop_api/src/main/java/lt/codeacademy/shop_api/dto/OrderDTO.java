package lt.codeacademy.shop_api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lt.codeacademy.shop_api.entities.Order;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Data
public class OrderDTO {

    private Long id;
    @NotNull
    private ProductDTO product;
    @NotNull
    private BigDecimal price;
    @NotNull
    @JsonProperty("qty")
    private Long quantity;

    public OrderDTO(Order order) {
        this.id = order.getId();
        this.product = new ProductDTO(order.getProduct());
        this.price = order.getPrice();
        this.quantity = order.getQuantity();
    }

    public OrderDTO() {
    }
}
