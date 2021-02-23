import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";

class HousesService {


    constructor() {
        console.log("houses service");
        this.getHouses()
    }
    async getHouses() {
        try {
            const res = await api.get('houses')
            ProxyState.houses = res.data.map(rawHouseData => new House(rawHouseData))
        } catch (error) {
            console.error(error)
        }
    }

    async createHouse(rawHouse) {
        //  let newCar = new Car(rawCar)
        //  console.log(newCar)
        //  ProxyState.cars = [...ProxyState.cars, newCar]

        // let temp = ProxyState.houses
        // temp.push(new House(rawHouse))
        // ProxyState.houses = temp
        try {
            const res = await api.post('houses', rawHouse)
            this.getHouses()
        } catch (error) {
            console.error(error)
        }

    }

    bid(id) {
        let temp = ProxyState.houses
        let house = temp.find(h => h.id === id)
        house.price += 100
        ProxyState.houses = temp
    }

    async deleteHouse(id) {
        // let temp = ProxyState.houses
        // let houseIndex = temp.findIndex(house => house.id == id)
        // temp.splice(houseIndex, 1)
        // ProxyState.houses = temp
        try {
            const res = await api.delete(`houses/${id}`)
            this.getHouses()
            // let index = ProxyState.cars.findIndex(c => c.id = id)
            // ProxyState.cars.splice(index, 1)
            // ProxyState.cars = ProxyState.cars
            ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
        } catch (error) {
            console.error(error)
        }
    }
}












export const housesService = new HousesService()