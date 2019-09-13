export class PrintedEditionModel {
    private _id: number;
    public set id(value: number)
    {
        this._id = value;
    }
    public get id(): number
    {
        return this._id;
    }
    public name: string;
    public description: string;
    public price: number;
    
    constructor(
       
        ) { }
}