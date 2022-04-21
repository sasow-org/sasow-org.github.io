import {Simulation} from "./Simulation";
import {DataHandler} from "../datahandler/DataHandler";

export abstract class Experiment {
    protected simulation: Simulation;
    protected maxRepetitions: number;
    protected repetitionNumber: number;
    protected name: String;
    protected description: String;
    protected experimentConfig: number;
    protected simulationConfig: SimulationConfig;

    constructor(maxRepetitions: number, name: String, description: String,
                //dataHandlerConfig: DataHandlerConfig
                ) {
        this.maxRepetitions = maxRepetitions;
        this.name = name;
        this.description = description;
        //this.dataHandler = DataHandler.getInstance();

    }

    public run() : void {
        console.log("Starting to running in Experiment")

        while(this.repetitionNumber< this.maxRepetitions){
            console.log("Starting run (" + this.repetitionNumber + " ) of " + (this.maxRepetitions))
            this.initialize(this.repetitionNumber)
            this.simulation.run()
            setExperimentRun(++this.repetitionNumber)
            console.log("Ending run (" + this.repetitionNumber + " ) of " + (this.maxRepetitions))
        }
    }

    public abstract initialize(id: number) : void ;

    public abstract configure() : void;

    private configureExperimentConfig() {
        this.experimentConfig = new ExperimentConfig(this.simulationConfig)
        this.experimentConfig.Name = this.name;
        this.experimentConfig.Description = this.description
        this.experimentConfig.Repetitions = this.maxRepetitions
        this.experimentConfig.EssentialData = this.dataHandler.DataHandlerConfig.isEssentialData;
        this.experimentConfig.DetailedData = this.dataHandler.DataHandlerConfig.isDetailedData;

    }
}