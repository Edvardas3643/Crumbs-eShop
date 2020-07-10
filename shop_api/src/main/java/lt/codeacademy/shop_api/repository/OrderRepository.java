package lt.codeacademy.shop_api.repository;

import lt.codeacademy.shop_api.entities.Order;
import lt.codeacademy.shop_api.entities.OrderHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findAllByOrderHistoryOrderByOrderHistory(OrderHistory orderHistory);
}
