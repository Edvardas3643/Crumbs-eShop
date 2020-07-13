package lt.codeacademy.shop_api.service;

import lt.codeacademy.shop_api.entities.Role;
import lt.codeacademy.shop_api.repository.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class RoleService {

    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public Set<Role> findRoleByValue(Set<String> roles) {
        Set<Role> roleSet = new HashSet<>();
        for (String role : roles) {
            roleSet.add(roleRepository.findAllRoleByValueIsContaining(role));
        }
        return roleSet;
    }
}

