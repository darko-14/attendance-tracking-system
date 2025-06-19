import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const logAttendance = async (attendanceData: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/attendance`, attendanceData);
        return response.data;
    } catch (error) {
        console.error('Error logging attendance:', error);
        throw error;
    }
};

export const getAttendanceRecords = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/attendance`);
        return response.data;
    } catch (error) {
        console.error('Error fetching attendance records:', error);
        throw error;
    }
};