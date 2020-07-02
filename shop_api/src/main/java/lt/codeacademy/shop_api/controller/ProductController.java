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
                .img(file.getOriginalFilename())
                .price(price)
                .tag(tagSet)
                .build();

        return productService.saveOrUpdateProduct(product, file);
    }

    @GetMapping("/product/{id}")
    private Product getProduct(@PathVariable Long id) {
        Product product = productService.getProduct(id);
        return product;
    }

    private Set<Tag> getTags(String[] tags) {
        return Stream.of(tags)
                .map(tagService::getByTagName)
                .collect(Collectors.toSet());
    }

}
