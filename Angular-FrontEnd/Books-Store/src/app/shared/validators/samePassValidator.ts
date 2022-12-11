import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPaswords(controlname1: string, controlname2: string): ValidatorFn {
    return (control) => {
        const group = control as FormGroup;
        const ctrl1 = group.get(controlname1);
        const ctrl2 = group.get(controlname2);
        return ctrl1?.value === ctrl2?.value ? null : { matchPaswords: true }
    }
}