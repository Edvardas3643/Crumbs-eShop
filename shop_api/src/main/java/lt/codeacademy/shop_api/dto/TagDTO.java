package lt.codeacademy.shop_api.dto;

import lombok.Data;
import lt.codeacademy.shop_api.entities.Tag;

@Data
public class TagDTO {

    private Long tagId;
    private String content;

    public TagDTO(Tag tag) {
        this.tagId = tag.getTagId();
        this.content = tag.getContent();
    }

    public TagDTO() {
    }
}
