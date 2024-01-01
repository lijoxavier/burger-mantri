import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NotFound = () => {
  return (
    <>
    <Header/>
    <div id='NotFound'>
        <div className="container">
            <div className="notFoundPage">
                <h1>Page not found!</h1>
                <p>Go back to homepage. </p>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default NotFound