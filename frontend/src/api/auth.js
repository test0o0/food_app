import axios from 'axios';


// Register a new user
export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/register`, { name, email, password });
    return response.data; 
    
  } catch (error) {
    // console.error("Error registering user:", error);
    console.error('Error registering user:', error.response?.data || error.message); // Detailed error logging
    throw error.response?.data?.msg || 'Registration failed. Please try again.';
  }
};

// Login an existing user
export const loginUser = async (email, password, retries = 3) => {
  const data = { email, password };

  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/login`, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      const { token } = response.data;

      
      if (token) {
        localStorage.setItem('token', token);
        setAuthToken(token); 
      }
      return response.data; 
    } catch (error) {
      if (i < retries - 1) {
        console.warn(`Retrying login... Attempt ${i + 2}`);
        await new Promise((resolve) => setTimeout(resolve, 1000)); 
      } else {
        console.error("Error logging in user:", error);
        throw error.response?.data?.message || "Login failed. Please check your credentials.";
      }
    }
  }
}
  export const logoutUser = () => {
  localStorage.removeItem('token'); // Remove token from localStorage
  setAuthToken(null); // Remove token from axios headers
};

// Helper to set Authorization header globally
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Check for token in localStorage on app load
const token = localStorage.getItem('token');
if (token) {
  setAuthToken(token);
}

const getAuthHeaders = () => {
  const token = localStorage.getItem('token'); // Assumes token is stored in localStorage
  return token ? { Authorization: `Bearer ${token}` } : {};
};
