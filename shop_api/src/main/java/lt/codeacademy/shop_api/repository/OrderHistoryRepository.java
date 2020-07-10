package lt.codeacademy.shop_api.repository;

import lt.codeacademy.shop_api.entities.OrderHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderHistoryRepository extends JpaRepository<OrderHistory, Long> {


}
