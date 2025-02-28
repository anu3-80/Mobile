package com.codinghub.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codinghub.Model.Mobile;
@Repository
public interface Mobile_Dao extends CrudRepository<Mobile,Long> 
{

}
