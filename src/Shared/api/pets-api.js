import instance from './auth-api';

export const getOwnPets = async () => {
  const { data } = await instance.get("/pets");
  return data;
}

export const addPet = async data => {
  const { data: result } = await instance.post('/WRITE ENDPOINT', data);
  return result;
};

export const deletePet = async id => {
  const { data } = await instance.delete(`'/WRITE ENDPOINT/${id}`);
  return data;
};