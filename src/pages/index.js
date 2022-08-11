import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="The Cool Blog™">
      <title>Home Page</title>
      <p>I'm making this blog while learning Gatsby and React!</p>
      <StaticImage
        alt="My Old Workspace"
        src="../images/my_old_workspace.jpg"
      />
    </Layout>
  )
}

export default IndexPage
