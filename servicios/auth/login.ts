import { supabase }
from "@/lib/supabase";

export async function loginUser(

  email:string,

  password:string

){

  return await supabase
  .auth
  .signInWithPassword({

    email,
    password

  });

}