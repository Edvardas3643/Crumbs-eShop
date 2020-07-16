package lt.codeacademy.shop_api.dto;

import lombok.Data;
import lt.codeacademy.shop_api.entities.Product;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.Set;
import java.util.stream.Collectors;

@Data
public class ProductDTO {

    private Long id;
    @NotNull
    private String title;
    @NotNull
    private String description;
    @NotNull
    private String ingredients;
    @NotNull
    private BigDecimal price;
    @NotNull
    private String img;
    @NotEmpty
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

    public ProductDTO() {
    }
}
