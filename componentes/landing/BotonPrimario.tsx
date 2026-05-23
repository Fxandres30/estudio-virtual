import "./BotonPrimario.css";

type Props = {

  texto: string;

};

export default function BotonPrimario({

  texto

}: Props) {

  return (

    <button className="primaryButton">

      {texto}

    </button>

  );

}