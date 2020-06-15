package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.Product;
import lt.codeacademy.shop_api.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> findAllByTagIsContaining(String tag) {
        return productRepository.findAllByTagIsContaining(tag);
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }
}
