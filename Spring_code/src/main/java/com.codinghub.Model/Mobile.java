package com.codinghub.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data
public class Mobile 
{
	@Id
	private long id;
	private String device_name;
	private double price;
	private String ram;
	private String storage;
	private String images;
}
