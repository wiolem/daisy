import * as React from 'react'

export type Theme = 'dark' | 'light'

const changeTheme = (mode: Theme) => {
  if (mode === 'dark') {
    ;(document as any).querySelector('html').classList.add('dark')
  } else {
    ;(document as any).querySelector('html').classList.remove('dark')
  }
  localStorage.theme = mode
}

function useTheme(mode?: Theme) {
  const [theme, setTheme] = React.useState(mode)
  React.useEffect(() => {
    if (theme) {
      changeTheme(theme as Theme)
    } else {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        changeTheme('dark')
      } else {
        changeTheme('light')
      }
      setTheme(localStorage.theme)
    }
    return () => localStorage.removeItem('theme')
  }, [theme])
  return [theme, setTheme] as const
}

export default useTheme
