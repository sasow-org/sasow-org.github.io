import {DataHandler} from "../datahandler/DataHandler";
import {Simulation} from "./Simulation";
import {Agent} from "./Agent";
import {IObservable} from "../util/datahandler/observer/IObservable";
import {IDataEssential} from "../util/data/interfaces/IDataEssential";
import {IDataDetailed} from "../util/data/interfaces/IDataDetailed";
import { RowData } from "../util/data/RowData";


export abstract class Environment implements IObservable, IDataEssential, IDataDetailed {
    private _id: number
    private _NetworkSize: number
    private _SeedSize: number
    private _periods: number
    private _period: number
    private _simulation: Simulation
    private _initialized: boolean

    private _users: Agent[]
    private _usersQuantity: number
    private _seeds: Agent[]

    //protected actions: Action[]

    constructor(
        id: number,
        periods: number,
        NetworkSize: number,
        SeedSize: number,
        //agentsConfigs: AgentConfig.ts[]
    ) {

        this._id = id
        this._periods = periods
        this._NetworkSize = NetworkSize
        this._SeedSize = SeedSize

        this._initialized = false;
        this._usersQuantity = 0
        this._users = []
        this._seeds = []
    }

    DataEssential(): RowData {
        throw new Error("Method not implemented.");
    }

    notifyData(): void {
        throw new Error("Method not implemented.");
    }

    public initialize() : void {
        //todo initialice
        this.createAgents()
        this.addFollowers()
        this.addFollowings()

        if(!this.isDone()){
            console.log("Error in initialize environment with id: ", this._id);
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


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get NetworkSize(): number {
        return this._NetworkSize;
    }

    set NetworkSize(value: number) {
        this._NetworkSize = value;
    }

    get SeedSize(): number {
        return this._SeedSize;
    }

    set SeedSize(value: number) {
        this._SeedSize = value;
    }

    get periods(): number {
        return this._periods;
    }

    set periods(value: number) {
        this._periods = value;
    }

    get period(): number {
        return this._period;
    }

    set period(value: number) {
        this._period = value;
    }

    get simulation(): Simulation {
        return this._simulation;
    }

    set simulation(value: Simulation) {
        this._simulation = value;
    }

    get initialized(): boolean {
        return this._initialized;
    }

    set initialized(value: boolean) {
        this._initialized = value;
    }

    get users(): Agent[] {
        return this._users;
    }

    set users(value: Agent[]) {
        this._users = value;
    }

    get usersQuantity(): number {
        return this._usersQuantity;
    }

    set usersQuantity(value: number) {
        this._usersQuantity = value;
    }

    get seeds(): Agent[] {
        return this._seeds;
    }

    set seeds(value: Agent[]) {
        this._seeds = value;
    }

    DataDetailed(): RowData {
        let rdEnvironment : RowData = new RowData();
        rdEnvironment.addRow(this._period, "simulation_period");
        rdEnvironment.addRows(this.getCountStates());
        return rdEnvironment;
    }

    public abstract getCountStates(): RowData;
}