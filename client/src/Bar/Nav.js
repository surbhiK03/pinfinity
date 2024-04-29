import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCommentDots, faBell, faCircleUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import './Nav.css'
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faPinterest} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/"><b>Home</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/today"><b>Today</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/creates"><b>Create</b></a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className='search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type='text' placeholder='Search' />
              </div>
              <div className='icons'>
                {/* Notification */}
                <a href='/notify'>
                  <FontAwesomeIcon icon={faBell} />
                </a>
                {/* Message */}
                <a href='/msg'>
                  <FontAwesomeIcon icon={faCommentDots} />
                </a>
                {/* Profile */}
                <a href='/profile'>
                  <FontAwesomeIcon icon={faCircleUser} />
                </a>
                <a href='/login'>
                  <FontAwesomeIcon icon={faUserPlus} />
                </a>
              </div>
            </form>
          </div>
        </div>
      </nav>
  )
}
export default Nav