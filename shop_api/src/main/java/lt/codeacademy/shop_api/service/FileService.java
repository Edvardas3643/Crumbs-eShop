package lt.codeacademy.shop_api.service;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class FileService {

    private final Path storageLocation;

    public FileService() {
        this.storageLocation = Paths.get("./storage/resources/img").toAbsolutePath().normalize();
        try {
            Files.createDirectories(this.storageLocation);
        } catch (IOException e) {
            throw new FileStorageException("Unable to create file storage");
        }
    }

    public void saveOrUpdateFile(MultipartFile file) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Path targetLocation = this.storageLocation.resolve(fileName);
        try {
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
            throw new FileStorageException("Could not store file");
        }
    }

    public Resource getFile(String fileName) {
        Path fileLocation = this.storageLocation.resolve(fileName);
        try {
            Resource resource = new UrlResource(fileLocation.toUri());
            if (resource.exists()) {
                return resource;
            } else {
                throw new FileStorageException("File: "+ fileName+ " was not found");
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
            throw new FileStorageException("Unable to resolve URL for file: " + fileName);
        }
    }
}
