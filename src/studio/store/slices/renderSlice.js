export const renderSlice = (set)=>(({

  /* =========================
     RECORDING
  ========================= */

  isRecording:false,

  recordTime:0,



  setRecording:(value)=>

    set({

      isRecording:value,

    }),



  setRecordTime:(time)=>

    set({

      recordTime:time,

    }),



  /* =========================
     RENDER SETTINGS
  ========================= */

  showRenderSettings:false,



  setShowRenderSettings:(value)=>

    set({

      showRenderSettings:value,

    }),



  renderSettings:{

    width:1920,

    height:1080,

    fps:60,

    duration:5,

    quality:"high",

    orientation:"horizontal",

  },



  setRenderSettings:(updates)=>

    set((state)=>({

      renderSettings:{

        ...state.renderSettings,

        ...updates,

      },

    })),

}));