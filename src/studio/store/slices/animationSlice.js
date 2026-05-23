export const createAnimationSlice =

  (set)=>({



    /* =========================
       KEYFRAMES
    ========================= */

    keyframes: [],

    selectedKeyframe:null,



    /* =========================
       ADD KEYFRAME
    ========================= */

    addKeyframe:(keyframe)=>

      set((state)=>({

        keyframes:[

          ...state.keyframes,

          {

            id:
              crypto.randomUUID(),

            ...keyframe,

          },

        ],

      })),



    /* =========================
       SET KEYFRAMES
    ========================= */

    setKeyframes:(keyframes)=>

      set({

        keyframes,

      }),



    /* =========================
       SELECT KEYFRAME
    ========================= */

    setSelectedKeyframe:(id)=>

      set({

        selectedKeyframe:id,

      }),



    /* =========================
       REMOVE KEYFRAME
    ========================= */

    removeKeyframe:(id)=>

      set((state)=>({

        keyframes:

          state.keyframes.filter(

            (keyframe)=>

              keyframe.id !== id

          ),

      })),



    /* =========================
       CLEAR KEYFRAMES
    ========================= */

    clearKeyframes:()=>{

      set({

        keyframes:[],

      });

    },



  });