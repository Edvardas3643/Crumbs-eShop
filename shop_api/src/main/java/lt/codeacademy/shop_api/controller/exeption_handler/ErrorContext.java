package lt.codeacademy.shop_api.controller.exeption_handler;

import lombok.Builder;

@Builder
public class ErrorContext {
    public String code;
    public String error;
}
