import { useSession } from 'next-auth/react'
import React from 'react'

const index = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>Hare Krishna:- Here is the Dashboard</div>
  )
}

export default index
