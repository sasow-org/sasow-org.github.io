import {Agent} from "../../essential/Agent";

export abstract class Action {
    protected name: String;
    protected probability: number;

    constructor(name: String, probability: number) {
        this.name = name;
        this.probability = probability;
    }

    public abstract Execute(agent: Agent) : void;

    public getRandom() : number {
        return (Math.random() * 100 + 1);
    }
}