import { PrintedEditionType } from '../enums/printedEditionType';

export class PrintedEditionModel {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public type:PrintedEditionType;
    
    constructor(
       
        ) { }
}