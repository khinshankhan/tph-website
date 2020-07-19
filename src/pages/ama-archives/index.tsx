import React, { Fragment } from "react"

import { HeaderBarebone } from "../../components/HeaderBarebone"
import { Link } from "../../components/Link"
import { PageContent } from "../../components/PageContent"
import { SEO } from "../../components/SEO"

function AMAPage() {
  return (
    <Fragment>
      <SEO title="AMA Archives" />
      <HeaderBarebone title="Welcome to the TPH AMA archives." />

      <PageContent
        content={
          <p>
            This regroups the archives of our occasional, temporary channels
            that cover an interview with some of our experienced members. You
            can find those on <Link to="/about">The Programmer's Hangout</Link>.
          </p>
        }
      />
    </Fragment>
  )
}

export default AMAPage
