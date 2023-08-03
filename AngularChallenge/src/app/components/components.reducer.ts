import { State, createReducer, on } from "@ngrx/store";
import { Blogger } from "../models/blogger";
import { addBlogger, updateBlogger } from "./components.actions";
import { state } from "@angular/animations";

export const initialState: Blogger[] = [
    {
        id: "1",
        name: "Juan Perez",
        website: "juanperez.io",
        picture: "https://placekitten.com/200/300",
        email: "conact@juanperez.io",
        friends: []
      },
      {
        id: "2",
        name: "Amano Pikamee",
        website: "pikamee.io",
        picture: "https://placekitten.com/200/300",
        email: "contact@pikamee.io",
        friends: ["1"]
      },
      {
      id: "3",
      name: "Tony Stark",
      website: "tonystark.io",
      picture: "https://placekitten.com/200/300",
      email: "contact@tonystark.io",
      friends: ["1", "2"]
      }
];

export const bloggersReducer = createReducer(
    initialState,
    on(addBlogger, (state, { bloggerArray }) => [...state, ...bloggerArray]),
    on(updateBlogger, (state, { blogger }) => {
        const updatedBloggers = state.map((b) => {
          if (b.id === blogger.id) {
            return { ...b, ...blogger };
          }
          return b;
        });
        return {
          ...state,
          ...updatedBloggers
        };
      })
  );