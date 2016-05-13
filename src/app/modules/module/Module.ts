/// <reference path="module.interface.ts" />

export default class ModuleClass implements ModuleClassInterface {
    value:any;
    method(value: any): any {
        return value;
    }
}