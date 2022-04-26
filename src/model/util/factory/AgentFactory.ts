import {Creator} from "./Creator";
import {Product} from "./Product";
import {Agent} from "../../essential/Agent";

export class AgentFactory extends Creator {

    //todo you can create a generic agent factory passing the Type with <>

    constructor() {
        super();
    }


    someOperation(): void {
    }

    createProduct(fun: Function): Product {
        return fun();
    }

}