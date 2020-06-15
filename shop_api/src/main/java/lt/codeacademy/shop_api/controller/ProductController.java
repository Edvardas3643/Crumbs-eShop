package lt.codeacademy.shop_api.controller;

import lt.codeacademy.shop_api.entities.Product;
import lt.codeacademy.shop_api.entities.Tag;
import lt.codeacademy.shop_api.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

//    @GetMapping("/shopfront")
//    private List<Product> getProductsByKeyword(@RequestParam String tag){
//        return productService.findAllByTagIsContaining(tag);
//    }

    @GetMapping("/shopfront")
    private List<Product> getAll(@RequestParam String tag){
        return productService.findAll();
    }

}
