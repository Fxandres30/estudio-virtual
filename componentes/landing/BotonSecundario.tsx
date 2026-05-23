import "./BotonSecundario.css";
type Props = {

  texto: string;

};

export default function BotonSecundario({

  texto

}: Props) {

  return (

    <button className="secondaryButton">

      {texto}

    </button>

  );

}