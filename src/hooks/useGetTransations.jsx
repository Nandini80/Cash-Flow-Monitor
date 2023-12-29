import { query,collection, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useEffect, useState } from "react";
import {useGetUserInfo} from './useGetUserInfo';

export const useGetTransactions=()=>{
    const [transactions,setTransactions] = useState([]);
    const [transactionTotal,setTransactionTotal] = useState({balance:0.0,income:0.0,expenses:0.0,});

    const transactionCollectionRef = collection(db,"transactions");
    const { userID } = useGetUserInfo();
    const getTransactions = async()=>{

        let unsubscribe;
      try{
        const queryTransanctions = query(transactionCollectionRef,where("userID","==",userID),
        orderBy("createdAt")
        );
        //keep tracking for query if there is changes
         unsubscribe = onSnapshot(queryTransanctions,(snapshot)=>{
            let docs = [];
            let totalIncome =0;
            let totalExpenses =0;

            snapshot.forEach((doc)=>{
             const data = doc.data(); 
             const id = doc.id; //unique id 
             //push obj containig data   
             docs.push({...data,id});

             if(data.transactionType==="expense")
             {
              totalExpenses +=Number(data.transactionAmount);
             }
             else 
             {
              totalIncome += Number(data.transactionAmount);
             }
            });

            setTransactions(docs);
            let balance= totalIncome- totalExpenses;
            setTransactionTotal({
              balance,
              expenses: totalExpenses,
              income: totalIncome
            });
        });
      } catch(err)
      {
        console.log(err);
    }
     return ()=>unsubscribe();
};

    useEffect( ()=>{
        getTransactions();
    },[]);

    return {transactions,transactionTotal}
};