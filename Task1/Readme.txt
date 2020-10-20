Backend environment and daatabase Used: Node js , MySQL
Packages USED : Express,mysql,body-parser,nodemon
Database name : kacchi
Table name Used : item,store
host:localhost
port:3400

Routes and their uses:
    1./insertItemTable => it has been used to insert/create data into item or task 1.1 table.
    You can change the data from query line in app.js to play along. 
    2./getItemTable => it has been used to read data from intem or task 1.1 table.
    3./updateItemTable => it has been used to update data in item or taks 1.1 table.You can play along with it from 
    query line in app.js file.
    4./deleteItemTable => it has been used to delete data from item or task 1.1 table,like mentioned above to change and play along 
    please go to the query line in this routes in app.js file.
  **5./insertDataInStoreTable => it has been used to insert or store billing data of each day in
    store or task 1.2 table. Here to be mentiond that, I have used an extra ID field here as a primary key for this table
    since a table must have a primary key and here I used item_id as a foreign key from first table.
    Please go to the query line in this route at app.js and make changes in values accordingly to play along with this app.
    6./getTodaysSellingInformation => in this route I have done task 1.3 where it shows the query result of the 
    billing data of that day(provided) .please follow the mysql date time formate when you make changes at app.js file in this route to check.