export const cameraSlice = (set)=>(({

  /* =========================
     ACTIVE CAMERA
  ========================= */

  activeCamera:"cam1",



  /* =========================
     SAVED CAMERAS
  ========================= */

  savedCameras:{

    cam1:false,

    cam2:false,

    cam3:false,

    cam4:false,

  },



  /* =========================
     CAMERAS
  ========================= */

  cameras:{

    cam1:{

      position:[8,5,8],

      target:[0,0,0],

    },



    cam2:{

      position:[0,3,10],

      target:[0,0,0],

    },



    cam3:{

      position:[-8,5,8],

      target:[0,0,0],

    },



    cam4:{

      position:[0,10,0],

      target:[0,0,0],

    },

  },



  /* =========================
     SELECT CAMERA
  ========================= */

  selectCamera:(cameraId)=>

    set({

      activeCamera:cameraId,

    }),



  /* =========================
     SAVE CAMERA
  ========================= */

  saveCamera:(

    cameraId,

    position,

    target

  )=>

    set((state)=>({

      cameras:{

        ...state.cameras,



        [cameraId]:{

          position,

          target,

        },

      },



      savedCameras:{

        ...state.savedCameras,



        [cameraId]:true,

      },

    })),

}));