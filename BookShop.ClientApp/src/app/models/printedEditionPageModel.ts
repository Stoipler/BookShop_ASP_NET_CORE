import { PrintedEditionModel } from 'src/app/models/printedEditionModels/printedEditionModel';

export class PrintedEditionPageModel {
    public currentPage: number;
    public pageSize: number;
    public count: number;
    public printedEditionModels: PrintedEditionModel[];
    constructor() {

    }
}