import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { NavButton } from "../components/nav/NavButton"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Rental assistance in Philadephia</h1>
    <p>
      Keeping rent in Philadelphia can be a struggle. Let’s see if we can help
      you find where to go to apply for rental assistance.
    </p>
    <p>
      Please note that using the screener is not a guarantee that you will
      receive rental assistance from the listed agencies. You will still need to
      visit the agencies and submit an application to be qualified for
      assistance.
    </p>
    <p>
      If you have questions about this screener or want to suggest updates,
      please contact pepp-management@clsphila.org
    </p>
    <NavButton href="/screener">Get Started</NavButton>
  </Layout>
)

export default IndexPage
