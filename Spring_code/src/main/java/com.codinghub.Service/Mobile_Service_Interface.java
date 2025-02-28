package com.codinghub.Service;

import java.util.List;

import com.codinghub.Model.Mobile;

public interface Mobile_Service_Interface {

	Mobile save(Mobile mobile);

	List<Mobile> get();

	Mobile findBy(long id);

	Mobile update(long id, Mobile mobile);

	String deleteMobile(long id);

}
