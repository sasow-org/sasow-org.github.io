export class DataHandlerConfig {
  private _isEssentialData: boolean;

  private _isDetailedData: boolean;

  private _experimentName: string;

  constructor(experimentName: string, essentialData: boolean, detailedData: boolean) {
    this._isEssentialData = essentialData;
    this._isDetailedData = detailedData;
    this._experimentName = experimentName;
  }

  get isEssentialData(): boolean {
    return this._isEssentialData;
  }

  set isEssentialData(value: boolean) {
    this._isEssentialData = value;
  }

  get isDetailedData(): boolean {
    return this._isDetailedData;
  }

  set isDetailedData(value: boolean) {
    this._isDetailedData = value;
  }

  get experimentName(): string {
    return this._experimentName;
  }

  set experimentName(value: string) {
    this._experimentName = value;
  }
}
