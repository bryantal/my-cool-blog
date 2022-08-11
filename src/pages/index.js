import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>This is the Cool Blog™</h1>
      <Link to="/about">About</Link>
      <p>I'm making this blog while learning Gatsby and React!</p>
    </main>
  )
}

export default IndexPage
