'use client'

import { MantineProvider } from '@mantine/core'

import { DatePicker } from '@mantine/dates'
import { useState } from 'react'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'

export default function App() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null])

  return (
    <MantineProvider>
      <DatePicker type="range" value={value} onChange={setValue} />
    </MantineProvider>
  )
}
