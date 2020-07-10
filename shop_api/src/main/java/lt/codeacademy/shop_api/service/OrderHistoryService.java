package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.repository.OrderHistoryRepository;
import org.springframework.stereotype.Service;

@Service
public class OrderHistoryService {

    private final OrderHistoryRepository orderHistoryRepository;

    public OrderHistoryService(OrderHistoryRepository orderHistoryRepository) {
        this.orderHistoryRepository = orderHistoryRepository;
    }
}