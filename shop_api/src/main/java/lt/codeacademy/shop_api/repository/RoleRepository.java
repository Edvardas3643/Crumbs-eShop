package lt.codeacademy.shop_api.repository;

import lt.codeacademy.shop_api.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findAllRoleByValueIsContaining(String role);
}
