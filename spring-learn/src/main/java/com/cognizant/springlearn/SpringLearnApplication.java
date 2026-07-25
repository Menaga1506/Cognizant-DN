package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

	private static final Logger logger = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {
		logger.info(">>> Entering main() method of SpringLearnApplication");

		SpringApplication.run(SpringLearnApplication.class, args);

		logger.info(">>> SpringLearnApplication started successfully. Application context is ready.");

		displayCountry();
	}

	/**
	 * Loads country.xml (a plain Spring XML config, separate from the Boot
	 * auto-configured context) and reads the "country" bean out of it.
	 */
	public static void displayCountry() {
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = context.getBean("country", Country.class);
		logger.debug("Country : {}", country.toString());
	}

}
