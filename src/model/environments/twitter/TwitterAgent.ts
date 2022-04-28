import {Agent} from "../../essential/Agent";
import {RowData} from "../../util/data/RowData";
import {AgentConfig} from "../../util/config/AgentConfig";

export class TwitterAgent extends Agent {

    constructor(id: number, agentConfig: AgentConfig) {
        super(id,agentConfig);
    }

    doActions() {
        this.share()
    }

    public DataDetailed(): RowData {
        //ADD some info to add to csv file.
        return super.DataDetailed();
    }

    private share() : void {
        if(this.state === Agent.PREPARE_FOR_SHARE){
            this.followers.map((agent: Agent) : void => {
                agent.receiveMessage();
            })
            this.state = Agent.SHARED;
        }
    }

}