import type React from 'react'
import { useAtomValue } from 'jotai'
import Header from './Header'
import Footer from './Footer'
import { focusModeAtom } from '@/store/atomForConfig'

export default function Layout({ children }: { children: React.ReactNode }) {
  const focusMode = useAtomValue(focusModeAtom)

  return (
    <div className="flex h-screen w-full flex-col">
      <div
        className={`transform transition-transform duration-300 ${
          focusMode ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <Header />
      </div>

      <main className="flex h-full w-full flex-col items-center">
        {children}
      </main>

      <div
        className={`transform transition-transform duration-300 ${
          focusMode ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <Footer />
      </div>
    </div>
  )
}