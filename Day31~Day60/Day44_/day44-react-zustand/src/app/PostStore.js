import { create } from "zustand";

export const usePostStore = create((set) => ({
  posts: [],

  addPost: (title, body) =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          id: Date.now(),
          title,
          body,
        },
      ],
    })),

  removePosts: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
}));