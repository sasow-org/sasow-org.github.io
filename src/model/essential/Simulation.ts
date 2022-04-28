import {SimulationConfig} from "../util/config/SimulationConfig";
import {IDataEssential} from "../util/data/interfaces/IDataEssential";
import {IDataDetailed} from "../util/data/interfaces/IDataDetailed";
import {Environment} from "./Environment";
import {RowData} from "../util/data/RowData";

export abstract class Simulation implements IDataEssential, IDataDetailed{
    protected _environment: Environment;
    protected _simulationConfig: SimulationConfig;
    protected _id: number;
    protected _networkSize: number;
    protected _seedSize: number;
    protected _periods: number;

    protected constructor(id: number, simulationConfig: SimulationConfig) {
        this._id = id;
        this._networkSize = simulationConfig.networkSize;
        this._seedSize = simulationConfig.seedSize;
        this._periods = simulationConfig.periods;
        this._simulationConfig = simulationConfig;
    }

    public abstract run() : void;

    public initialize() {
        this._environment.initialize();
    }

    DataDetailed(): RowData {
        let rd : RowData = new RowData();
        rd.addRow(this._id, "simulation_id");
        return rd;
    }

    DataEssential(): RowData {
        let rdSimulation : RowData = new RowData();
        rdSimulation.addRow(this._id, "simulation_id")
        rdSimulation.addRow(this._networkSize, "network_size");
        rdSimulation.addRow(this._seedSize, "seed_size");
        rdSimulation.addRow(this._periods, "periods");
        return rdSimulation;
    }

    get environment(): Environment | undefined {
        return this._environment;
    }

    set environment(value: Environment | undefined) {
        this._environment = value;
    }

    get simulationConfig(): SimulationConfig {
        return this._simulationConfig;
    }

    set simulationConfig(value: SimulationConfig) {
        this._simulationConfig = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get networkSize(): number {
        return this._networkSize;
    }

    set networkSize(value: number) {
        this._networkSize = value;
    }

    get seedSize(): number {
        return this._seedSize;
    }

    set seedSize(value: number) {
        this._seedSize = value;
    }

    get periods(): number {
        return this._periods;
    }

    set periods(value: number) {
        this._periods = value;
    }
}