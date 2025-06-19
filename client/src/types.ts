export type AttendanceRecord = {
    name: string;
    email: string;
    image?: string;
    timestamp?: string;
    attendanceType?: 'ENTRY' | 'EXIT';
}