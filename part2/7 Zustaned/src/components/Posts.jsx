import { useEffect } from "react"
import { usePostsStore } from "../store/postsStore.js"


function Posts() {

    const {posts, loading, error, fetchPosts } = usePostsStore();
    useEffect(() => {
        fetchPosts()
    }, [fetchPosts])

    
  return (
    <div>Posts</div>
  )
}

export default Posts