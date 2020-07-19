package lt.codeacademy.shop_api.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lt.codeacademy.shop_api.entities.Order;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Data
public class OrderDTO {

    private Long id;
    @NotEmpty(message = "Product cant be empty")
    @NotNull(message = "Product cant be null")
    private ProductDTO product;
    @DecimalMin(value = "0.01", message = "Price cant be lower than 0.01")
    private BigDecimal price;
    @NotNull(message = "Quantity Cant Be Null")
    @Min(value = 1, message = "The quantity must be at least One")
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
