package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.Tag;
import lt.codeacademy.shop_api.repository.TagRepository;
import org.springframework.stereotype.Service;

@Service
public class TagService {

    private final TagRepository tagRepository;


    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public Tag getByTagName(String name){
       return tagRepository.findByContent(name);
    }
}
