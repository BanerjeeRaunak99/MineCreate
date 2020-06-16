import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import {isLoaded} from 'react-redux-firebase'

const Navbar = (props) => {
    const { auth,profile } = props;
    const links = auth.uid?<SignedInLinks profile={profile}/>:<SignedOutLinks/>
    return (
      <nav className="nav-wrapper  grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">MineCreations</Link>
          {links}
        </div>
      </nav>
    )
  }
  
  const mapStateToProps = (state) => {
     console.log(state)
    return{
      auth: state.firebase.auth,
      profile:state.firebase.profile
    }
  }
  
  export default connect(mapStateToProps)(Navbar)