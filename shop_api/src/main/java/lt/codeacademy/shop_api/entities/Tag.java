package lt.codeacademy.shop_api.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "tag")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private Long tagId;

    @Column(name = "content")
    private String content;
}
