import { useEffect } from "react"
import { usepostsStore } from "../store/postsStore"

const Posts = () => {

    const { posts, loading, error, fatchposts} = usepostsStore();

    useEffect(() => {
        fatchposts()
    },[fatchposts])

    if(loading) return <p>Loading....</p>
    if(error) return <p>{error}Error.... </p>
  return (
    <div>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Posts


