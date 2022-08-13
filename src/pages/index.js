import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <title>Home Page</title>
      <p>I'm making this blog while learning Gatsby and React!</p>
      <p>Head on over to the Blog Posts page to read some cool blog posts.</p>
      <StaticImage
        alt="My Old Workspace"
        src="../images/my-old-workspace.jpg"
      />
    </Layout>
  )
}

export default IndexPage
