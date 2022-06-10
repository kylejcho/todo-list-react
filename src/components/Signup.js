import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../contexts/AuthContext'
import { updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'

export default function Signup() {
   //Name, email and password states updated on input field change
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const [error, setError] = useState('')

   const navigate = useNavigate()

   //Create user function from userAuth context
   const { createUser } = UserAuth()

   //Once user is succesfully created, update profile display name with 'name' state and navigate to home page
   //Get error message if log-in or 'updateProfile' is unsuccesful
   const handleSubmit = async (e) => {
      e.preventDefault()
      setError('')
      try {
         await createUser(email, password)
         updateProfile(auth.currentUser, {
            displayName: name,
         })
         navigate('/checkr-react/home')
      } catch (e) {
         setError(e.message)
         console.log(e.message)
      }
   }

   return (
      <div id='signupBackground'>
         <form id='signupContainer' onSubmit={handleSubmit}>
            <div className='signupInputsContainer'>
               <p id='signupHeader'>Sign up for a free account</p>
               <p>
                  Already have an account?{' '}
                  <Link to='/checkr-react/'>Sign in.</Link>{' '}
               </p>
               <div className='signupInputContainer'>
                  <label className='signupLabel'>Your Name</label>
                  <input
                     type='name'
                     className='signupInput'
                     required
                     onChange={(e) => setName(e.target.value)}
                  ></input>
               </div>
               <div className='signupInputContainer'>
                  <label className='signupLabel'>Email Address</label>
                  <input
                     type='email'
                     id='email'
                     className='signupInput'
                     required
                     onChange={(e) => setEmail(e.target.value)}
                  ></input>
               </div>
               <div className='signupInputContainer'>
                  <label className='signupLabel'>Password</label>
                  <input
                     type='password'
                     id='password'
                     className='signupInput'
                     required
                     onChange={(e) => setPassword(e.target.value)}
                  ></input>
               </div>
            </div>
            <button id='signupButton'>Sign Up</button>
         </form>
      </div>
   )
}
