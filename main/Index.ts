import { Messages } from "../constants/Messages.ts";
import { AccountService } from "../service/Login.ts";



export class BankingApplication {
    public async start(): Promise<void> {
        console.log(Messages.LINE);
        console.log(Messages.WELCOME_MESSAGE);
        console.log(Messages.LINE);


        try {
            const accountService:AccountService=new AccountService();
            while (true) {
                this.showMainMenu();

                const option: string = prompt(Messages.OPTION_MESSAGE) || "";
                if (!option || isNaN(parseInt(option))) {
                    console.log(Messages.INVALID_OPTION_TYPE);
                    continue;
                }

                switch (parseInt(option)) {
                    case 1:
                     
                        await accountService.login();
                        break;
                    case 2:
                     
                        await accountService.createNewAccount();
                        break;
                    // deno-lint-ignore no-fallthrough
                    case 3:
                       
                        Deno.exit(0);
                    default:
                        console.log(Messages.INVALID_OPTION_NUMBER);
                        break;
                }
            }
        } catch (error) {
            console.log(`${Messages.SOMETHING_WRONG} ${error}`);
        } finally {
            console.log(Messages.THANKYOU_MESSAGE);
        }
    }
    private showMainMenu(): void {
        console.log(`1. ${Messages.LOGIN_ACCOUNT}`);
        console.log(`2. ${Messages.CREATE_ACCOUNT}`);
        console.log(`3. ${Messages.EXIT}`);
        console.log(Messages.LINE);
    }
}
const bank:BankingApplication=new BankingApplication();
bank.start();
