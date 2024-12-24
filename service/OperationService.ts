import { Messages } from "../constants/Messages.ts";
import { AccountModel } from "../models/Account.ts";
import { deposite, withdraw } from "../repository/AccountRepoImpl.ts";

export class BankService {
    private userAccount: AccountModel;

    constructor(userAccount: AccountModel) {
        this.userAccount = userAccount;
    }

    public async bankOperation(): Promise<void> {
        while (true) {
            console.log(`1. ${Messages.DEPOSIT}`);
            console.log(`2. ${Messages.WITHDRAW}`);
            console.log(`3. ${Messages.CHECK_BALANCE}`);
            console.log(`4. ${Messages.LOG_OUT}`);
            console.log(Messages.LINE);

            const option: string = prompt(Messages.OPTION_MESSAGE) || "";

            if (!option || isNaN(parseInt(option))) {
                console.log(Messages.INVALID_OPTION_TYPE);
                continue;
            }

            switch (parseInt(option)) {
                case 1:
                    await this.depositMoney();
                    console.log(Messages.LINE);
                    break;
                case 2:
                    await this.withdrawMoney();
                    console.log(Messages.LINE);
                    break;
                case 3:
                    this.checkBalance();
                    console.log(Messages.LINE);
                    break;
                case 4:
                    console.log(Messages.LOG_OUT_SUCCESS);
                    console.log(Messages.LINE);
                    return;
                default:
                    console.log(Messages.INVALID_OPTION_NUMBER);
                    console.log(Messages.LINE);
            }
        }
    }

    private async depositMoney(): Promise<void> {
        const amount: string = prompt(Messages.DEPOSIT_AMOUNT) || "";
        if (!amount || isNaN(parseInt(amount))) {
            console.log(Messages.INVALID_AMOUNT);
            return;
        }

        const depositAmount = parseInt(amount);
        const { data, error } = await deposite(this.userAccount.getAccountNo(), this.userAccount.getBalance() + depositAmount);

        if (error) {
            console.log(`${Messages.DATABASE_ERROR}, ${error.message}`);
           
        }

        if (data && data.length > 0) {
            console.log(Messages.DEPOSITE_SUCCESS , data[0].balance);
            this.userAccount.setBalance(data[0].balance);
        }
        else{
            console.log(Messages.DEPOSITE_FAILED);
           
        }

    }

    private async withdrawMoney(): Promise<void> {
        const amount: string = prompt(Messages.WITHDRAW_AMOUNT) || "";
        if (!amount || isNaN(parseInt(amount))) {
            console.log(Messages.INVALID_AMOUNT);
            return;
        }

        const withdrawAmount = parseInt(amount);
        if (withdrawAmount > this.userAccount.getBalance()) {
            console.log(Messages.INSUFFICIENT_BALANCE);
            return;
        }

        const { data, error } = await withdraw(this.userAccount.getAccountNo(), this.userAccount.getBalance() - withdrawAmount);

        if (error) {
            console.log(`${Messages.DATABASE_ERROR}, ${error.message}`);
        }

        if (data && data.length > 0) {
            console.log( Messages.WITHDRAW_SUCCESS, data[0].balance);
            this.userAccount.setBalance(data[0].balance);
        }
        else{
            console.log(Messages.WITHDRAW_FAILED);
        }
    }

    private checkBalance(): void {
        console.log(Messages.CURRENT_BALANCE, this.userAccount.getBalance());
    }
}
