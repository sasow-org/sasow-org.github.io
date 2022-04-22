import {Action} from "../util/actions/Action";


export abstract class Agent {
    public static SHARED: number = -1
    public static NOREAD: number = 0
    public static READ: number = 1
    public static PREPARE_FOR_SHARE = 2

    private _state: number
    private _agent_id: number
    private _followers: Agent[]
    private _followings: Agent[]
    private _actions: Action[]
    private _isSeed: boolean

    protected constructor(id: number, state: number, isSeed: boolean, actions: Action[]) {
        this._state = state
        this._agent_id = id
        this._isSeed = isSeed
        this._actions = actions
        //Initialize lists
        this._followers = []
        this._followings = []
    }

    public addFriend(agent: Agent): void {
        let exist: boolean = false

        if(agent._agent_id === this._agent_id){
            exist = true;
        }else {
            for(let i = 0; i<this._followers.length; i++){
                if(this._followers[i]._agent_id === agent._agent_id){
                    exist = true;
                    break;
                }
            }
        }

        if(!exist){
            this._followers.push(agent)
        }
    }
    //todo add following
    public makeSeed(isSeed: boolean): void {
        this._isSeed = isSeed;
    }

    get state(): number {
        return this._state;
    }

    set state(value: number) {
        this._state = value;
    }

    get agent_id(): number {
        return this._agent_id;
    }

    set agent_id(value: number) {
        this._agent_id = value;
    }

    get followers(): Agent[] {
        return this._followers;
    }

    set followers(value: Agent[]) {
        this._followers = value;
    }

    get followings(): Agent[] {
        return this._followings;
    }

    set followings(value: Agent[]) {
        this._followings = value;
    }

    get actions(): Action[] {
        return this._actions;
    }

    set actions(value: Action[]) {
        this._actions = value;
    }

    get isSeed(): boolean {
        return this._isSeed;
    }

    set isSeed(value: boolean) {
        this._isSeed = value;
    }
}