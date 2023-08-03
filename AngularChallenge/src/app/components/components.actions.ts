import { createAction, createActionGroup, props } from "@ngrx/store";
import { Blogger } from "../models/blogger";

export const addBlogger = createAction(
    '[Bloggers] Add blogger',
    props<{ bloggerArray: Blogger[] }>()
  );

  export const updateBlogger = createAction(
    '[Bloggers] Update Blogger',
    props<{ blogger: Blogger }>()
  );