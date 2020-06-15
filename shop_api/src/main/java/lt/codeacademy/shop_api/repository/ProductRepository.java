package lt.codeacademy.shop_api.repository;

import lt.codeacademy.shop_api.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findAllByTagIsContaining(String keyword);

}
