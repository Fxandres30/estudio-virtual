import "./InputAuth.css";

type Props = {

  placeholder:string;

  type?:string;

  value:string;

  onChange:(
    e:React.ChangeEvent<HTMLInputElement>
  )=>void;

};

export default function InputAuth({

  placeholder,

  type="text",

  value,

  onChange

}:Props){

  return(

    <input

      className="inputAuth"

      placeholder={placeholder}

      type={type}

      value={value}

      onChange={onChange}

    />

  );

}