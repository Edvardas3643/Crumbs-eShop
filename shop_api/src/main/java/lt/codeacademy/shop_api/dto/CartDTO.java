package lt.codeacademy.shop_api.dto;

import lombok.Data;

@Data
public class CartDTO {

    private ProductDTO product;

    private long qty;

    public CartDTO() {
    }
}
