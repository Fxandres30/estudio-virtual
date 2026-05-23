export const objectSlice = (set)=>({

  /* =========================
     OBJECTS
  ========================= */

  sceneObjects: [],

  selectedObject:null,

  activeTransformSave:null,



  /* =========================
     ACTIVE SAVE CALLBACK
  ========================= */

  setActiveTransformSave:(callback)=>{

    set({

      activeTransformSave:callback,

    });

  },



  /* =========================
     SET SELECTED OBJECT
  ========================= */

  setSelectedObject:(id)=>{

    set({

      selectedObject:id,

    });

  },



  /* =========================
     ADD OBJECT
  ========================= */

addObject:(object)=>

  set((state)=>{



    const objectIndex =

      state.sceneObjects.length;



    return{

      sceneObjects:[

        ...state.sceneObjects,



        {

          /* =========================
             CUSTOM DATA
          ========================= */

          ...object,



          /* =========================
             CORE
          ========================= */

          id:

            crypto.randomUUID(),



          type:

            object.type ||

            "object",



          name:

            `${

              object.name ||

              "Object"

            }_${

              objectIndex + 1

            }`,



          /* =========================
             MODEL
          ========================= */

          modelPath:

            object.modelPath ||

            object.path ||

            null,



          thumbnail:

            object.thumbnail ||

            null,



          /* =========================
             TRANSFORMS
          ========================= */

          position:

            object.position ||

            [

              objectIndex * 2,

              object.spawnY || 0,

              0,

            ],



          rotation:

            object.rotation ||

            [0,0,0],



          scale:

            object.scale ||

            [1,1,1],



          /* =========================
             SETTINGS
          ========================= */

          visible:

            object.visible ??

            true,



          locked:

            object.locked ??

            false,



          castShadow:

            object.castShadow ??

            true,



          receiveShadow:

            object.receiveShadow ??

            true,



          /* =========================
             EXTRA
          ========================= */

          animation:

            object.animation ||

            null,



          voice:

            object.voice ||

            null,



          aiEnabled:

            object.aiEnabled ||

            false,

        },

      ],

    };



  }),

  /* =========================
     REMOVE OBJECT
  ========================= */

  removeObject:(id)=>

    set((state)=>({

      sceneObjects:

        state.sceneObjects.filter(

          (object)=>

            object.id !== id

        ),

    })),



  /* =========================
     UPDATE OBJECT
  ========================= */

  updateObject:(id, updates)=>

    set((state)=>({

      sceneObjects:

        state.sceneObjects.map(

          (object)=>

            object.id === id

              ? {

                  ...object,

                  ...updates,

                }

              : object

        ),

    })),

});