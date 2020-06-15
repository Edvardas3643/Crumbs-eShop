package lt.codeacademy.shop_api.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Tag")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private Long id;

    @Column(name = "tag")
    private String tag;
}
