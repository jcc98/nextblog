import {useState} from "react"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimateSharedLayout } from "framer-motion"

function MyApp({ Component, pageProps }: AppProps) {


  return (
  <>
  <main>
    <AnimateSharedLayout>
        <Component {...pageProps} />
    </AnimateSharedLayout>
  </main>
  </>
  )
  }

export default MyApp
