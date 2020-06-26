package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.Product;
import lt.codeacademy.shop_api.entities.ProductHistory;
import lt.codeacademy.shop_api.repository.ProductHistoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductHistoryService {

        private final ProductHistoryRepository productHistoryRepository;

    public ProductHistoryService(ProductHistoryRepository productHistoryRepository) {
        this.productHistoryRepository = productHistoryRepository;
    }

    public List<ProductHistory> findAllByProductId(Long id){
       return productHistoryRepository.findAllByProductId(id);
    }
}
