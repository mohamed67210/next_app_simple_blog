import React from 'react'
import Header from './Header'
import Footer from './Footer'

function MainLayout(props) {
  return (
    <div>
        <Header/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default MainLayout
// ************* ce component va ressembler tt les components qui vont se trouver dans toute les pages, il est appeler dans _app.js