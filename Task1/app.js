const express =require('express');
const mysql =require('mysql');
const app =express();
const port =3400;
const bodyParser=require("body-parser");

app.use(bodyParser.json());

var mysqlConnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"kacchi",
    myltipleStatement:true
})

app.get('/',(req,res)=>{
    res.send('Hii to Koveler Cloud!')
})


//****Task 1.1 starts here */

//CREATe
app.post('/insertItemTable',(req,res)=>{
    mysqlConnection.connect((err)=>{
        if(err) throw err;
        console.log("connected")
        var sql="INSERT INTO item (id,name,price) VALUES(2,'mutton',280); "
        mysqlConnection.query(sql,(err,result,fields)=>{
            if(err) throw err;
            res.send('item added')
            
        })
    })
})

//READ
app.get('/getItemTable',(req,res)=>{
    mysqlConnection.connect((err)=>{
        if(err) throw err;
        console.log("connected")
        var sql="SELECT * FROM kacchi.item; "
        mysqlConnection.query(sql,(err,result,fields)=>{
            if(err) throw err;
            res.send(result)
            
        })
    })
})
 
//Update
app.put('/updateItemTable',(req,res)=>{
    mysqlConnection.connect((err)=>{
        if(err) throw err;
        console.log("connected")
        var sql="UPDATE item SET price=280 WHERE name='mutton' ; "
        mysqlConnection.query(sql,(err,result,fields)=>{
            if(err) throw err;
            res.send('item updated')
            
        })
    })
})


//Delete
app.delete('/deleteItemTable',(req,res)=>{
    mysqlConnection.connect((err)=>{
        if(err) throw err;
        console.log("connected")
        var sql="DELETE FROM item WHERE name='chicken' ; "
        mysqlConnection.query(sql,(err,result,fields)=>{
            if(err) throw err;
            res.send('item deleted')
            
        })
    })
})



// app.get('/createTable',(req,res)=>{
//     mysqlConnection.connect((err)=>{
//         if(err) throw err;
//         console.log("connected")
//         var sql="CREATE TABLE item (id INT NOT NULL,name VARCHAR(255), price DECIMAL(10,2),PRIMARY KEY (id)) "
//         mysqlConnection.query(sql,(err,result)=>{
//             if(err) throw err;
//             res.send("Table created")
//             res.end;
//         })
//     })
// })


//****Task 1.1 ENDS here */



//****Task 1.2 starts here */

//store selling data
app.post('/insertDataInStoreTable',(req,res)=>{
    mysqlConnection.connect((err)=>{
        if(err) throw err;
        console.log("connected")
        var sql="INSERT INTO kacchi.store(id,item_id,number_of_plates,total_price,date_time) VALUES(6,2,1,280,'2020-10-22 11:10:10') "
        mysqlConnection.query(sql,(err,result)=>{
            if(err) throw err;
            res.send("item added")
            res.end;
        })
    })
})

//creating table for storing bill data
// app.get('/createStoreTable',(req,res)=>{
//     mysqlConnection.connect((err)=>{
//         if(err) throw err;
//         console.log("connected")
//         var sql="CREATE TABLE kacchi.store (id INT NOT NULL,item_id INT ,number_of_plates INT NULL,total_price INT NULL,date_time DATETIME NULL,PRIMARY KEY (id),INDEX item_id_idx (item_id ASC) VISIBLE,CONSTRAINT item_id FOREIGN KEY (item_id)REFERENCES kacchi.item (id)ON DELETE NO ACTION ON UPDATE NO ACTION); "
//         mysqlConnection.query(sql,(err,result)=>{
//             if(err) throw err;
//             res.send("Table created")
//             res.end;
//         })
//     })
// })


//****Task 1.2 ENDS here */

//****Task 1.3 STARTS here */


app.get('/getTodaysSellingInformation',(req,res)=>{
    mysqlConnection.connect((err)=>{
        if(err) throw err;
        console.log("connected")
        var sql="SELECT SUM(total_price) FROM kacchi.store WHERE date_time='2020-10-22 11:10:10' AND item_id=2; "
        
        mysqlConnection.query(sql,(err,result,fields)=>{
            if(err) throw err;
            res.send(result)
            
        })
    })
})
//****Task 1.3 ENDS here */

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})