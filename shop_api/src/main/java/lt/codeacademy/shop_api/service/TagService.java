package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.Tag;
import lt.codeacademy.shop_api.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService {

    private final TagRepository tagRepository;


    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public List<Tag> getAll() {
        return tagRepository.findAll();
    }
}
