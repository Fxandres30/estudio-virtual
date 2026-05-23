export const createTimelineSlice =

  (set)=>({

    /* =========================
       TIMELINE
    ========================= */

    currentFrame: 0,

    totalFrames: 1800,

    fps: 60,

    isPlaying: false,



    /* =========================
       ACTIONS
    ========================= */

    setCurrentFrame: (frame)=>

      set({

        currentFrame: frame,

      }),



    setTotalFrames: (frames)=>

      set({

        totalFrames: frames,

      }),



    setFPS: (fps)=>

      set({

        fps,

      }),



    setIsPlaying: (value)=>

      set({

        isPlaying: value,

      }),

  });