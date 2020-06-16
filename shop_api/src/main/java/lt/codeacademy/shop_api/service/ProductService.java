package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.Product;
import lt.codeacademy.shop_api.entities.Tag;
import lt.codeacademy.shop_api.repository.ProductRepository;
import lt.codeacademy.shop_api.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final TagRepository tagRepository;

    public ProductService(ProductRepository productRepository, TagRepository tagRepository) {
        this.productRepository = productRepository;
        this.tagRepository = tagRepository;
    }

    public List<Product> findAllByTagIsContaining(String value) {
        Tag tag = tagRepository.findTagByValueIsContaining(value);
        return productRepository.findAllByTag(tag);
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }
}
