export const editorSlice = (set)=>({

  /* =========================
     SELECTION
  ========================= */

  selectedObject: null,



  selectObject: (id)=>

    set({

      selectedObject:id,

    }),



  clearSelection: ()=>

    set({

      selectedObject:null,

    }),



  /* =========================
     TRANSFORM
  ========================= */

  transformMode:"translate",



  setTransformMode:(mode)=>

    set({

      transformMode:mode,

    }),

});