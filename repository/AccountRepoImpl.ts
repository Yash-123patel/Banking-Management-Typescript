import supabase from "../constants/dbConfig.ts";
import { AccountModel } from "../models/Account.ts";


export async function getAccountDetails(accountModel:AccountModel):Promise<{data:any,error:any}> {
    const {data,error}=await supabase
    .from('account') 
    .select('*')
    .eq('phoneNo',accountModel.getPhoneNo())
    .eq('password',accountModel.getPassword())
    .maybeSingle();
    return {data,error}; 
}
export async function  createAccount(accountModel:AccountModel):Promise<{data:any,error:any}> {

    const {data,error}=await supabase
        .from('account') 
        .insert(accountModel).select();

        return {data,error};   
  }

export async function deposite(aacountNo:number,newAmount:number):Promise<{data:any,error:any}>  {

    const{data,error}=await supabase
          .from('account')
          .update({'balance':newAmount})
          .eq('accountNo',aacountNo)
          .select();
          return {data,error};
}

export async function withdraw(aacountNo:number,newAmount:number):Promise<{data:any,error:any}>  {

    const{data,error}=await supabase
          .from('account')
          .update({'balance':newAmount})
          .eq('accountNo',aacountNo)
          .select();
          return {data,error};
}


export async function checkBalance(accountNo:bigint):Promise<{data:any,error:any}> {
    const {data,error}=await supabase
    .from('account') 
    .select('balance')
    .eq('accountNo',accountNo)
    .maybeSingle();

    return {data,error}; 
}


