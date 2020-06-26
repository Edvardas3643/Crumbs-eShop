package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.Cart;
import lt.codeacademy.shop_api.repository.CartRepository;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    private final CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Cart getOne(Long cartId) {
        return cartRepository.getOne(cartId);
    }

    public Cart saveOrUpdateCart(Cart cart) {
       return cartRepository.save(cart);
    }
}
