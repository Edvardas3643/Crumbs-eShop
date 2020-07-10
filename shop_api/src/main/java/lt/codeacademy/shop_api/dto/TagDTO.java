package lt.codeacademy.shop_api.dto;

import lombok.Data;

@Data
public class TagDTO {

    public TagDTO() {
    }

    private Long tagId;
    private String content;
}
