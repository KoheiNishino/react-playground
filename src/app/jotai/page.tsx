'use client'

import { atom, useAtom } from 'jotai'

const counter = atom(0)

export default function App() {
  const [count, setCounter] = useAtom(counter)

  return (
    <div>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => {
          setCounter(prev => prev + 1)
        }}
      >
        Click
      </button>
    </div>
  )
}
