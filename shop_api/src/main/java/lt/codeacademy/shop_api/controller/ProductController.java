package lt.codeacademy.shop_api.controller;

import lt.codeacademy.shop_api.dto.ProductDTO;
import lt.codeacademy.shop_api.entities.Product;
import lt.codeacademy.shop_api.entities.Tag;
import lt.codeacademy.shop_api.service.ProductService;
import lt.codeacademy.shop_api.service.TagService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.Arrays;
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

    @PostMapping("/saveProduct")
    private Product saveOrUpdateProduct(
            @RequestParam(name = "file", required = false) @NotEmpty MultipartFile file,
            @RequestParam(name = "title") @NotEmpty String title,
            @RequestParam(name = "description", required = false) @NotEmpty String description,
            @RequestParam(name = "ingredients", required = false) @NotEmpty String ingredients,
            @RequestParam(name = "price") @NotEmpty String price,
            @RequestParam(name = "tags") @Size(min = 1) String[] tags
    ) {

        Set<Tag> tagSet = Stream.of(tags)
                .map(tagService::getByTagName)
                .collect(Collectors.toSet());

        System.out.println(tagSet);

        Product product = Product.builder()
                .title(title)
                .description(description)
                .ingredients(ingredients)
                .img(file.getOriginalFilename())
                .price(new BigDecimal(price))
                .tag(tagSet)
                .build();

        System.out.println(tagSet);
        System.out.println(product);

        return productService.saveOrUpdateProduct(product, file);
    }

    @GetMapping("/product/{id}")
    private Product getProduct(@PathVariable Long id) {
        return productService.getProduct(id);
    }

    @GetMapping("/private/removeProduct")
    private void removeProduct(@RequestParam Long id) {
        productService.removeById(id);
    }

}
