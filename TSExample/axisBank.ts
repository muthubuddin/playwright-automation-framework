import type { RBI } from "./abstractionClassDemo";
import { AxisBankHeadQuater } from "./axisHeadQuater";

class AxisBank extends AxisBankHeadQuater implements RBI {
    loanApproval(): void {
        console.log("Axis Bank branch approved the loan");
    }

    reporate(): void {
        console.log("repo rate is 5.5%");
    }

    cashReserve(): void {
        console.log("cash ratio is 3.00 %");
    }

    knowYourCustomer(): void {
        console.log("Pan Card, AAdharCaard,");
    }

    showHeadOffice(): void {
        this.corporateOfficeLocation();
    }
}

const axisBank = new AxisBank();

axisBank.reporate();
axisBank.cashReserve();
axisBank.knowYourCustomer();
axisBank.showHeadOffice();
axisBank.corporateOfficeLocation();
axisBank.loanApproval();


// tsc axisBank.ts --ignoreConfig --module commonjs
// node axisBank.js
