import { supabase }
from "@/lib/supabase";

export async function registerUser(

  nombre:string,

  email:string,

  password:string

){

  return await supabase
  .auth
  .signUp({

    email,
    password,

    options:{

      data:{
        nombre
      }

    }

  });

}