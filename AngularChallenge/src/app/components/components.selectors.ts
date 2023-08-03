import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Blogger } from "../models/blogger";

export const selectBloggersState = createFeatureSelector<Blogger[]>('bloggers');

// Selector para obtener todos los bloggers
export const selectAllBloggers = createSelector(
  selectBloggersState,
  (bloggers) => bloggers
);