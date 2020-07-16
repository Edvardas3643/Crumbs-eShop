package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.dto.OrderHistoryDTO;
import lt.codeacademy.shop_api.entities.*;
import lt.codeacademy.shop_api.repository.OrderHistoryRepository;
import lt.codeacademy.shop_api.repository.PaymentInfoRepository;
import lt.codeacademy.shop_api.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderHistoryService {

    private final ProductRepository productRepository;
    private final OrderHistoryRepository orderHistoryRepository;
    private final PaymentInfoRepository paymentInfoRepository;

    public OrderHistoryService(ProductRepository productRepository, OrderHistoryRepository orderHistoryRepository, PaymentInfoRepository paymentInfoRepository) {
        this.productRepository = productRepository;
        this.orderHistoryRepository = orderHistoryRepository;
        this.paymentInfoRepository = paymentInfoRepository;
    }

    public void saveOrUpdateOrderHistory(OrderHistory orderHistory) {
        orderHistoryRepository.save(orderHistory);
    }

    public List<OrderHistory> getOrderHistoryByUser(User user) {
        return orderHistoryRepository.findAllByUser(user);
    }

    public boolean addNewOrderHistory(OrderHistoryDTO orderHistoryDTO, User user) {

        PaymentInfo paymentInfo = PaymentInfo.builder()
                .name(orderHistoryDTO.getPaymentInfoDTO().getName())
                .address(orderHistoryDTO.getPaymentInfoDTO().getAddress())
                .cardNumber(orderHistoryDTO.getPaymentInfoDTO().getCardNumber())
                .postCode(orderHistoryDTO.getPaymentInfoDTO().getPostCode())
                .surname(orderHistoryDTO.getPaymentInfoDTO().getSurname())
                .user(user)
                .build();

        paymentInfoRepository.save(paymentInfo);

        OrderHistory orderHistory = OrderHistory.builder()
                .user(user)
                .paymentInfo(paymentInfo)
                .build();

        List<Order> orders = orderHistoryDTO.getOrdersDTO().stream().map(orderDTO -> Order.builder()
                .quantity(orderDTO.getQuantity())
                .price(orderDTO.getProduct().getPrice())
                .product(productRepository.getOne(orderDTO.getProduct().getId()))
                .orderHistory(orderHistory)
                .build()).collect(Collectors.toList());

        orderHistory.setOrders(orders);

        orderHistoryRepository.save(orderHistory);
        return true;
    }
}
