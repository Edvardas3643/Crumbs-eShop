package lt.codeacademy.shop_api.dto;

import lombok.Data;
import lt.codeacademy.shop_api.entities.OrderHistory;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class OrderHistoryDTO {

        private PaymentInfoDTO paymentInfoDTO;
        private List<OrderDTO> ordersDTO = null;
        private String timestamp;

    public OrderHistoryDTO(OrderHistory o) {
        this.ordersDTO = o.getOrders().stream()
                .map(OrderDTO::new)
                .collect(Collectors.toList());

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        this.timestamp = o.getCreatedOn().format(formatter);

        this.paymentInfoDTO = new PaymentInfoDTO(o.getPaymentInfo());
    }

        public OrderHistoryDTO() {
        }
}
