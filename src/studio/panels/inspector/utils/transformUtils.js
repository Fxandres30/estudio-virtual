export function createTransformArray(

  values,

  index,

  value,

){

  const newValues = [

    ...values,

  ];



  newValues[index] =
    Number(value);



  return newValues;

}