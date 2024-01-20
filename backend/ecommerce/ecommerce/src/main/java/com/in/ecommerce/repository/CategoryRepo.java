package com.in.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.in.ecommerce.model.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {
    
}
