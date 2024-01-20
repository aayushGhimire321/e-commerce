package com.in.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.in.ecommerce.model.Category;
import com.in.ecommerce.repository.CategoryRepo;

@Service
public class CategoryService {
    
    @Autowired
    CategoryRepo CategoryRepo;

    public void createCategory(Category category){
        CategoryRepo.save(category);
    }
}
