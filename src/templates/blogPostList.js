import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Pagination, PageNumberWrapper } from "./styles/BlogPostList"

const blogPostList = ({ pageContext }) => {
  return (
    <Layout>
      {pageContext.posts.map(post => (
        <div key={post.node.wordpress_id} style={{ margin: "1rem 0 3rem" }}>
          <Link to={`/post/${post.node.slug}`}>
            <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
          </Link>
          <h6>{post.node.date}</h6>
          <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
        </div>
      ))}
      <Pagination>
        {Array.from({ length: pageContext.numberOfPages }).map(
          (page, index) => (
            <PageNumberWrapper
              key={index}
              isCurrentPage={index + 1 === pageContext.currentPage}
            >
              <Link
                className="link"
                to={index === 0 ? "/blog" : `/blog/${index + 1}`}
              >
                {index + 1}
              </Link>
            </PageNumberWrapper>
          )
        )}
      </Pagination>
    </Layout>
  )
}

export default blogPostList
