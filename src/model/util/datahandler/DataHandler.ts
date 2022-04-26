import {IObserver} from "./observer/IObserver";
import {Experiment} from "../../essential/Experiment";
import {Environment} from "../../essential/Environment";
import {Simulation} from "../../essential/Simulation";
import {ExperimentConfig} from "../config/ExperimentConfig";
import {MatrixData} from "../data/MatrixData";
import {DataHandlerConfig} from "../config/DataHandlerConfig";
import {RowData} from "../data/RowData";

export class DataHandler implements IObserver {
    private static instance: DataHandler;

    //variables to acces after to get data to write.
    private _experiment : Experiment;
    private _environment : Environment;
    private _simulation : Simulation;
    private _experimentConfig : ExperimentConfig;

    private essentialData : MatrixData ;
    private detailedData : MatrixData;

    private _withInterface : boolean = false;

    private _dataHandlerConfig : DataHandlerConfig;


    public static getInstance() : DataHandler {
        if(!DataHandler.instance){
            DataHandler.instance = new DataHandler();
        }
        return DataHandler.instance;
    }

    /*
        public static restartInstance() : void {
        DataHandler.instance = new DataHandler();
    }
     */

    update(): void {
        if(this._dataHandlerConfig.essentialData) {
            addLineEssential();
        }
        if(this._dataHandlerConfig.detailedData) {
            addLineDetailed();
        }
    }

    public addLineDetailed() : void{

    }

    public addLineEssential() : void {
        let rd : RowData = new RowData();
        let rdSimulation = this._simulation.;
    }


    get experiment(): Experiment {
        return this._experiment;
    }

    set experiment(value: Experiment) {
        this._experiment = value;
    }

    get environment(): Environment {
        return this._environment;
    }

    set environment(value: Environment) {
        this._environment = value;
    }

    get simulation(): Simulation {
        return this._simulation;
    }

    set simulation(value: Simulation) {
        this._simulation = value;
    }

    get experimentConfig(): ExperimentConfig {
        return this._experimentConfig;
    }

    set experimentConfig(value: ExperimentConfig) {
        this._experimentConfig = value;
    }

    get withInterface(): boolean {
        return this._withInterface;
    }

    set withInterface(value: boolean) {
        this._withInterface = value;
    }

    get dataHandlerConfig(): DataHandlerConfig {
        return this._dataHandlerConfig;
    }

    set dataHandlerConfig(value: DataHandlerConfig) {
        this._dataHandlerConfig = value;
    }
}