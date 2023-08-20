import React from 'react'

function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
        <a className="navbar-brand" href="#">
              <img src="/blog.png" width="121" height="53" className="d-inline-block align-top" alt=""/>
              </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
        
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">

                <li className="nav-item active top">
                  <a className="nav-link font-weight-bold text-secondary" href="#">Courses<span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item dropdown top">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    LIVE CLASSES
                  </a>
                  <div className="dropdown-menu">

                    <div>
                    <a className="dropdown-item" href="#"><h5>Full Stack Development Program (FSD)</h5>
                    <p>Learn Javascript, HTML, CSS, Java, Data Structure, MongoDB & more</p></a>
                    </div>
                    
                    <div>
                    <a className="dropdown-item" href="#"><h5>IIT-M Advanced Programming & Data Science Program</h5>
                    <p>Learn Python, Machine Learning, NLP, Tableau, PowerBI & more</p></a>
                    </div>
                    
                    <div>
                    <a className="dropdown-item" href="#"><h5>Automation & Testing Program</h5>
                    <p>Learn Selenium, Python, Java, Jenkins, Jmeter, API Testing & more</p></a>
                    </div>

                  </div>
                </li>

                <li className="nav-item dropdown top">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    PRACTICE
                  </a>
                  <div className="dropdown-menu">
                  
                    <div>
                    <a className="dropdown-item" href="#"><h5>Codekata</h5>
                    <p>Sharpen your coding skills, prepare for interviews</p></a>
                    </div>
                    
                    <div>
                    <a className="dropdown-item" href="#"><h5>Webkata</h5>
                    <p>Build basic Frontend and Backend development skills</p></a>
                    </div>
                    
                    <div>
                    <a className="dropdown-item" href="#"><h5>IDE - Online Compiler</h5>
                    <p>Run & test your code in any programming language</p></a>
                    </div>

                  </div>
                </li>

                <li className="nav-item dropdown top">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    RESOURCES
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">REWARDS</a>
                    <a className="dropdown-item" href="#">REFERRAL</a>
                    <a className="dropdown-item" href="#">FORUM SUPPORT</a>
                    <a className="dropdown-item" href="#">BLOGS</a>
                  </div>
                </li>

                <li className="nav-item dropdown top">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    OUR PRODUCTS
                  </a>
                  <div className="dropdown-menu">
                  <div>
                    <a className="dropdown-item" href="#"><h5>HackerKid</h5>
                    <p>Coding classes platform for K-12 children</p></a>
                    </div>
                    
                    <div>
                    <a className="dropdown-item" href="#"><h5>GUVI for Corporates</h5>
                    <p>Meet your hiring needs at ease</p></a>
                    </div>
                  
                  </div>
                </li>

              </ul>
            </div>
      </nav>  
        
       
  )
}

export default Navbar