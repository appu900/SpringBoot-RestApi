package com.appu.springrestapi.Exception;

public class UserNotFound extends RuntimeException {
   public UserNotFound(Long id){
       super("could not found the user");
   }
}
