export enum Messages {

    //Common and Success Messages
    LINE = "====================================================================================",
    WELCOME_MESSAGE = "Welcome to Banking Management System",
    OPTION_MESSAGE = "Enter Your Option",
    LOGIN_ACCOUNT = "Login to Your Account",
    CREATE_ACCOUNT = "Create New Account",
    LOGIN_SUCCESS = "Login Successfully",
    ACCOUNT_CREATED = "Your Account Created Successfully",
    DEPOSIT = "Deposit Money to Your Account",
    WITHDRAW = "Withdraw Money from Your Account",
    CHECK_BALANCE = "Check Your Account Balance",
    LOG_OUT = "Log Out Your Account",
    LOG_OUT_SUCCESS="Log Out Successfully",
    EXIT = "Exit from Home", 
    THANKYOU_MESSAGE = "Thank You for Using Banking Management",
    


    //Error Message
    ACCOUNT_NOT_FOUND = "User Account Not Found with Provided Phone No and Password",
    INVALID_OPTION_TYPE = "Please Provide Valid Input (Only Number Allowed)",
    INVALID_OPTION_NUMBER = "Invalid Option, Try Again!!.....",
    DATABASE_ERROR="DataBase Error Occured Try Again !!!....",
    ACCOUNT_NOT_CREATED="Account Not Created Due To Some Issue",
    SOMETHING_WRONG="Something Went Wrong Try Again !!!.....",

    
    DEPOSIT_AMOUNT="Enter Deposite Amount: ",
    WITHDRAW_AMOUNT="Enter Withdraw Amount: ",
    INVALID_AMOUNT="Please Provide Valid Amount !!!...",

    DEPOSITE_SUCCESS="Money deposited successfully! Your current balance is:",
    WITHDRAW_SUCCESS="Money Withdraw successfully! Your current balance is:",


    INSUFFICIENT_BALANCE="Insufficient balance. Please try again.",

    DEPOSITE_FAILED="Due to some issue money not deposited...........",
    WITHDRAW_FAILED="Due to some issue money not Withdraw...........",

    CURRENT_BALANCE="Your Current Balance is: "

   
}

export enum ModelConstants {
    PHONENO = "Enter Your Phone No: ",
    INVALID_PHONE = "Invalid Phone No, Try Again!!!.....",

    PASSWORD = "Enter Your Password: ",
    INVALID_PASSWORD = "Invalid Password, Try Again!!!....",

    ACCOUNTHOLDERNAME = "Enter Your Name: ",
    INVALID_NAME = "Please Provide Valid Name!!!....",

    PANNO="Enter Your Pan No: ",
    INVALID_PANNO="Invalid Pan No Provide Valid Pan !!!....",

    ADDRESS="Enter Your Address: ",
    INVALID_ADDRESS="Please Provide Valid Address !!!...",




}
