"use client"
import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';

function artisan() {

    const [user] = useAuthState(auth);
    const router = useRouter()
    const userSession = sessionStorage.getItem('user');
  
    console.log({user})
   
    if (!user && !userSession){
      router.push('/signup')
    }

  return (
    <div>
         <button onClick={() => {
        signOut(auth)
        sessionStorage.removeItem('user')
        }}>
        Log out
      </button> <br></br>
        artisan
        </div>
  )
}

export default artisan