import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { AttendanceTable } from './components/AttendanceTable'
import { AttendanceForm } from './components/AttendanceForm'

function App() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <h1>Attendance tracking system</h1>
        <AttendanceForm />
      </div>
      <AttendanceTable />
    </>
  )
}

export default App
