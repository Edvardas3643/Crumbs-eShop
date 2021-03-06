package lt.codeacademy.shop_api.repository;

import lt.codeacademy.shop_api.entities.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
    Tag findTagByContentIsContaining(String tag);

    List<Tag> findAll();

}
