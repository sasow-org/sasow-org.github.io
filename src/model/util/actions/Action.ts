import {Agent} from "../../essential/Agent";

export abstract class Action {
    private _name: String;
    private _probability: number;

    constructor(name: String, probability: number) {
        this._name = name;
        this._probability = probability;
    }

    public abstract Execute(agent: Agent) : void;

    public getRandom() : number {
        return (Math.random() * 100 + 1);
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    get probability(): number {
        return this._probability;
    }

    set probability(value: number) {
        this._probability = value;
    }
}