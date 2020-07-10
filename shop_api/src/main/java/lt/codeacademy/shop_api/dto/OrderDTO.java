package lt.codeacademy.shop_api.dto;

import lombok.Data;
import lt.codeacademy.shop_api.entities.Order;

import java.math.BigDecimal;

@Data
public class OrderDTO {

    private ProductDTO product;
    private BigDecimal price;
    private Long quantity;

    public OrderDTO(Order order) {
        this.product = new ProductDTO(order.getProduct());
        this.price = order.getPrice();
        this.quantity = order.getQuantity();
    }
}
