package lt.codeacademy.shop_api.controller;

import lt.codeacademy.shop_api.entities.Product;
import lt.codeacademy.shop_api.entities.Tag;
import lt.codeacademy.shop_api.service.ProductService;
import lt.codeacademy.shop_api.service.TagService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
            @RequestParam(name = "file", required = false) MultipartFile file,
            @RequestParam(name = "title") String title,
            @RequestParam(name = "description", required = false) String description,
            @RequestParam(name = "price") BigDecimal price,
            @RequestParam(name = "tags") String[] tags
    ) {

        Set<Tag> tagSet = getTags(tags);

        Product product = Product.builder()
                .title(title)
                .description(description)
                .price(price)
                .tag(tagSet)
                .build();

        return productService.saveOrUpdateProduct(product, file);
    }

    private Set<Tag> getTags(String[] tags) {
        List<Tag> t = tagService.getAll();
        Set<Tag> tagSet = new HashSet<>();
        for (Tag tag : t) {
            for (String value : tags) {
                if (tag.getValue().contains(value)) {
                    tagSet.add(tag);
                }
            }
        }
        return tagSet;
    }

}
