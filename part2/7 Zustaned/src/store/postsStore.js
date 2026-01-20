import { create } from "zustand";

export const usePostsStore = create((set) => ({
    posts: [],
    loading: false,
    error: null,
    fetchPosts: async () => {
        set({loading: true, error: null})
        try {
            const res = await fetch(
                "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1#/"
            );
            const data = await res.json()
            set({ posts: data, loading: false })
        } catch (error) {
            set({error: 'Faild to fetch posts', loading: false})
        }
    }

}))