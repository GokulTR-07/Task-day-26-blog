import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="container border-top">
        <div className="row pt-4">
          <div className="col-lg-3 col-md-6 text-center">
            <div className='mt-2 mb-2'>
              <img src="/blog.png" alt="blog logo" />
            </div>
            <hr />
            <div>
              <button className='btn btn-outline-success'>
                Refer & Earn
              </button>
            </div>
            <hr />
            <div className='mt-2 mb-3'>
              <p>Follow us on</p>
              <div>
                <div className='mb-2'>
                  <i className="fa fa-2x fa-facebook-official mr-3" aria-hidden="true"></i>
                  <i className="fa fa-2x fa-instagram mr-3" aria-hidden="true"></i>
                  <i className="fa fa-2x fa-linkedin" aria-hidden="true"></i>
                </div>

                <div>
                  <i className="fa fa-2x fa-twitter mr-3" aria-hidden="true"></i>
                  <i className="fa fa-2x fa-telegram mr-3" aria-hidden="true"></i>
                  <i className="fa fa-2x fa-youtube" aria-hidden="true"></i>
                </div>
              </div>
            
            </div>
          </div>

          <div className="col-lg-9 col-md-6 border-left d-flex flex-wrap foot-content pt-5 pl-lg-5">
            
            <div className="col-lg-4">
              <div className='pb-3'>
                <h6 className='text-center'>Course Library</h6>
                <ul className='text-secondary'>
                  <li className='list-group'>
                    Premium Courses
                  </li>
                  <li className='list-group'>
                    Free Library
                  </li>
                  <li className='list-group'>
                    Offers
                  </li>
                </ul>
              </div>

              <div>
                <h6 className='text-center'>ZEN CLASS Live Classes</h6>
                <ul className='text-secondary'>
                  <li className='list-group'>
                    Full Stack Development
                  </li>
                  <li className='list-group'>
                  IIT-M Advanced Programming & Data Science Program
                  </li>
                  <li className='list-group'>
                  Automation & Testing Program
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className='pb-3'>
                <h6 className='text-center'>Practice</h6>
                <ul className='text-secondary'>
                  <li className='list-group'>
                    Codekata
                  </li>
                  <li className='list-group'>
                    Webkata
                  </li>
                  <li className='list-group'>
                    IDE
                  </li>
                </ul>
              </div>

              <div>
                <h6 className='text-center'>Resources</h6>
                <ul className='text-secondary'>
                  <li className='list-group'>
                    Rewards
                  </li>
                  <li className='list-group'>
                    Refer a Friend
                  </li>
                  <li className='list-group'>
                    Blogs
                  </li>
                  <li className='list-group'>
                    Forum Support
                  </li>
                </ul>
              </div>
            </div>
            
            <div className='col-lg-3'>
              <div className='pb-3'>
                <h6 className='text-center'>Products</h6>
                <ul className='text-secondary'>
                  <li className='list-group'>
                    HackerKid
                  </li>
                  <li className='list-group'>
                    GUVI for Corporates
                  </li>
                </ul>
              </div>

              <div>
                <h6 className='text-center'>Company</h6>
                <ul className='text-secondary'>
                  <li className='list-group'>
                    Refund Policy
                  </li>
                  <li className='list-group'>
                    FAQs
                  </li>
                  <li className='list-group'>
                    Contact Us
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="row border-top foot-content-2">
          <div className="col-lg-6 d-flex justify-content-start">
            <div className='text-secondary'>
              <span className='border-right pr-2'>Terms and Condition</span>
              <span className='pl-2'>Privacy Policy</span>
            </div>
          </div>
          <div className="col-lg-6 text-secondary d-flex justify-content-end">
            <span>© GUVI Geeks Network Pvt. Ltd.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer