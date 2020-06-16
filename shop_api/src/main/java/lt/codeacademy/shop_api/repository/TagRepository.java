package lt.codeacademy.shop_api.repository;

import lt.codeacademy.shop_api.entities.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
    Tag findTagByValueIsContaining(String value);
}
