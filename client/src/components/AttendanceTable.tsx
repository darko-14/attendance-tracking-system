import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const records = [
  {
    name: "INV001",
    email: "Paid",
    timestamp: "$250.00",
    type: "Entry",
  },
  {
    name: "INV002",
    email: "Pending",
    timestamp: "$150.00",
    type: "Exit",
  },
  {
    name: "INV003",
    email: "Unpaid",
    timestamp: "$350.00",
    type: "Exit",
  },
  {
    name: "INV004",
    email: "Paid",
    timestamp: "$450.00",
    type: "Entry",
  },
  {
    name: "INV005",
    email: "Paid",
    timestamp: "$550.00",
    type: "Exit",
  },
  {
    name: "INV006",
    email: "Pending",
    timestamp: "$200.00",
    type: "Exit",
  },
  {
    name: "INV007",
    email: "Unpaid",
    timestamp: "$300.00",
    type: "Entry",
  },
]

export function AttendanceTable() {
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
            <TableCell className="text-right">{record.type === 'Entry' ? record.type + ' ✅' : record.type + ' ❌'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
