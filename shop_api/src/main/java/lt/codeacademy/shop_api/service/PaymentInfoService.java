package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.PaymentInfo;
import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.repository.PaymentInfoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentInfoService {

    private final PaymentInfoRepository paymentInfoRepository;

    public PaymentInfoService(PaymentInfoRepository paymentInfoRepository) {
        this.paymentInfoRepository = paymentInfoRepository;
    }

    public void saveOrUpdatePaymentInfo(PaymentInfo paymentInfo) {
        paymentInfoRepository.save(paymentInfo);
    }

    public List<PaymentInfo> findAllByUser(User user) {
      return paymentInfoRepository.findAllByUser(user);
    }
}
