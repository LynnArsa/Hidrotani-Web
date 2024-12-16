// src/services/authService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/auth'; // Sesuaikan dengan URL backend Anda

export const authService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      
      // Simpan token dan data user di localStorage
      if (response.data.token) {
        localStorage.setItem('user_token', response.data.token);
        localStorage.setItem('user_data', JSON.stringify(response.data.user));
      }
      
      return response.data;
    } catch (error) {
      // Tangani error dari backend
      throw error.response ? error.response.data : new Error('Login gagal');
    }
  },

  // Fungsi logout
  logout: () => {
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_data');
  },

  // Fungsi untuk mendapatkan token
  getToken: () => {
    return localStorage.getItem('user_token');
  }
};

// Tambahkan interceptor untuk menambahkan token ke setiap request
axios.interceptors.request.use(
  (config) => {
    const token = authService.getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);