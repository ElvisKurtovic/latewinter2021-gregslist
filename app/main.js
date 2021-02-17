import CarsController from "./Controllers/CarsController.js";
import ValuesController from "./Controllers/ValuesController.js";
import JobsController from "./Controllers/JobsController.js";
import HousesController from "./Controllers/HousesController.js";



function startTabs() {
  var triggerTabList = [].slice.call(document.querySelectorAll('#navCartab, #navHousetab, #navJobstab'))

  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)
    triggerEl.addEventListener('click', function (event) {

      event.preventDefault()
      tabTrigger.show()
    })
  })
}
class App {
  // valuesController = new ValuesController();
  constructor() {
    startTabs()
  }
  carsController = new CarsController();
  jobsController = new JobsController();
  housesController = new HousesController();
}

window["app"] = new App();
