import { AttendanceTable } from './components/AttendanceTable'
import { AttendanceForm } from './components/AttendanceForm'
import { useEffect, useState } from 'react'
import type { AttendanceRecord } from './types';

const initialRecords: AttendanceRecord[] = [
  {
    name: "INV001",
    email: "Paid",
    timestamp: "2024-06-01T09:00:00",
    attendanceType: "ENTRY",
  },
  {
    name: "INV002",
    email: "Pending",
    timestamp: "2024-06-01T10:00:00",
    attendanceType: "EXIT",
  },
  {
    name: "INV003",
    email: "Unpaid",
    timestamp: "2024-06-01T11:00:00",
    attendanceType: "EXIT",
  },
  {
    name: "INV004",
    email: "Paid",
    timestamp: "2024-06-01T12:00:00",
    attendanceType: "ENTRY",
  },
  {
    name: "INV005",
    email: "Paid",
    timestamp: "2024-06-01T13:00:00",
    attendanceType: "EXIT",
  },
  {
    name: "INV006",
    email: "Pending",
    timestamp: "2024-06-01T14:00:00",
    attendanceType: "EXIT",
  },
  {
    name: "INV007",
    email: "Unpaid",
    timestamp: "2024-06-01T15:00:00",
    attendanceType: "ENTRY",
  },
]

function App() {
  const [records, setRecords] = useState<AttendanceRecord[]>(initialRecords);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false)
    }, 5000);
  }, [showAlert]);

  const addRecord = (record: AttendanceRecord) => {
    setRecords(prev => [record, ...prev]);
    setShowAlert(true);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', marginBottom: '50px' }}>
        <h1>Attendance tracking system</h1>
        {showAlert && <b>Record inserted successfully!</b>}
        <AttendanceForm addRecord={addRecord} />
      </div>
      <AttendanceTable records={records} />
    </>
  )
}

export default App
