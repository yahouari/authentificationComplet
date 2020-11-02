package org.sid;


import org.sid.entities.AppRole;
import org.sid.entities.AppUser;
import org.sid.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@SpringBootApplication
public class AuthentitationApplication implements CommandLineRunner {
	
	
	
	@Autowired
	private AccountService accountService;
	
 	public static void main(String[] args) {
		SpringApplication.run(AuthentitationApplication.class, args);
	}
	
	@Bean
	public BCryptPasswordEncoder getBCPE() { return new BCryptPasswordEncoder();}
	
	@Override
	public void run(String... arg0) throws Exception {
		
		accountService.saveUser(new AppUser(null,"test","test","test",null));
		accountService.saveRole(new AppRole(null,"USER"));
		accountService.addRoleToUse("test","USER");
		/*
		 * accountService.saveUser(new
		 * AppUser(null,"elhouri@mail.com","yassine el","123",null));
		 * 
		 * accountService.saveUser(new
		 * AppUser(null,"user@mail.com","nizar","1234",null));
		 * accountService.saveRole(new AppRole(null,"ADMIN"));
		 * accountService.saveRole(new AppRole(null,"USER"));
		 * 
		 * accountService.addRoleToUse("yassine","ADMIN");
		 * accountService.addRoleToUse("user@mail.com","USER");
		 * 
		 * 
		 * 
		 * 
		 * taskRepository.save(new Task (null,"T1")); taskRepository.save(new Task
		 * (null,"T2"));
		 */
		 


	}

}
