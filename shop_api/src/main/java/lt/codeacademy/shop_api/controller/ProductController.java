package lt.codeacademy.shop_api.controller;

import lt.codeacademy.shop_api.entities.Product;
import lt.codeacademy.shop_api.entities.Tag;
import lt.codeacademy.shop_api.service.ProductService;
import lt.codeacademy.shop_api.service.TagService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping
public class ProductController {

    private final ProductService productService;
    private final TagService tagService;

    public ProductController(ProductService productService, TagService tagService) {
        this.productService = productService;
        this.tagService = tagService;
    }

    @GetMapping("/shopfront")
    private List<Product> getProductsByKeyword(@RequestParam String tag) {
        return productService.findAllByTagIsContaining(tag);
    }

    @GetMapping("/getAll")
    private List<Product> getAll() {
        return productService.findAll();
    }

    private Set<Tag> getTags(String[] tags) {
        return Stream.of(tags)
                .map(tagService::getByTagName)
                .collect(Collectors.toSet());
    }

    @PostMapping("/saveProduct")
    private Product saveOrUpdateProduct(
            @RequestParam(name = "file", required = false) @NotEmpty MultipartFile file,
            @RequestParam(name = "title") @NotEmpty String title,
            @RequestParam(name = "description", required = false) @NotEmpty String description,
            @RequestParam(name = "price") @NotEmpty String price,
            @RequestParam(name = "tags") @Size(min = 1) String[] tags
    ) {

        Set<Tag> tagSet = getTags(tags);

        Product product = Product.builder()
                .title(title)
                .description(description)
                .img(file.getOriginalFilename())
                .price(new BigDecimal(price))
                .tag(tagSet)
                .build();

        return productService.saveOrUpdateProduct(product, file);
    }

    @GetMapping("/product/{id}")
    private Product getProduct(@PathVariable @NotEmpty @NotNull Long id) {
        return productService.getProduct(id);
    }

}
