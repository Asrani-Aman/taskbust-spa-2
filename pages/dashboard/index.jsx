
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getSession, useSession, signOut } from "next-auth/react"

export default function Index({session}) {
  function handleSignOut(){
    signOut()
  }


  console.log(session);
  
  return (
    <div>Hare Krishna:- Here is the Dashboard
      <div className='checkRouting'>
      {session ? User({ session, handleSignOut }) : Guest()}
      </div>
    </div>
  )
}

// guest page when user is not signIN
function Guest(){
  return (
    <main className="container mx-auto text-center py-20">
          <h3 className='text-4xl font-bold'>Guest Homepage</h3>

          <div className='flex justify-center'>
            <Link href={'/dashboard/login'} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign In</Link>
          </div>
      </main>
  )
}

// Authorize User
function User({ session, handleSignOut }){
  return(
    <main className="container mx-auto text-center py-20">
          <h3 className='text-4xl font-bold'>Authorize User Homepage</h3>

          <div className='details'>
            <h5>{session.user.name}</h5>
            <h5>{session.user.email}</h5>
          </div>

          <div className="flex justify-center">
            <button onClick={handleSignOut} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50'>Sign Out</button>
          </div>

          <div className='flex justify-center'>
            <Link href={'/profile'} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Profile Page</Link>
          </div>
      </main>
  )
}


export async function getServerSideProps({ req }){
  const session = await getSession({ req })

  if(!session){
    return {
      redirect : {
        destination: '/dashboard/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }

}


