

export abstract class Agent {
    public static SHARED: number = -1
    public static NOREAD: number = 0
    public static READ: number = 1
    public static PREPARE_FOR_SHARE = 2

    protected state: number
    protected agent_id: number
    protected followers: Agent[]
    protected followings: Agent[]
    //protected actions: Action[]
    protected isSeed: boolean

    constructor(id: number, state: number, isSeed: boolean) {
        this.state = state
        this.agent_id = id
        this.followers = []
        this.followings = []
        this.isSeed = isSeed
    }

    public addFriend(agent: Agent): void {
        let exist: boolean = false

        if(agent.agent_id === this.agent_id){
            exist = true;
        }else {
            for(let i = 0; i<this.followers.length; i++){
                if(this.followers[i].agent_id === agent.agent_id){
                    exist = true;
                    break;
                }
            }
        }

        if(!exist){
            this.followers.push(agent)
        }
    }
    //todo add following
    public makeSeed(isSeed: boolean): void {
        this.isSeed = isSeed;
    }
}