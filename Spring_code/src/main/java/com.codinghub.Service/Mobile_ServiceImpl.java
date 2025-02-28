package com.codinghub.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.codinghub.Model.Mobile;
import com.codinghub.Repository.Mobile_Dao;
@Service
public class Mobile_ServiceImpl implements Mobile_Service_Interface 
{
	@Autowired
	private Mobile_Dao dao;
	@Override
	public Mobile save(Mobile mobile) {
		return dao.save(mobile);
	}
	@Override
	public List<Mobile> get() {
		return (List<Mobile>) dao.findAll();
	}
	@Override
	public Mobile findBy(long id) {
		return dao.findById(id).get();
	}
	@Override
	public Mobile update(long id, Mobile mobile) {
		Mobile old_mob=findBy(id);
		old_mob.setDevice_name(mobile.getDevice_name());
		old_mob.setPrice(mobile.getPrice());
		old_mob.setRam(mobile.getRam());
		old_mob.setStorage(mobile.getStorage());
		return dao.save(old_mob);
	}
	@Override
	public String deleteMobile(long id) {
		dao.deleteById(id);
		return "Deleted successfully";
	}
	
}
