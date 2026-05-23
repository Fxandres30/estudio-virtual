import { create }
from "zustand";

import { editorSlice }
from "./slices/editorSlice";

import { objectSlice }
from "./slices/objectSlice";

import { cameraSlice }
from "./slices/cameraSlice";

import { createTimelineSlice }
from "./slices/timelineSlice";

import { renderSlice }
from "./slices/renderSlice";

import { createAnimationSlice }
from "./slices/animationSlice";

export const useStudioStore =
  create((...a)=>({

    ...editorSlice(...a),

    ...objectSlice(...a),

    ...cameraSlice(...a),

    ...renderSlice(...a),

    ...createAnimationSlice(...a),

    ...createTimelineSlice(...a),

  }));