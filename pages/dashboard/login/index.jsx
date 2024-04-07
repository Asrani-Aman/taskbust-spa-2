import { signIn } from 'next-auth/react';
import React from 'react';
import { useState } from 'react';
const index = () => {
  const [show, setShow] = useState(false);

  // Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "/dashboard" });
  }
  return (
    <div>
      {/* <button onClick = {()=>signIn("google")}>Radhe Radhe! this is the login page </button>
       */}
        <div className="input-button">
            <button type="submit" >
              Login
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              onClick={handleGoogleSignin}
       
            >
              Sign In with Google{" "}
              {/* <Image src={"/assets/google.svg"} width="20" height={20}></Image> */}
            </button>
          </div>
    </div>
  ) 
}

export default index;