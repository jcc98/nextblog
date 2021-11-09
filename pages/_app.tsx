import {useState} from "react"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimateSharedLayout } from "framer-motion"
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "../components/styles/ThemeConfig"
import { GlobalStyles } from "../components/styles/ThemeConfig"
import { buttonStyle } from "../components/styles/Button.styled"

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState<String>("light")

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
    
  }

  return (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <>
      <GlobalStyles />
      <AnimateSharedLayout>
          <button style={buttonStyle} onClick={toggleTheme}>{theme === "light" ? "ダークモード" : "ライトモード"}</button>
            <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  </ThemeProvider>
  )
  }

export default MyApp
