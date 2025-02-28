package com.codinghub.MyController;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.codinghub.Model.Mobile;
import com.codinghub.Service.Mobile_Service_Interface;
import com.codinghub.Service.Mobile_Service_Interface;
@CrossOrigin
@RequestMapping("/mobile")
@RestController
public class MyController 
{
	@Autowired
	private Mobile_Service_Interface service;
	@PostMapping("/store")
	public Mobile insert(@RequestBody Mobile mobile)
	{
		return service.save(mobile);
	}
	@GetMapping("/get")
	public List<Mobile> get()
	{
		return service.get();
	}
	@GetMapping("/get/{id}")
	public Mobile findBy(@PathVariable long id)
	{
		return service.findBy(id);
	}
	@PutMapping("/update/{id}")
	public Mobile update(@PathVariable long id,@RequestBody Mobile mobile)
	{
		return service.update(id,mobile);
	}
	@DeleteMapping("/delete/{id}")
	public String deleteMobile(@PathVariable long id)
	{
		return service.deleteMobile(id);	
	}
}
