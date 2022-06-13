import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from '../Blog/Blog.module.css'
import axios from 'axios'
export default function Blog() {


  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>our blog</h1>
      {posts.map(post => (
        <>

          <Link className={style.link__block} key={post.id} to={`/post/${post.id}`}>
            <li className={style.link__second}>{post.title}</li>

          </Link>

        </>
      ))}
    </div>

  )
}
