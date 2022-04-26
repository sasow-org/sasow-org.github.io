import {SimulationConfig} from "./SimulationConfig";

export class ExperimentConfig {
    private _name : string;
    private _description : string;
    private _repetitions: number;
    private _essentialData : boolean;
    private _configuratorData : boolean;
    private _detailedData: boolean;
    private _simulationConfig: SimulationConfig;

    constructor(simulationConfig: SimulationConfig) {
        this._simulationConfig = simulationConfig;
        //this._name = ""
        //this._description = ""
        //this._repetitions = -1;
        //this._essentialData = false;
        //this._configuratorData = false;
        //this._detailedData = false;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get repetitions(): number {
        return this._repetitions;
    }

    set repetitions(value: number) {
        this._repetitions = value;
    }

    get essentialData(): boolean {
        return this._essentialData;
    }

    set essentialData(value: boolean) {
        this._essentialData = value;
    }

    get configuratorData(): boolean {
        return this._configuratorData;
    }

    set configuratorData(value: boolean) {
        this._configuratorData = value;
    }

    get detailedData(): boolean {
        return this._detailedData;
    }

    set detailedData(value: boolean) {
        this._detailedData = value;
    }

    get simulationConfig(): SimulationConfig {
        return this._simulationConfig;
    }

    set simulationConfig(value: SimulationConfig) {
        this._simulationConfig = value;
    }
}