package com.dymaninds.news;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class CorrectNewsPaperTitle {

	public static final String DELIMITER = " ";

	/** Provide Command Line Arguments - Array Of String as Incorrect title **/
	public static void main(String[] args) {
		String[] incorrectTitle = { "break3ing news5:", "1A 1circle is round!" };
		String finalTitle = correctTitle(incorrectTitle);
		System.out.println("Correct Title ->" + finalTitle);
	}


	public static String correctTitle(String[] strArr) {
		List<String> strList = Arrays.asList(convertStringArrToStringAndSplit(strArr)); // List of String Split By Space
		return strList
				.stream()
				.map(str -> capitalizeWorld(str)) // Capitalize First Letter
				.map(Objects::toString)           // Map to String
				.collect(Collectors.joining(DELIMITER)); // Collect to String
	}

	public static String[] convertStringArrToStringAndSplit(String[] strArr) {
		return Arrays.asList(strArr) // Convert String Array To List
				.stream()
				.map(Object::toString) // Map to String
				.collect(Collectors.joining(DELIMITER)) // Collect to String
				.replaceAll("[0-9]", "") // Replace Digits
				.split(DELIMITER); // Split By Space
	}

	public static String capitalizeWorld(String str) {
		return str.substring(0, 1).toUpperCase() + str.substring(1);
	}
}