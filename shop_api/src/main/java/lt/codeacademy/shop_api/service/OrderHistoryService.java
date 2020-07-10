package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.OrderHistory;
import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.repository.OrderHistoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderHistoryService {

    private final OrderHistoryRepository orderHistoryRepository;

    public OrderHistoryService(OrderHistoryRepository orderHistoryRepository) {
        this.orderHistoryRepository = orderHistoryRepository;
    }

    public void saveOrUpdateOrderHistory(OrderHistory orderHistory) {
        orderHistoryRepository.save(orderHistory);
    }

    public List<OrderHistory> getOrderHistoryByUser(User user) {
        return orderHistoryRepository.findAllByUser(user);
    }
}
