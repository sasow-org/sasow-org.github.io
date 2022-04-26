import {RowData} from "./RowData";

export class MatrixData {
    private _columns : [string[]];
    private _head: string[];

    //Todo hay un problema porque tendremos repetidas las cabeceras por cada row data
    //todo creo que javascript/typescript soluciona ese problema je.

    constructor() {
        this._columns = [[]]
        this._head = []
    }

    public addRow(row: RowData) : void {
        console.log("Adding rows, this is the row: "+ row.rows);
        if(this._head === []){
            this._head = row.head;
            this._columns.push(row.head);
        }
        this._columns.push(row.rows);
    }

    private StringedArray(arrayToString : string[]) : string {
        let sb : string = "";
        for(let i : number = 0 ; i<arrayToString.length; i++) {
            sb += arrayToString[i];
            if (i+1 !== arrayToString.length){
                sb += ","
            }
        }

        return sb.toString();
    }

    public toCSVFormat() : string {
        let sb : string = "";

        for (let i : number = 0; i< this._columns.length; i++) {
            sb += this.StringedArray(this._columns[i]);

            if(i+1 !== this._columns.length) {
                sb += "\n";
            }
        }
        console.log("sb.length: "+sb.length)
        console.log("Size of CSV format: "+ this._columns.length);
        return sb.toString();//Todo se bien que es innecesario esto pero letsgo.
    }

    get columns(): [string[]] {
        return this._columns;
    }

    set columns(value: [string[]]) {
        this._columns = value;
    }

    get head(): string[] {
        return this._head;
    }

    set head(value: string[]) {
        this._head = value;
    }
}