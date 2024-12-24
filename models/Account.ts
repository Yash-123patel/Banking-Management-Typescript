export class AccountModel {

    private accountNo!: number;
    private accountHolderName!: string;
    private balance!: number;
    private panNo!: string;
    private address!: string;
    private phoneNo!:number;
    private password!:string;
 
    constructor(){}
 
    public getAccountNo(): number  {
        return this.accountNo;
    }
 
    public setAccountNo(accountNo: number): void {
        this.accountNo = accountNo;
    }
 
    public getAccountHolderName(): string {
        return this.accountHolderName;
    }
 
    public setAccountHolderName(accountHolderName: string): void {
        this.accountHolderName = accountHolderName;
    }
 
    public getBalance(): number {
        return this.balance;
    }
 
    public setBalance(balance: number): void {
        this.balance = balance;
    }
 
    public getPanNo(): string {
        return this.panNo;
    }
 
    public setPanNo(panNo: string): void {
        this.panNo = panNo;
    }
 
    public getAddress(): string {
        return this.address;
    }
 
    public setAddress(address: string): void {
        this.address = address;
    }

    public getPhoneNo(): number {
        return this.phoneNo;
    }
 
    public setPhoneNo(phoneNo: number): void {
        this.phoneNo = phoneNo;
    }

    public getPassword(): string {
        return this.password;
    }
 
    public setPassword(password: string): void {
        this.password = password;
    }
 
    public toString(): string {
        return `Account No: ${this.accountNo}, Account Holder Name: ${this.accountHolderName}, Balance: ${this.balance}, PAN No: ${this.panNo}, Address: ${this.address} PhoneNo: ${this.phoneNo}`;
    }
 }
 