
export class RowData {
    private _head: string[];
    private _rows: string[];


    constructor(head: string[], rows: string[]) {
        this._head = head;
        this._rows = rows;
    }

    public addRow(new_row : any, name: string) : void {
        this._rows.push(""+new_row);
        this._head.push(name);
    }

    public addRows(rowsData: RowData): RowData {
        const rows : string[] = rowsData.rows;
        const heads: string[] = rowsData.head;

        for(let i : number = 0; i < rows.length; i++){
            this._head.push(heads[i])
            this._rows.push(rows[i]);
        }
        return this;
    }

    private getStringed(arrayToString : string[]) : string {
        let sb : string = "";
        for(let i : number = 0 ; i<arrayToString.length; i++) {
            sb += arrayToString[i];
            if (i+1 != arrayToString.length){
                sb += ","
            }
        }

        return sb.toString();
    }


    get head(): string[] {
        return this._head;
    }

    set head(value: string[]) {
        this._head = value;
    }

    get rows(): string[] {
        return this._rows;
    }

    set rows(value: string[]) {
        this._rows = value;
    }
}