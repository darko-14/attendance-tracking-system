export type AttendanceRecord {
    name: string;
    email: string;
    // imageUrl: string;
    timestamp: string;
    attendanceType: 'ENTRY' | 'EXIT';
}