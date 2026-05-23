export default function interpolatePosition(

  start,

  end,

  progress,

){

  return start.map(

    (value,index)=>(

      value +

      (

        (end[index] - value)

        * progress

      )

    )

  );

}