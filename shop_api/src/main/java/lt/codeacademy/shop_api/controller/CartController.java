package lt.codeacademy.shop_api.controller;

import lt.codeacademy.shop_api.entities.Cart;
import lt.codeacademy.shop_api.entities.Product;
import lt.codeacademy.shop_api.service.CartService;
import lt.codeacademy.shop_api.service.ProductService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
public class CartController {

    private final ProductService productService;
    private final CartService cartService;

    public CartController(ProductService productService, CartService cartService) {
        this.productService = productService;
        this.cartService = cartService;
    }

    @GetMapping("/add")
    public Cart addToCart(
            @RequestParam Long cartId,
            @RequestParam Long productId
    ) {
        Product product = productService.findById(productId);
        Cart cart = cartService.getOne(cartId);
        product.setCart(cart);
        return cartService.saveOrUpdateCart(cart);
    }

    @GetMapping("/remove")
    public Cart removeProductFromCart(
            @RequestParam Long productId,
            @RequestParam Long cartId
    ) {
        Product product = productService.findById(productId);
        Cart cart = cartService.getOne(cartId);
        cart.getProducts().remove(product);
        return cart;
    }

}
