import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Theme from 'layouts/default'
import { AppToc } from 'components'
import packageJson from '../package.json'
import '../styles/index.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{packageJson.name || 'Docne'}</title>
      </Head>
      <Theme>
        {Component.name === 'MDXContent' ? (
          <div className="flex w-full pt-8 pb-24 lg:pb-16">
            <div className="flex-auto min-w-0 px-4 sm:px-6 xl:px-8">
              <article className={`docne-content prose prose-lg prose-xl`}>
                <Component {...pageProps} />
              </article>
            </div>
            <AppToc />
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </Theme>
    </>
  )
}

export default App
