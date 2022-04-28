import {Environment} from "../../essential/Environment";
import {RowData} from "../../util/data/RowData";
import {IObservable} from "../../util/datahandler/observer/IObservable";
import {IDataEssential} from "../../util/data/interfaces/IDataEssential";
import {IDataDetailed} from "../../util/data/interfaces/IDataDetailed";
import {Agent} from "../../essential/Agent";
import {AgentConfig} from "../../util/config/AgentConfig";

export class EnvironmentTwitter extends Environment {

    constructor(
        id: number,
        periods: number,
        networkSize: number,
        seedSize: number,
        agentsConfigs: AgentConfig[]
    ) {
        super(id, periods, networkSize, seedSize, agentsConfigs);
    }


    getCountStates(): RowData {
        let rd: RowData = new RowData();
        let prepared: number = 0;
        let noread: number = 0;
        let read: number = 0;
        let shared: number = 0;
        this.users.map((user: Agent ) => {
            switch (user.state) {
                case Agent.PREPARE_FOR_SHARE:
                    prepared++;
                    break;
                case Agent.NOREAD:
                    noread++;
                    break;
                case Agent.READ:
                    read++;
                    break;
                case Agent.SHARED:
                    shared++;
                    break;
            }
        })
        rd.addRow(noread, "state_noread");
        rd.addRow(read, "state_count_read");
        rd.addRow(prepared, "state_count_prepared");//A la proxima iteracion comparten
        rd.addRow(shared, "state_count_shared");
        return rd;
    }


    step(): void {
        console.log("Do Step ("+(this._period+1)+") of "+this._periods)
        if(this.period === 0 ){//Primer periodo.

        }else {
            this.users.map((agent: Agent) => {
                agent.doActions();
            })
        }
    }

    run(): void {
        console.log("Starting in Environment ");
        let p : number = 0;
        this.period = p;
        while(this._period < (this._periods-1)) {
            this.step();
            ++p;
            this.period = p;
        }


        this.step()
        ++p;
        this.period = p;
    }



}