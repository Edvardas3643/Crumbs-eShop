package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.Product;
import lt.codeacademy.shop_api.entities.Tag;
import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.repository.ProductRepository;
import lt.codeacademy.shop_api.repository.TagRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@SpringBootTest
@ActiveProfiles("test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class ProductServiceTests {


    @Autowired
    private TagService tagService;

    @Autowired
    private ProductService productService;

    @Autowired
    private TagRepository tagRepository;

    @Autowired
    private ProductRepository productRepository;


    @BeforeEach
    @Transactional
    public void setUp() {

        Tag tag = new Tag();
        tag.setTagId(1L);
        tag.setContent("cake");
        tagRepository.saveAndFlush(tag);

        Product product1 = Product.builder()
                .id(1L)
                .description("description1")
                .ingredients("ingredients1")
                .img("image")
                .price(new BigDecimal("13.31"))
                .title("title")
                .tag(Set.of(tag))
                .build();

        Product product2 = Product.builder()
                .id(2L)
                .description("description2")
                .ingredients("ingredients2")
                .img("image")
                .price(new BigDecimal("13.32"))
                .title("title")
                .tag(Set.of(tag))
                .build();

        Product product3 = Product.builder()
                .id(3L)
                .description("description3")
                .ingredients("ingredients3")
                .img("image")
                .price(new BigDecimal("13.33"))
                .title("title")
                .tag(Set.of(tag))
                .build();

        productRepository.saveAndFlush(product1);
        productRepository.saveAndFlush(product2);
        productRepository.saveAndFlush(product3);
    }

    @AfterEach
    @Transactional
    public void cleanUp() {
        productRepository.deleteAll();
        tagRepository.deleteAll();
    }

    @Test
    @Transactional
    public void shouldCreateProduct() {
        Product product4 = Product.builder()
                .id(4L)
                .description("description4")
                .ingredients("ingredients4")
                .img("image")
                .price(new BigDecimal("13.34"))
                .title("title")
                .tag(Set.of(tagRepository.getOne(1L)))
                .build();

        productService.saveOrUpdateProduct(product4, null);

        Assertions.assertEquals(4L, productRepository.count());
    }

    @Test
    @Transactional
    public void shouldGetOneProduct() {
        Product product = productService.getProduct(1L);
        Assertions.assertEquals(1L, product.getId());
    }

    @Test
    @Transactional
    public void shouldGetAllProducts() {
        List<Product> products = productService.findAll();
        Assertions.assertEquals(3, products.size());
    }

    @Test
    @Transactional
    public void shouldRemoveProduct() {
        int currentSize = productService.findAll().size();
        productService.removeById(1L);

        Assertions.assertNotEquals(currentSize, productRepository.findAll().size());
    }

}
