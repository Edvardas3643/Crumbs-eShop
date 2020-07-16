package lt.codeacademy.shop_api.controller;

import lt.codeacademy.shop_api.dto.OrderHistoryDTO;
import lt.codeacademy.shop_api.entities.OrderHistory;
import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.service.OrderHistoryService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/private")
@Validated
public class OrderController {

    private final OrderHistoryService orderHistoryService;

    public OrderController(OrderHistoryService orderHistoryService) {
        this.orderHistoryService = orderHistoryService;
    }

    @PostMapping("/newOrder")
    public boolean newOrder(
            @RequestBody @Valid OrderHistoryDTO orderHistoryDTO,
            @AuthenticationPrincipal User user
    ) {
        return orderHistoryService.addNewOrderHistory(orderHistoryDTO, user);
    }

    @GetMapping("/getOrderHistory")
    private List<OrderHistoryDTO> getOrderHistoryByUser(@AuthenticationPrincipal User user) {
        List<OrderHistory> orderHistory = orderHistoryService.getOrderHistoryByUser(user);

        return orderHistory.stream()
                .map(OrderHistoryDTO::new)
                .collect(Collectors.toList());
    }

}
