import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <p>These are 2 variations of contact forms</p>
              <ul>
                <li>
                  <Link to="/contact">Basic contact form</Link>
                </li>
                <li>
                  <Link to="/contact/file-upload/">Form with file upload</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
