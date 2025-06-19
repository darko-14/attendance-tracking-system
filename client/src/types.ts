export interface AttendanceRecord {
    id: string;
    name: string;
    email: string;
    imageUrl: string;
    timestamp: Date;
    attendanceType: 'ENTRY' | 'EXIT';
}