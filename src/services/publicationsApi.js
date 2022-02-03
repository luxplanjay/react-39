import axios from 'axios';

axios.defaults.baseURL = 'https://61e9af6e7bc0550017bc6417.mockapi.io';

export const getPublications = async () => {
  const response = await axios.get('/publications');
  return response.data;
};

export const getPublicationById = async id => {
  const response = await axios.get(`/publications/${id}`);
  return response.data;
};

export const addPublication = async data => {
  const response = await axios.post('/publications', data);
  return response.data;
};

export const deletePublication = async id => {
  const response = await axios.delete(`/publications/${id}`);
  return response.data;
};
