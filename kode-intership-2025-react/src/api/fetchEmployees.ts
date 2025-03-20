import axios from "axios";
 
const API_MAIN_URL = "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users";

export async function fetchEmployees(department?: string) {
  const url = department 
    ? `${API_MAIN_URL}?__example=${department}` 
    : `${API_MAIN_URL}?__example=all`;

  try {
    const response = await axios.get(url, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch employees: ${error.message}`);
    } else {
      throw new Error('Failed to fetch employees');
    }
  }
};

export async function fetchDynamicEmployees() {
  const response = await axios.get(`${API_MAIN_URL}?__dynamic=true`);
  return response.data; 
};

export async function fetchErrorEmployees() {
  const response = await axios.get(`${API_MAIN_URL}?__code=500&__dynamic=true`);
  return response.data; 
};





