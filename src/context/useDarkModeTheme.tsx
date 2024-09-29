import { useEffect, useState } from 'react'

const useDarkModeTheme = () => {
  const [mode, setMode] = useState(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light')

  const onSelectMode = (mode: string) => {
    const root = window.document.documentElement
    const isDark = mode === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(mode)

    setMode(mode)
  }

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => onSelectMode(e.matches ? 'dark' : 'light'))

    // Setup dark/light mode for the first time
    onSelectMode(
      window.matchMedia('(prefers-color-scheme: dark)').matches ||
        localStorage.getItem('theme') === 'dark'
        ? 'dark'
        : 'light'
    )

    // Remove listener
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {
     return null
      })
    }
  }, [])
  return {
    mode,
    onSelectMode,
  }
}

export default useDarkModeTheme
