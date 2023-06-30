const axios = require('axios').default;

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: { model: 'corolla' },
  headers: {
    'X-RapidAPI-Key': '3aa5476c86msh6971a4af39d4004p122366jsn78d617f75c3c',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

export async function fetchCars() {
  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
}
