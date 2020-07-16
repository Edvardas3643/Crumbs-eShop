package lt.codeacademy.shop_api.entities;

import lombok.Builder;
import lombok.Data;
import lombok.experimental.Tolerate;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.Set;

@Data
@Entity
@Builder
@Table(name = "products")
public class Product {

    @Tolerate
    public Product() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long id;

    @NotNull
    @Column(name = "title")
    private String title;

    @NotNull
    @Column(name = "description")
    private String description;

    @NotNull
    @Column(name = "ingredients")
    private String ingredients;

    @NotNull
    @Min(value = 1, message = "Price Must be Bigger than 1")
    @Column(name = "price")
    private BigDecimal price;

    @NotNull
    @Column(name = "img")
    private String img;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "product_tags",
            joinColumns = {@JoinColumn(name = "product_id")},
            inverseJoinColumns = {@JoinColumn(name = "tag_id")}
    )
    private Set<Tag> tag;

}