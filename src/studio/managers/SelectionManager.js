"use client";

import { useCallback }
from "react";

import { useStudioStore }
from "../store/useStudioStore";



export default function useSelectionManager(){



  /* =========================
     STORE
  ========================= */

  const selectedObject =
    useStudioStore(
      (state)=>
        state.selectedObject
    );



  const setSelectedObject =
    useStudioStore(
      (state)=>
        state.setSelectedObject
    );



  const activeTransformSave =
    useStudioStore(
      (state)=>
        state.activeTransformSave
    );




  /* =========================
     SELECT OBJECT
  ========================= */

  const selectObject = useCallback((id)=>{



    /* SAVE CURRENT */

    activeTransformSave?.();



    /* NEW SELECT */

    setSelectedObject(id);



  }, [

    activeTransformSave,

    setSelectedObject,

  ]);




  /* =========================
     CLEAR SELECTION
  ========================= */

  const clearSelection = useCallback(()=>{



    /* SAVE CURRENT */

    activeTransformSave?.();



    /* CLEAR */

    setSelectedObject(null);



  }, [

    activeTransformSave,

    setSelectedObject,

  ]);




  return{

    selectedObject,

    selectObject,

    clearSelection,

  };

}