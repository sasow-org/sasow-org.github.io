import {Action} from "../Action";
import {Agent} from "../../../essential/Agent";

export class ActionRead extends Action{

    Execute(agent: Agent): void {
        const p1: number = this.getRandom();
        if(p1/100 > (1-this.probability)){
            agent.state = Agent.READ;
        }
    }


}