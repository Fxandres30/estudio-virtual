export default function Lights(){

  return(

    <>

      {/* AMBIENT */}

      <ambientLight

        intensity={0.7}

      />



      {/* MAIN LIGHT */}

      <directionalLight

        castShadow

        position={[10,10,5]}

        intensity={2.5}

        shadow-mapSize-width={2048}

        shadow-mapSize-height={2048}

      />


      {/* FILL LIGHT */}

      <directionalLight

        position={[-5,5,-5]}

        intensity={0.6}

      />


    </>

  );

}