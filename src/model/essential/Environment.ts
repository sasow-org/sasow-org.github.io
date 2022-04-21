import {DataHandler} from "../datahandler/DataHandler";
import {Simulation} from "./Simulation";
import {Agent} from "./Agent";



export abstract class Environment {
    protected dataHandler: DataHandler
    protected id : number
    protected NetworkSize: number
    protected SeedSize: number
    protected periods: number
    protected period: number
    protected simulation: Simulation
    protected initialized: boolean

    protected users: Agent[]
    protected usersQuantity: number
    protected seeds: Agent[]
    //protected actions: Action[]

    constructor(
        id: number,
        periods: number,
        NetworkSize: number,
        SeedSize: number,
        //agentsConfigs: AgentConfig.ts[]
        ) {

        this.dataHandler.getInstance();
        this.id = id
        this.periods = periods
        this.NetworkSize = NetworkSize
        this.SeedSize = SeedSize

        this.initialized = false;
        this.usersQuantity = 0
        this.users = []
        this.seeds = []
    }

    public initialize() : void {
        //todo initialice
        this.createAgents()
        this.addFollowers()
        this.addFollowings()

        if(!this.isDone()){
            console.log("Error in initialize environment with id: ", this.id);
            close()
        }
    }

    public addFollowers(): void {

    }

    public addFollowings() : void {

    }

    public createAgents() : void {

    }

    public isDone() : boolean {
        //todo make isDone
        return true;
    }
}