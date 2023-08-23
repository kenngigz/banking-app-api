# Client requirements 

## REST API that provides below implementations.
1. All Endpoints except login must be protected from unauthorized access.
2. Use Customer ID and PIN to log in.
2. Document API 
3. Provide a way to Log API requests payload and response 
4. Create and save following details in database[customer], [account], [transaction]
5. Customer registration –Provide customer name, email, and ID.=> Generate random customer PIN and customer account, Initialize customer account with zero balance.
6. Customer login => Login using customer ID and PIN, return JSON Token after successful login
7. Get customer balance =>Return customer balance.
8. Get customer mini-statement => Return a list of the last 10 transactions for the customer
9. Cash deposit X amount => Credit customer account with X amount, and return current balance
10. Cash withdrawal Y amount => Debit customer account with Y amount, and return current balance
11. Funds transfer from customer Account to Account B (Amount X)=> Debit customer account with X amount, and Credit account B with X amount, and return current customer balance.
12. Search transaction by transaction ID => Return transaction details
*********************************************************************************************************************************************************************

# Setup

      i. Download and install Postgres from https://www.postgresql.org/download/ 
      ii. clone the project to your local computer
      iii. cd server
      iv. run npm install
      v. Open SQL shell (psql)  and paste  script from scripts.sql
      vi. run npm start

### client: https://github.com/kenngigz/banking-app-client

# How to access and use Endpoints

## 1. Create a new collection in Postman
## 2. Create 4 folders
    i. auth
    ii. profile
    iii. account
    iv. transactions

## 3. In auth folder. Create two post requests.

i. Registar request: POST: http://localhost:5000/signup (check console log for autoamtically generated pin. pin will be used to login)

    {
    "first_name":"",
    "last_name":"",
    "email":"",
    "id_no":""
    }

ii. Login request: POST: http://localhost:5000/signup

    {
    "customer_ID":"",
    "pin":""
    }

## 4. In the profile folder create two requests. One to get user profile info and the other to create a user profile

i. Create user profile: POST: http://localhost:5000/profile

    {
      "first_name":"",
      "last_name":""
    }

ii. Get user profile details: GET: http://localhost:5000/profile

    {
     "email":"",
    }

## 5. In the account folder create two requests. One to get account info and the other to create an account

i. Create an account: POST: http://localhost:5000/account

    {
      "account_no":"",
      "bank_name":"",
      "ifsc":""
    }

ii. Get account details request: GET: http://localhost:5000/account

    {
     "email":"",
    }

## 6. In the transactions folder we will create 4 requests to DEPOSIT, WITHDRAW, GET ALL TRANSACTIONS, GET SINGLE TRANSACTION and TRANSFER

i. Deposit into account: POST: http://localhost:5000/deposit/:id

    {
      "transaction_date":"",
      "deposit_amount":""
    }

ii. Withdraw from account: POST: http://localhost:5000/withdraw/:id

    {
      "transaction_date":"",
      "deposit_amount":""
    }

iii. Get all transactions : GET: http://localhost:5000/transactions/:id

     {
      "start_date":"",
      "end_date":""
     }

iv. Get a single transaction by id (NOTE USE OF SINGILAR) : POST: http://localhost:5000/transaction/:id

      {
         "tr_id":"",
      }
v. Transfer Money : POST: http://localhost:5000/debitAndCredit/:id

      {
        "transaction_date":"",
        "account_no":"",
        "amount":""
      }
