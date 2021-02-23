import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";


class JobsService {


    constructor() {
        console.log("jobs service");
    }

    async getJobs() {
        try {
            const res = await api.get('jobs')
            ProxyState.jobs = res.data.map(rawJobData => new Job(rawJobData))
        } catch (error) {
            console.error(error)
        }
    }

    async createJob(rawJob) {
        //  let newCar = new Car(rawCar)
        //  console.log(newCar)
        //  ProxyState.cars = [...ProxyState.cars, newCar]

        // let temp = ProxyState.jobs
        // temp.push(new Job(rawJob))
        // ProxyState.jobs = temp
        try {
            const res = await api.post('jobs', rawJob)
            this.getJobs()
        } catch (error) {
            console.error(error)
        }

    }

    bid(id) {
        let temp = ProxyState.jobs
        let job = temp.find(j => j.id === id)
        job.rate += 100
        ProxyState.jobs = temp
    }

    async deleteJob(id) {
        // let temp = ProxyState.jobs
        // let jobIndex = temp.findIndex(job => job.id == id)
        // temp.splice(jobIndex, 1)
        // ProxyState.jobs = temp
        try {
            const res = await api.delete(`jobs/${id}`)
            this.getJobs()
            ProxyState.jobs = ProxyState.jobs.filter(j => j.id != id)
        } catch (error) {
            console.error(error)
        }

    }
}











export const jobsService = new JobsService()