import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { AttendanceRecord } from "@/types"

type TableProps = {
  records: AttendanceRecord[];
}

export function AttendanceTable({ records }: TableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-medium">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {records.map((record) => (
          <TableRow key={record.timestamp}>
            <TableCell className="font-medium">{record.name}</TableCell>
            <TableCell>{record.email}</TableCell>
            <TableCell>{record.timestamp}</TableCell>
            <TableCell className="text-right">{record.attendanceType === 'ENTRY' ? record.attendanceType + ' ✅' : record.attendanceType + ' ❌'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
