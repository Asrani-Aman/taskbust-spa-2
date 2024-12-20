import { signIn } from 'next-auth/react';
import React from 'react';
import { useState } from 'react';
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import Link from "next/link";
import styles from "../../../styles/Form.module.css"
import Layout from '../layout/layout';
const index = () => {
  const [show, setShow] = useState(false);

  // Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "/dashboard" });
  }
  return (
    <div>
      <Layout>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Do SignIn here to do work or get your work Done
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="password"
              className={styles.input_text}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              onClick={handleGoogleSignin}
              className={styles.button_custom}
            >
              Sign In with Google{" "}
              <Image src={"/assets/google.svg"} width="20" height={20}></Image>
            </button>
          </div>
          <div className="input-button">
            {/* <button type='button' className={styles.button_custom}>
                        Sign In with Github <Image src={'/assets/github.svg'} width={25} height={25}></Image>
                    </button> */}
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          don't have an account yet?{" "}
          <Link href={"/register"}>
            Sign Up
          </Link>
        </p>
      </section>
  </Layout>
    </div>
  )
}

export default index;