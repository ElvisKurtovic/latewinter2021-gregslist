import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";

class HousesService {


    constructor() {
        console.log("houses service");
    }

    createHouse(rawHouse) {
        //  let newCar = new Car(rawCar)
        //  console.log(newCar)
        //  ProxyState.cars = [...ProxyState.cars, newCar]

        let temp = ProxyState.houses
        temp.push(new House(rawHouse))
        ProxyState.houses = temp

    }

    bid(id) {
        let temp = ProxyState.houses
        let house = temp.find(h => h.id === id)
        house.price += 100
        ProxyState.houses = temp
    }

    deleteHouse(id) {
        let temp = ProxyState.houses
        let houseIndex = temp.findIndex(house => house.id == id)
        temp.splice(houseIndex, 1)
        ProxyState.houses = temp
    }
}











export const housesService = new HousesService()