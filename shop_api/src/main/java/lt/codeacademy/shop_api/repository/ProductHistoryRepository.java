package lt.codeacademy.shop_api.repository;

import lt.codeacademy.shop_api.entities.ProductHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductHistoryRepository extends JpaRepository<ProductHistory, Long> {
    List<ProductHistory> findAllByProductId(Long id);
}
