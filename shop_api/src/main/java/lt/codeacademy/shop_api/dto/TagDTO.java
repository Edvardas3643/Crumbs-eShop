package lt.codeacademy.shop_api.dto;

import lombok.Data;
import lt.codeacademy.shop_api.entities.Tag;

import javax.validation.constraints.NotEmpty;

@Data
public class TagDTO {

    private Long tagId;
    @NotEmpty(message = "Tag cant be empty")
    private String content;

    public TagDTO(Tag tag) {
        this.tagId = tag.getTagId();
        this.content = tag.getContent();
    }

    public TagDTO() {
    }
}
