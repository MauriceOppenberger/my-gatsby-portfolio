const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "/",
    toPath: "/home",
    redirectInBrowser: true,
    IsPermanent: true,
  })

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
            title
            content
            template
          }
        }
      }
      allWordpressPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            title
            wordpress_id
            date(formatString: "MMMM Do, Y")
            featured_media {
              source_url
              title
            }
            slug
            excerpt
            content
          }
        }
      }
      allWordpressWpPortfolio {
        edges {
          node {
            id
            slug
            title
            excerpt
            content
            featured_media {
              title
              localFile {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 500) {
                    src
                    srcSet
                    aspectRatio
                    sizes
                    base64
                  }
                }
              }
            }
            acf {
              url
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressWpPortfolio,
  } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const portfolioUnderContentTemplate = path.resolve(
    `./src/templates/portfolioUnderContent.js`
  )

  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(
        edge.node.template === "portfolio_under_content.php"
          ? portfolioUnderContentTemplate
          : pageTemplate
      ),
      context: edge.node,
    })
  })

  // Create Post pages.

  const blogPostListTemplate = path.resolve(`./src/templates/blogPostList.js`)
  const posts = allWordpressPost.edges
  const postsPerPage = 2
  const numberOfPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numberOfPages }).forEach((page, index) => {
    createPage({
      component: slash(blogPostListTemplate),
      path: index === 0 ? `/blog` : `/blog/${index + 1}`,
      context: {
        posts: posts.slice(
          index * postsPerPage,
          index * postsPerPage + postsPerPage
        ),
        numberOfPages,
        currentPage: index + 1,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  posts.forEach(post => {
    createPage({
      path: `/post/${post.node.slug}/`,
      component: slash(postTemplate),
      context: post.node,
    })
  })

  // Create Portfolio pages.
  const portfolioTemplate = path.resolve(`./src/templates/portfolio.js`)

  allWordpressWpPortfolio.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}/`,
      component: slash(portfolioTemplate),
      context: edge.node,
    })
  })
}
