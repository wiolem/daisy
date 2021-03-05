import React from 'react'
import { useRouter } from 'next/router'
import { AppHeader, AppAside } from 'components'

const Wrapper = ({ children }: any) => {
  const { pathname } = useRouter()
  return (
    <div
      className={`antialiased min-h-screen text-gray-500 bg-white dark:text-gray-300 dark:bg-gray-900`}
    >
      <AppHeader />

      <div className={`w-full max-w-8xl mx-auto`}>
        <div className={`lg:flex`}>
          {pathname !== '/' && <AppAside />}

          <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
