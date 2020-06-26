package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.Product;
import lt.codeacademy.shop_api.entities.Tag;
import lt.codeacademy.shop_api.repository.ProductRepository;
import lt.codeacademy.shop_api.repository.TagRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final TagRepository tagRepository;
    private final FileService fileService;

    public ProductService(ProductRepository productRepository, TagRepository tagRepository, FileService fileService) {
        this.productRepository = productRepository;
        this.tagRepository = tagRepository;
        this.fileService = fileService;
    }

    public List<Product> findAllByTagIsContaining(String value) {
        Tag tag = tagRepository.findTagByValueIsContaining(value);
        return productRepository.findAllByTag(tag);
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product saveOrUpdateProduct(Product product, MultipartFile file) {
        if (file != null){
            fileService.saveOrUpdateFile(file);
        }
      return productRepository.save(product);

    }
}
