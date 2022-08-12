import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const MainBlogPage = ({ data }) => {
  return (
    <Layout pageTitle="The Cool Blog Posts">
      <p>Click on a blog post to have a read!</p>
      <ul>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Written by: {node.frontmatter.author}</p>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          author
          date
          title
        }
        id
        slug
      }
    }
  }
`

export default MainBlogPage
