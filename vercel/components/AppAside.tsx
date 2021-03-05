import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import settings from '../pages/settings.json'
import packageJson from '../package.json'

const AppAside = () => {
  const router = useRouter()
  return (
    <aside
      className={`fixed inset-0 z-40 flex-none w-full h-full bg-black bg-opacity-25 lg:bg-white lg:dark:bg-gray-900 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block`}
    >
      <div
        className={`h-full mr-24 overflow-hidden overflow-y-auto bg-white lg:h-auto lg:block lg:sticky lg:bg-transparent lg:top-16 dark:bg-gray-900 lg:mr-0`}
      >
        <div
          className={`absolute inset-x-0 z-10 hidden h-12 pointer-events-none lg:block bg-gradient-to-b from-white dark:from-gray-900`}
        />
        <nav
          className={`px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-16`}
        >
          <ul className={`mb-8 space-y-8 lg:hidden`}>
            <li
              className={`px-3 py-2 font-medium text-gray-400 transition duration-200 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400`}
            >
              <Link href="/releases">{packageJson.version}</Link>
            </li>
          </ul>
          <ul className={`space-y-8`}>
            {settings.categories.map(({ category, docs }) => {
              return (
                <li key={category}>
                  <h5
                    className={`px-3 mb-3 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:mb-3 lg:text-xs dark:text-gray-100`}
                  >
                    {category}
                  </h5>
                  <ul>
                    {docs.map(({ title, path }) => {
                      return (
                        <li
                          key={path}
                          className={`relative block px-3 py-2 transition duration-200 rounded-md hover:text-gray-900 dark:hover:text-gray-100 ${
                            router.pathname === path
                              ? 'text-green-500 dark:text-green-400 hover:text-green-100 bg-green-100 dark:bg-green-900 dark:hover:text-green-400'
                              : ''
                          }`}
                        >
                          <Link href={path}>{title}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default AppAside
