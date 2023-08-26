const getCars = async () => {
    const cars = await fetch('/api/cars');
    const data = cars.json()

    return data;
    
}

const getCar = async (id) => {
    const response =  await fetch(`/api/cars/${id}`);
    const data = response.json();

    return data;
}

export const carsService = {
    getCars,
    getCar,
}