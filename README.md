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
