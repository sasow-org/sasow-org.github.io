import {Agent} from "../../essential/Agent";
import {Action} from "../actions/Action";

export class AgentConfig {
    private agentInfo: Agent;
    private quantityAgent: number;
    private percentageFollowers: number;
    private percentageFollowings: number;
    private actions: Action[];
    private name: String;

    constructor(agent: Agent, quantityAgent: number, followers: number, followings: number ) {

    }

}