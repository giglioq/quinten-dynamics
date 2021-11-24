import * as React from "react"
import Navbar from "./Navbar"
import '../styles/mystyles.scss'

const Layout = ({children }) => {

  return (
    <div className="layout">
      <Navbar />
      <div className="container is-fluid">
        <div className='tile'> <h1>Header</h1> </div>
        <div className='columns'>
          <div className='column is-one-fifth'> 
          <h1>Side Bar</h1>
          <p>Sidebar-Bio is small and collapses on scroll</p>
          </div>
          <div className='column is-4-fifths'>
             <div>{children}</div>
          </div>
        </div>
      
      </div>
      <footer className="footer">
        <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
        </footer>
    </div>
  )
}

export default Layout
