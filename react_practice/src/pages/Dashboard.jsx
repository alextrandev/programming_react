import axios from "axios"
import { useEffect, useState } from "react"
import PublishedButton from "../components/PublishedButton";

export default function Dashboard({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => { axios.get("http://localhost:3000/posts/").then(res => setPosts(res.data)).catch(error => console.log(error)) }, [])

  const handleClick = (post, value) => {
    axios
      .put(`http://localhost:3000/posts/${post.id}`, {
        ...post,
        published: !value
      })
      .then(() =>
        setPosts(prevPosts => prevPosts.map(prevPost =>
          prevPost.id == post.id
            ? { ...prevPost, published: !value }
            : prevPost
        ))
      )
      .catch(error => console.log("Error: " + error))
  }

  return (
    <>
      <div>
        {user === 'Alex'
          ? (<h1>Welcome to dashboard, {user}</h1>)
          : (<h1>Welcome to dashboard guest</h1>)
        }
      </div>
      <div className="p-5">
        <ul className="grid grid-cols-2 gap-4">
          {posts.map(post =>
            <li key={post.id} className="text-start p-7 border-2 rounded shadow">
              <p>Title: {post.title}</p>
              <p>Author: {post.author}</p>
              <p>Date: {post.date}</p>
              <p>Content: {post.content}</p>
              <PublishedButton handleClick={handleClick} post={post} />
            </li>
          )}
        </ul>
      </div>
    </>
  )
}
