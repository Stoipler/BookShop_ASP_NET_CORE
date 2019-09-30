import { PrintedEditionModel } from 'src/app/models/printedEditionModel';

export class PrintedEditionPageModel {
    public currentPage: number;
    public pageSize: number;
    public count: number;
    public printedEditionModels: PrintedEditionModel[];
    constructor() {

    }
}