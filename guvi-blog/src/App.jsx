import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Header from './components/Header'
import Fullstack from './components/Fullstack' 
import DataScience from './components/DataScience'
import Cybersecurity from './components/Cybersecurity'
import Career from './components/Career'
import Header2 from './components/Header2'
import Header3 from './components/Header3'
import Header4 from './components/Header4'

function App() {

  return (
    <>

    <Navbar/>
    <div className="container-fluid">
      <div className="row">
      <Router>

        <nav className='col-md-3 col-lg-2 d-md-block bg-light sidebar position-fixed h-lg-100'>
          <div className='pt-lg-5'>
            <ul className='nav flex-column pl-4'>

                <li className='nav-item pb-lg-5 side pt-2'>
                  <Link className='text-dark text-decoration-none nav-side' to="/home"><h6>ALL</h6></Link>
                </li>
                <li className='nav-item pb-lg-5 side'>
                  <Link className='text-dark text-decoration-none nav-side' to="/fullstack"><h6>FULL STACK DEVELOPMENT</h6></Link>
                </li>
                <li className='nav-item pb-lg-5 side'>
                  <Link className='text-dark text-decoration-none nav-side' to="/dataScience"><h6>DATA SCIENCE</h6></Link>
                </li>
                <li className='nav-item pb-lg-5 side'>
                  <Link className='text-dark text-decoration-none nav-side' to="/cybersecurity"><h6>CYBER SECURITY</h6></Link>
                </li>
                <li className='nav-item side'>
                  <Link className='text-dark text-decoration-none nav-side' to="/career"><h6>CAREER</h6></Link>
                </li>

            </ul>
          </div>
        </nav>
        
        <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      
        <Routes>
          <Route path='*' element={<> <Header/> <Home/> </>}/>
          <Route path='/fullstack' element={<> <Header2/> <Fullstack/> </>} />
          <Route path='/dataScience' element={<> <Header3/> <DataScience/> </>}/>
          <Route path='/cybersecurity' element={<> <Header4/> <Cybersecurity/> </>}/>
          <Route path='/career' element={<> <Header4/> <Career/> </>}/>
        </Routes>
        </div>
    </Router>
    
    </div>
    </div>
    </>
  )
}

export default App
