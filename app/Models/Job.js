import { generateId } from "../Utils/GenerateId.js"


export default class Job {
    constructor({ company, jobTitle, hours, rate, description, _id, id }) {
        this.company = company
        this.jobTitle = jobTitle
        this.hours = hours
        this.rate = rate
        this.description = description
        this.id = _id || id
    }


    get Template() {
        return /*html*/`<div class="card col-2">
        <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.jobsController.deleteJob('${this.id}')" aria-hidden="true"></i>
    <img class="card-img-top" src="https://media.tenor.com/images/84312b3be47d6372647ff7b113f86f1d/tenor.png" alt="">
    <div class="card-body">
        <h4 class="card-title">${this.company} ${this.jobTitle} - Hours: ${this.hours}</h4>
        <p class="card-text">${this.description}</p>
        <p>Rate: ${this.rate}</p>
        <p>Description: ${this.description}</p>
        <button class="btn btn-success" onclick="app.jobsController.bid('${this.id}')">Bid</button>
    </div>
  </div>`
    }

}