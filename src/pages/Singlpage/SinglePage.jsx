import React, { useState, useEffect } from 'react'
import { useParams, } from 'react-router-dom'
import style from '../Singlpage/Single.module.css'

export default function SinglePage() {
  const { id } = useParams()
  const [post, setPost] = useState('')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [id])


  return (
    <div>
      {post && (
        <div className={style.app}>
          <h1>{post.title}</h1>
          <h2>{post.body}</h2>
        </div>

      )}
    </div>
  )
}
