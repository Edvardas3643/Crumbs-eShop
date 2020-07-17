package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.dto.UserDTO;
import lt.codeacademy.shop_api.entities.PaymentInfo;
import lt.codeacademy.shop_api.entities.Role;
import lt.codeacademy.shop_api.entities.User;
import lt.codeacademy.shop_api.repository.PaymentInfoRepository;
import lt.codeacademy.shop_api.repository.RoleRepository;
import lt.codeacademy.shop_api.repository.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;

import javax.transaction.Transactional;
import java.util.Set;

@SpringBootTest
@ActiveProfiles("test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class UserServiceTests {

    @Autowired
    private PaymentInfoRepository paymentInfoRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    @Transactional
    public void setUp(){

        Role role = new Role();
        role.setValue("testing");
        roleRepository.save(role);

        User user = new User();
        user.setUsername("testing");
        user.setPassword(passwordEncoder.encode("testing"));
        user.setRoles(Set.of(roleRepository.getOne(1L)));

        userRepository.save(user);

        PaymentInfo paymentInfo = new PaymentInfo();
        paymentInfo.setAddress("testing");
        paymentInfo.setCardNumber(12345678L);
        paymentInfo.setPostCode(12345L);
        paymentInfo.setName("Ted");
        paymentInfo.setSurname("Tester");

        paymentInfoRepository.save(paymentInfo);
    }

    @AfterEach
    @Transactional
    public void cleanUp() {
        userRepository.deleteAll();
        roleRepository.deleteAll();
        paymentInfoRepository.deleteAll();
    }

    @Test
    @Transactional
    public void shouldCreateUser(){
        UserDTO user = UserDTO.builder()
                .username("testing 2")
                .password("testing 2")
                .roles(Set.of("testing"))
                .build();

        userService.newUser(user);

        Assertions.assertEquals(2L, userRepository.count());
    }

    @Test
    @Transactional
    public void shouldGetOneUser(){
        User user = userService.getUserByUsername("testing");

        Assertions.assertEquals("testing", user.getUsername());
    }
}
