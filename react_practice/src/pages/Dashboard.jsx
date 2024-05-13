import axios from "axios"
import { useEffect, useState } from "react"

export default function Dashboard({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => { axios.get("http://localhost:3000/posts").then(res => setPosts(res.data)).catch(error => console.log(error)) }, [])

  // need work: handle publish or not button

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
              <button className="bg-white p-3 rounded shadow">Published: <span>{post.published ? "Yes" : "No"}</span></button>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}
