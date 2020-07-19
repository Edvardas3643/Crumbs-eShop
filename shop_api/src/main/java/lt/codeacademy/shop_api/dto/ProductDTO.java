package lt.codeacademy.shop_api.dto;

import lombok.Data;
import lt.codeacademy.shop_api.entities.Product;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.Set;
import java.util.stream.Collectors;

@Data
public class ProductDTO {

    private Long id;
    @NotNull(message = "Title cant be empty")
    private String title;
    @NotNull(message = "Description cant be empty")
    private String description;
    @NotNull(message = "Ingredients cant be empty")
    private String ingredients;
    @NotNull(message = "Price cant be empty")
    @DecimalMin(value = "0.01", message = "Price cant be lower than 0.01")
    private BigDecimal price;
    @NotNull(message = "Tag cant be empty")
    private String img;
    @NotEmpty(message = "Tag cant be empty")
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
