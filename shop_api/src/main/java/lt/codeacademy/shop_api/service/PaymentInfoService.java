package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.PaymentInfo;
import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.repository.PaymentInfoRepository;
import org.springframework.stereotype.Service;

@Service
public class PaymentInfoService {

    private final PaymentInfoRepository paymentInfoRepository;

    public PaymentInfoService(PaymentInfoRepository paymentInfoRepository) {
        this.paymentInfoRepository = paymentInfoRepository;
    }

    public PaymentInfo saveOrUpdatePaymentInfo(PaymentInfo paymentInfo) {
       return paymentInfoRepository.save(paymentInfo);
    }

    public PaymentInfo getNewestPaymentInfo(User user) {
        return paymentInfoRepository.findTopByUserOrderById(user).orElse(new PaymentInfo());
    }
}
