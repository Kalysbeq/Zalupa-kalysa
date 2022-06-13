import React from 'react'
import { Link, useMatch } from 'react-router-dom'
export default function CustomLink({ children, to, ...props }) {
  const match = useMatch()
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}
