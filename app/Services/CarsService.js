import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";
import { api } from "./AxiosService.js";

class CarsService {


  constructor() {
    console.log("cars service");
    this.getCars()
  }

  async getCars() {
    try {
      const res = await api.get('cars')
      ProxyState.cars = res.data.map(rawCarData => new Car(rawCarData))
    } catch (error) {
      console.error(error)
    }
  }

  async createCar(rawCar) {
    //  let newCar = new Car(rawCar)
    //  console.log(newCar)
    //  ProxyState.cars = [...ProxyState.cars, newCar]
    try {
      const res = await api.post('cars', rawCar)
      this.getCars()
    } catch (error) {
      console.error(error)
    }
    // let temp = ProxyState.cars
    // temp.push(new Car(rawCar))
    // ProxyState.cars = temp

  }

  bid(id) {
    let temp = ProxyState.cars
    let car = temp.find(c => c.id === id)
    car.price += 100
    ProxyState.cars = temp
  }

  async deleteCar(id) {
    // let temp = ProxyState.cars
    // let carIndex = temp.findIndex(car => car.id == id)
    // temp.splice(carIndex, 1)
    // ProxyState.cars = temp
    try {
      const res = await api.delete(`cars/${id}`)
      this.getCars()
      // let index = ProxyState.cars.findIndex(c => c.id = id)
      // ProxyState.cars.splice(index, 1)
      // ProxyState.cars = ProxyState.cars
      ProxyState.cars = ProxyState.cars.filter(c => c.id != id)
    } catch (error) {
      console.error(error)
    }
  }
}

export const carsService = new CarsService()