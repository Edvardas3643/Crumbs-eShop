package lt.codeacademy.shop_api.dto;

import lombok.Data;
import lt.codeacademy.shop_api.entities.OrderHistory;

import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class OrderHistoryDTO {

    List<OrderDTO> orders;
    private String timestamp;
    private PaymentInfoDTO paymentInfo;

    public OrderHistoryDTO(OrderHistory o) {
        this.orders = o.getOrders().stream()
                .map(OrderDTO::new)
                .collect(Collectors.toList());

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        this.timestamp = o.getCreatedOn().format(formatter);

        this.paymentInfo = new PaymentInfoDTO(o.getPaymentInfo());
    }
}
