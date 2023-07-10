# How to access and use Endpoints

1.  Create new collection in postman
2.  Create 4 folders
    i. auth
    ii. profile
    iii. account
    iv. transactions

3.  In auth folder. Create two post requests.

    i. Registar request: POST: http://localhost:5000/signup (check console log for autoamtically generated pin. pin will be used to login)

    {
    "first_name":"",
    "last_name":"",
    "email":"",
    "id_no":""
    }

    ii. Login request: POST: http://localhost:5000/signup

    {
    "customer_ID":"1000",
    "pin":"5885"
    }

4.  In profile folder create two requests. One to get user profile infor and the other to create a user profile

i. Create user profile: POST: http://localhost:5000/profile

    {
      "first_name":"",
      "last_name":""
    }

ii. Get user profile details request: GET: http://localhost:5000/profile

    {
     "email":"",
    }

5. In profile folder create two requests. One to get account infor and the other to create account

i. Create account: POST: http://localhost:5000/account

    {
      "account_no":"0202",
      "bank_name":"Equity",
      "ifsc":"002"
    }

ii. Get account details request: GET: http://localhost:5000/account

    {
     "email":"",
    }

6. In the transactions folder we will create 4 requests to DEPOSIT, WITHDRAW, GET TRANSACTIONS, and TRANSFER

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
      "start_date":"05/05/2023",
      "end_date":"08/10/2023"
     }

iv. Transfer Money : POST: http://localhost:5000/debitAndCredit/:id

      {
        "transaction_date":"06/05/2023",
        "account_no":"125125",
        "amount":"6"
      }
