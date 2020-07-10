package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.Order;
import lt.codeacademy.shop_api.entities.OrderHistory;
import lt.codeacademy.shop_api.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public void saveOrUpdateOrders(List<Order> orders) {
        orderRepository.saveAll(orders);
    }

    public List<Order> findAllByOrderHistory(List<OrderHistory> orderHistories) {

        List<Order> orders = new ArrayList<>();
        for (OrderHistory orderHistory : orderHistories){
            orders.addAll(orderRepository.findAllByOrderHistoryOrderByOrderHistory(orderHistory));
        }
        return orders;
    }
}
