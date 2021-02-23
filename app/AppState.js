import Car from "./Models/Car.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import House from "./Models/House.js"
import Job from "./Models/Job.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  //NOTE adding a type to your collections with jsdocs gives additional intellisense when referencing that collection.
  /**@type {Car[]} */
  // cars = [new Car({ make: "Jeep", model: "Wrangler", price: 20, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its nice", miles: 75000 }), new Car({ make: "Jeep", model: "Rango", price: 1500, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its very nice", miles: 5000 })]
  cars = []

  /**@type {House[]} */

  houses = []

  /**@type {Job[]} */

  jobs = [new Job({ company: "Elo Inc", jobTitle: "Smurf", hours: 40, rate: 60000, description: "Its a job", imgUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80' }), new Job({ company: "Elo Inc", jobTitle: "Smurf", hours: 40, rate: 60000, description: "Its a job", imgUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80' })]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
