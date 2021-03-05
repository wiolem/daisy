import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import packageJson from '../package.json'
import { IconTwitter, IconGithub, IconSun, IconMoon } from 'components/Icon'
import { useTheme } from '../hooks'

const AppHeader = () => {
  const [theme, setTheme] = useTheme()
  const { pathname } = useRouter()
  return (
    <div
      className={`app-header sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto flex-none flex dark:border-gray-800`}
    >
      <div
        className={`flex-none ml-4 sm:ml-6 xl:ml-8 flex items-center border-gray-200 dark:border-gray-800 lg:w-60 xl:w-72 ${
          pathname === '/' ? 'border-b' : ''
        }`}
      >
        <div className={`overflow-hidden w-auto font-semibold`}>
          <Link href="/">{packageJson.name}</Link>
        </div>
      </div>
      <div
        className={`flex-auto border-gray-200 dark:border-gray-800 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-6 xl:px-8 space-x-6 border-b`}
      >
        <span className={`block`} />
        <div className={`flex items-center space-x-4`}>
          <button className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200 focus:outline-none">
            {theme === 'dark' ? (
              <IconSun
                className="w-6 h-6"
                onClick={() => {
                  setTheme('light')
                }}
              />
            ) : (
              <IconMoon
                className="w-6 h-6"
                onClick={() => {
                  setTheme('dark')
                }}
              />
            )}
          </button>
          {packageJson?.author?.url && (
            <a
              href={packageJson?.author?.url}
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className={`text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200`}
            >
              <IconTwitter className={`w-5 h-5`} />
            </a>
          )}
          {packageJson.repository && (
            <a
              href={packageJson.repository}
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
              className={`text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-200`}
            >
              <IconGithub className={`w-5 h-5`} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppHeader
