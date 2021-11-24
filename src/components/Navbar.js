import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"



export default function Navbar() {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const {title} = data.site.siteMetadata
    return (
        <nav className='navbar is-spaced is-primary'>
            <div className='navbar-brand'>
            <Link to="/" className='navbar-item'>{title}</Link>
          </div>
          <div className='navbar-start'> | The Systematic Approach</div>
          <div className="navbar-menu">
              <div className='navbar-end'>
              <Link to="/projects" className='navbar-item'> Projects </Link>
              </div>
          </div>
        </nav>
    )
}

