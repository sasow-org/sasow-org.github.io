import {IObserver} from "./observer/IObserver";
import {Experiment} from "../../essential/Experiment";
import {Environment} from "../../essential/Environment";
import {Simulation} from "../../essential/Simulation";
import {ExperimentConfig} from "../config/ExperimentConfig";
import {MatrixData} from "../data/MatrixData";
import {DataHandlerConfig} from "../config/DataHandlerConfig";

export class DataHandler implements IObserver {
    private static instance: DataHandler;

    //variables to acces after to get data to write.
    private experiment: Experiment;
    private environment: Environment;
    private simulation: Simulation;
    private experimentConfig: ExperimentConfig;

    private essentialData : MatrixData ;
    private detailedData : MatrixData;

    private boolean withInterface = false;

    private dataHandlerConfig: DataHandlerConfig;

    constructor() {
    }

    update(): void {
    }

}