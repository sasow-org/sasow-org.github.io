import {Action} from "../actions/Action";

export class AgentConfig {
    private _quantityAgent: number;
    private _percentageFollowers: number;
    private _percentageFollowings: number;
    private _isSeed: boolean;
    private _actions: Action[];
    private _nameConfig: String;
    private _initialState: number;

    constructor(initialState: number,agentActions: Action[], isSeed: boolean,quantityAgent: number, percentageFollowers: number, percentageFollowings: number ) {
        //this._agentInfo = agentInfo
        this._quantityAgent=quantityAgent
        this._percentageFollowers = percentageFollowers
        this._percentageFollowings = percentageFollowings
        this._actions = agentActions;
        this._nameConfig = "agentDefault";
        this._isSeed = isSeed;
        this._initialState = initialState;
        //        System.out.println("Followers in agentConfig: "+followers+" --> "+name);
        //         System.out.println("Followings in agentConfig: "+followings+" --> "+name);
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

    get nameConfig(): String {
        return this._nameConfig;
    }

    set nameConfig(value: String) {
        this._nameConfig = value;
    }


    get isSeed(): boolean {
        return this._isSeed;
    }

    set isSeed(value: boolean) {
        this._isSeed = value;
    }


    get initialState(): number {
        return this._initialState;
    }

    set initialState(value: number) {
        this._initialState = value;
    }

    public getQuantityFollowersByNetwork(networkSize: number) {
        return Number.parseInt(""+(this.percentageFollowers * networkSize/100));//Todo maybe this can be better.
    }

    public getQuantityFollowingsByNetwork(networkSize: number){
        return Number.parseInt(""+(this.percentageFollowings * networkSize/100));//Todo maybe this can be better.
    }
}