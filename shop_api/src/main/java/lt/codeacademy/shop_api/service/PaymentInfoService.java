package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.repository.PaymentInfoRepository;
import org.springframework.stereotype.Service;

@Service
public class PaymentInfoService {

    private final PaymentInfoRepository paymentInfoRepository;

    public PaymentInfoService(PaymentInfoRepository paymentInfoRepository) {
        this.paymentInfoRepository = paymentInfoRepository;
    }
}
