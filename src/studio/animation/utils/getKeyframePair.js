export default function getKeyframePair(

  keyframes,

  currentFrame,

){

  const sorted =

    [...keyframes]

      .sort(

        (a,b)=>

          a.frame - b.frame

      );



  let previous =
    null;



  let next =
    null;



  for(

    const keyframe
    of sorted

  ){

    if(

      keyframe.frame <=
      currentFrame

    ){

      previous =
        keyframe;

    }



    if(

      keyframe.frame >
      currentFrame

    ){

      next =
        keyframe;

      break;

    }

  }



  return {

    previous,

    next,

  };

}