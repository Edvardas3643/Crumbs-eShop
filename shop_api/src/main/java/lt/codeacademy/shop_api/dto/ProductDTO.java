package lt.codeacademy.shop_api.dto;

import lombok.Data;
import lt.codeacademy.shop_api.entities.Product;
import lt.codeacademy.shop_api.entities.Tag;

import java.math.BigDecimal;
import java.util.Set;
import java.util.stream.Collectors;

@Data
public class ProductDTO {

    private Long id;

    private String title;

    private String description;

    private String ingredients;

    private BigDecimal price;

    private String img;

    private Set<TagDTO> tag;

    public ProductDTO(Product product) {
        this.id = product.getId();
        this.title = product.getTitle();
        this.description = product.getDescription();
        this.ingredients = product.getDescription();
        this.price = product.getPrice();
        this.img = product.getImg();
        this.tag = product.getTag()
                .stream()
                .map(TagDTO::new)
                .collect(Collectors.toSet());
    }


}
