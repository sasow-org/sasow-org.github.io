
export class DataHandlerConfig {
    private _essentialData: boolean;
    private _detailedData: boolean;
    private _experimentName: string;

    constructor(experimentName: string, essentialData: boolean, detailedData: boolean) {
        this._essentialData = essentialData
        this._detailedData = detailedData
        this._experimentName = experimentName
    }


    get essentialData(): boolean {
        return this._essentialData;
    }

    set essentialData(value: boolean) {
        this._essentialData = value;
    }

    get detailedData(): boolean {
        return this._detailedData;
    }

    set detailedData(value: boolean) {
        this._detailedData = value;
    }

    get experimentName(): string {
        return this._experimentName;
    }

    set experimentName(value: string) {
        this._experimentName = value;
    }
}