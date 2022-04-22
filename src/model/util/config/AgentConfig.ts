import {Agent} from "../../essential/Agent";
import {Action} from "../actions/Action";

export class AgentConfig {
    private _agentInfo: Agent;
    private _quantityAgent: number;
    private _percentageFollowers: number;
    private _percentageFollowings: number;
    private _actions: Action[];
    private _name: String;

    constructor(agentInfo: Agent, quantityAgent: number, percentageFollowers: number, percentageFollowings: number ) {
        this._agentInfo = agentInfo
        this._quantityAgent=quantityAgent
        this._percentageFollowers = percentageFollowers
        this._percentageFollowings = percentageFollowings
        this._actions = this._agentInfo.actions;
        this._name = "agentDefault";
        //        System.out.println("Followers in agentConfig: "+followers+" --> "+name);
        //         System.out.println("Followings in agentConfig: "+followings+" --> "+name);
    }

    get agentInfo(): Agent {
        return this._agentInfo;
    }

    set agentInfo(value: Agent) {
        this._agentInfo = value;
    }

    get quantityAgent(): number {
        return this._quantityAgent;
    }

    set quantityAgent(value: number) {
        this._quantityAgent = value;
    }

    get percentageFollowers(): number {
        return this._percentageFollowers;
    }

    set percentageFollowers(value: number) {
        this._percentageFollowers = value;
    }

    get percentageFollowings(): number {
        return this._percentageFollowings;
    }

    set percentageFollowings(value: number) {
        this._percentageFollowings = value;
    }

    get actions(): Action[] {
        return this._actions;
    }

    set actions(value: Action[]) {
        this._actions = value;
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }
}