import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import ResetStyles from '@/styles/reset'
import { lightTheme, darkTheme, GlobalStyles } from '@/styles/ThemeProvider'
import Typography from '@/styles/Typography'

import '@/fonts/fonts.css'
import Layout from 'components/layouts/Layout'
import Footer from 'components/Footer'
import { links } from 'lib'

type AppProps = {
  Component: any
  pageProps: any
}

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/final-color-02-cutout.png" />
      </Head>
      <ResetStyles />
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <Typography />
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
          <Footer links={links} toggleTheme={toggleTheme} theme={theme} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
