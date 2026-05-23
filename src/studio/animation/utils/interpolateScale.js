export default function interpolateScale(

  start,

  end,

  progress,

){

  return [

    start[0] +

      (end[0] - start[0])

      * progress,



    start[1] +

      (end[1] - start[1])

      * progress,



    start[2] +

      (end[2] - start[2])

      * progress,

  ];

}