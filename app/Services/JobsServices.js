import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";


class JobsService {


    constructor() {
        console.log("jobs service");
    }

    createJob(rawJob) {
        //  let newCar = new Car(rawCar)
        //  console.log(newCar)
        //  ProxyState.cars = [...ProxyState.cars, newCar]

        let temp = ProxyState.jobs
        temp.push(new Job(rawJob))
        ProxyState.jobs = temp

    }

    bid(id) {
        let temp = ProxyState.jobs
        let job = temp.find(j => j.id === id)
        job.rate += 100
        ProxyState.jobs = temp
    }

    deleteJob(id) {
        let temp = ProxyState.jobs
        let jobIndex = temp.findIndex(job => job.id == id)
        temp.splice(jobIndex, 1)
        ProxyState.jobs = temp
    }
}











export const jobsService = new JobsService()