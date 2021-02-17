import CarsController from "./Controllers/CarsController.js";
import ValuesController from "./Controllers/ValuesController.js";
import JobsController from "./Controllers/JobsController.js";
import HousesController from "./Controllers/HousesController.js";



class App {
  // valuesController = new ValuesController();
  carsController = new CarsController();
  jobsController = new JobsController();
  housesController = new HousesController();
}

window["app"] = new App();
