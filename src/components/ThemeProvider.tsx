import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "dark" | "light"
}

const initialState: ThemeProviderState = {
  theme: "system",
  resolvedTheme: "dark", 
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // First check localStorage, then fallback to system preference
    const storedTheme = localStorage.getItem(storageKey) as Theme | null
    return storedTheme || defaultTheme
  })

  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">(() => {
    // Initial resolved theme based on system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches 
      ? "dark" 
      : "light"
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    let currentTheme = theme

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"
      currentTheme = systemTheme
      setResolvedTheme(systemTheme)
    } else {
      setResolvedTheme(theme)
    }

    root.classList.add(currentTheme)
  }, [theme])

  // Listen for system theme changes when in "system" mode
  useEffect(() => {
    if (theme !== "system") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      const systemTheme = mediaQuery.matches ? "dark" : "light"
      setResolvedTheme(systemTheme)
      document.documentElement.classList.remove("light", "dark")
      document.documentElement.classList.add(systemTheme)
    }

    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [theme])

  const value = {
    theme,
    resolvedTheme, // Include resolved theme in context
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}