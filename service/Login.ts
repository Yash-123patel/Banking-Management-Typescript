
import { Messages, ModelConstants } from "../constants/Messages.ts";
import { AccountModel } from "../models/Account.ts";
import { getAccountDetails, createAccount } from "../repository/AccountRepoImpl.ts";
import { BankService } from "./OperationService.ts";


export class AccountService {
    private userAccount: AccountModel;

    constructor() {
        this.userAccount = new AccountModel();
    }

    public async login(): Promise<void> {
        console.log(Messages.LINE);

        const phoneNo: string = prompt(ModelConstants.PHONENO) || "";
        if (!phoneNo || isNaN(parseInt(phoneNo)) || phoneNo.length != 10) {
            console.log(ModelConstants.INVALID_PHONE);
            return this.login();
        }

        const password: string = prompt(ModelConstants.PASSWORD) || "";
        if (!password || password.trim().length <= 4) {
            console.log(ModelConstants.INVALID_PASSWORD);
            return this.login();
        }

        this.userAccount.setPhoneNo(parseInt(phoneNo));
        this.userAccount.setPassword(password);

        const { data, error } = await getAccountDetails(this.userAccount);
        if (error) {
            console.log(` ${Messages.DATABASE_ERROR}, ${error.message}`);
            return;
        }
        if (!data || data.length == 0) {
            console.log(Messages.ACCOUNT_NOT_FOUND);
            return;
        }
        console.log(Messages.LINE);
        console.log(Messages.LOGIN_SUCCESS);
        console.log(Messages.LINE);
        this.userAccount.setAccountNo(data.accountNo);
        this.userAccount.setAccountHolderName(data.accountHolderName);
        this.userAccount.setBalance(data.balance);
        this.userAccount.setAddress(data.address);
        this.userAccount.setPanNo(data.panNo);

        const bankService:BankService=new BankService(this.userAccount);
       await bankService.bankOperation();

       
    }

    public async createNewAccount(): Promise<void> {
        console.log(Messages.LINE);

        const name: string = prompt(ModelConstants.ACCOUNTHOLDERNAME) || "";
        if (!name || name.length < 3) {
            console.log(ModelConstants.INVALID_NAME);
            return this.createNewAccount();
        }

        const panNo: string = prompt(ModelConstants.PANNO) || "";
        if (!panNo || panNo.trim().length != 10) {
            console.log(ModelConstants.INVALID_PANNO);
            return this.createNewAccount();
        }

        const address: string = prompt(ModelConstants.ADDRESS) || "";
        if (!address || address.length < 4) {
            console.log(ModelConstants.INVALID_ADDRESS);
            return this.createNewAccount();
        }
 
        const phoneNo: string = prompt(ModelConstants.PHONENO) || "";
        if (!phoneNo || isNaN(parseInt(phoneNo)) || phoneNo.length != 10) {
            console.log(ModelConstants.INVALID_PHONE);
            return this.createNewAccount();
        }

        const password: string = prompt(ModelConstants.PASSWORD) || "";
        if (!password || password.length <= 4) {
            console.log(ModelConstants.INVALID_PASSWORD);
            return this.createNewAccount();
        }

        this.userAccount.setAccountNo(Math.floor(Math.random() * 10000000000));
        this.userAccount.setAccountHolderName(name);
        this.userAccount.setBalance(0.0);
        this.userAccount.setPanNo(panNo);
        this.userAccount.setAddress(address);
        this.userAccount.setPhoneNo(parseInt(phoneNo));
        this.userAccount.setPassword(password);

        const { data, error } = await createAccount(this.userAccount);
        if (error) {
            console.log(`${Messages.DATABASE_ERROR}, ${error.message}`);
            return;
        } 
        
        else if (!data || data.length == 0) {
            console.log(Messages.ACCOUNT_NOT_CREATED);
            return;
        } 
        
           console.log(Messages.LINE);
           console.log(Messages.ACCOUNT_CREATED);
           console.log(Messages.LINE);
           const bankService:BankService=new BankService(this.userAccount);
           await bankService.bankOperation();
    }
}
