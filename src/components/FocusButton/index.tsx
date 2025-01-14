import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { Button } from '@/components/ui/button'

export const focusModeAtom = atomWithStorage('focusMode', false)

const FocusButton = () => {
  const [focusMode, setFocusMode] = useAtom(focusModeAtom)

  const toggleFocusMode = () => {
    setFocusMode(!focusMode)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && focusMode) {
        setFocusMode(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [focusMode, setFocusMode])

  return (
    <Button
      onClick={toggleFocusMode}
      variant="ghost"
      size="icon"
      className="transition-colors hover:text-indigo-500"
      title={focusMode ? 'Exit Focus Mode' : 'Enter Focus Mode'}
    >
      {focusMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3v3a2 2 0 0 1-2 2H3" />
          <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
          <path d="M3 16h3a2 2 0 0 1 2 2v3" />
          <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
        </svg>
      )}
    </Button>
  )
}

export default FocusButton