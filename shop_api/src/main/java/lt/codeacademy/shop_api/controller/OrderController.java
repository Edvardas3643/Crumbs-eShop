package lt.codeacademy.shop_api.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lt.codeacademy.shop_api.dto.CartDTO;
import lt.codeacademy.shop_api.dto.PaymentInfoDTO;
import lt.codeacademy.shop_api.entities.*;
import lt.codeacademy.shop_api.service.*;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/private")
public class OrderController {

    private final static ObjectMapper mapper = new ObjectMapper();
    private final OrderService orderService;
    private final UserService userService;
    private final ProductService productService;
    private final OrderHistoryService orderHistoryService;
    private final PaymentInfoService paymentInfoService;

    public OrderController(OrderService orderService, UserService userService1, ProductService productService, OrderHistoryService orderHistoryService, PaymentInfoService paymentInfoService) {
        this.orderService = orderService;
        this.userService = userService1;
        this.productService = productService;
        this.orderHistoryService = orderHistoryService;
        this.paymentInfoService = paymentInfoService;
    }

    private List<Order> getOrders(List<CartDTO> cartDTO, OrderHistory orderHistory) {
        return cartDTO.stream()
                .map(order -> {
                    Product product = productService.getProduct(order.getProduct().getId());
                    BigDecimal price = order.getProduct().getPrice();
                    Long quantity = order.getQty();
                    return Order.builder()
                            .product(product)
                            .price(price)
                            .quantity(quantity)
                            .orderHistory(orderHistory)
                            .build();
                })
                .collect(Collectors.toList());
    }

    private PaymentInfo getPaymentInfo(User user, PaymentInfoDTO infoDTO) {
        return PaymentInfo
                .builder()
                .address(infoDTO.getAddress())
                .name(infoDTO.getName())
                .surname(infoDTO.getSurname())
                .address(infoDTO.getAddress())
                .postCode(infoDTO.getPostCode())
                .cardNumber(infoDTO.getCardNumber())
                .user(user)
                .build();
    }

    @PostMapping("/newOrder")
    public void newOrder(@RequestParam String info,
                         @RequestParam String username,
                         @RequestParam String cart) throws IOException {

        User user = userService.getUserByUsername(username);
        List<CartDTO> cartDTO = Arrays.asList(mapper.readValue(cart, CartDTO[].class));
        PaymentInfoDTO infoDTO = mapper.readValue(info, PaymentInfoDTO.class);
        PaymentInfo paymentInfo = getPaymentInfo(user, infoDTO);

        OrderHistory orderHistory = OrderHistory.builder()
                .user(user)
                .paymentInfo(paymentInfo)
                .build();

        List<Order> orders = getOrders(cartDTO, orderHistory);

        paymentInfoService.saveOrUpdatePaymentInfo(paymentInfo);
        orderHistoryService.saveOrUpdateOrderHistory(orderHistory);
        orderService.saveOrUpdateOrders(orders);

        System.out.println(orderHistory);

    }

}
