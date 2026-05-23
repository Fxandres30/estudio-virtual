import "./TarjetaFeature.css";

type Props = {

  icono: string;

  titulo: string;

  descripcion: string;

};

export default function TarjetaFeature({

  icono,
  titulo,
  descripcion

}: Props) {

  return (

    <div className="featureCard">

      <div className="featureIcon">

        {icono}

      </div>

      <h3>{titulo}</h3>

      <p>{descripcion}</p>

    </div>

  );

}