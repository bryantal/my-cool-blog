import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const MainBlogPage = ({ data }) => {
  return (
    <Layout pageTitle="The Cool Blog Posts">
      <p>Click on a blog post to have a read!</p>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
          {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default MainBlogPage
