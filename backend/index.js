import express from "express"
import mysql from "mysql"
import cors from "cors"
const app = express()

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "marketplace",

})

app.use(express.json())
app.use(cors());

app.get("/", (req, res) => {
  res.json("this will be the backend")
})

//Admin sign in
app.get("/admin", (req, res) => {
  const q = "SELECT * FROM admin"
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})


//Customer sign in 
app.get("/client", (req, res) => {
  const q = "SELECT * FROM client"
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})
//Customer signup
app.post("/client", (req, res) => {
  const q =
  "INSERT INTO marketplace.client ( `first_name`, `last_name`, `email_add`, `username`, `password`,`confirm_pass`) VALUES (?)"
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.username,
    req.body.password,
    req.body.confirm_pass,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err)
    console.log(err)
    return res.json("Sucessfuly executed")
  })
})

app.delete("/client:id", (req, res)=> {
  const clientId = req.params.id;
  const q = "DELETE FROM client WHERE id = ?"
  
  db.query(q, [clientId], (err, data) => {
    if (err) return res.json(err)
    return res.json("Sucessfuly executed")
  })

}
)


//Prducts Crochet
app.get("/crochet", (req, res) => {
  const q = "SELECT * FROM crochet"
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})
app.post("/crochet", (req, res) => {
  const q =
    "INSERT INTO crochet (`prod_name`,`prod_description`, `image`,`price`, `stock`) VALUES (?)";
  const values = [
    req.body.prod_name,
    req.body.prod_description,
    req.body.image,
    req.body.price,
    req.body.stock,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json("Sucessfuly executed")
  })
})
app.delete("/crochet:id", (req, res)=> {
  const crochetId = req.params.id;
  const q = "DELETE FROM crochet WHERE id = ?"
  
  db.query(q, [crochetId], (err, data) => {
    if (err) return res.json(err)
    return res.json("Sucessfuly executed")
  })

}
)
app.put("/crochet/:id", (req, res)=> {
  const crochetId = req.params.id;
  const q = "UPDATE crochet SET `prod_name`=?,`prod_description`=?,`image`=?,`price`=?,`stock`=? WHERE id=? ";
  const values = [
    req.body.prod_name,
    req.body.prod_description,
    req.body.image,
    req.body.price,
    req.body.stock,
  ];

  db.query(q, [...values, crochetId], (err, data) => {
    if (err) return res.json(err)
    return res.json("Sucessfuly executed")
  })

}
)

//For customer feedback
app.get("/feedback", (req, res) => {
  const q = "SELECT * FROM feedback"
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})
app.post("/feedback", (req, res) => {
  const q =
    "INSERT INTO feedback (`username`,`email`, `message`) VALUES (?)";
  const values = [
    req.body.username,
    req.body.email,
    req.body.message,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json("Sucessfuly executed")
  })
})


//Cart
app.get("/cart", (req, res) => {
  const q = "SELECT * FROM cart"
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})
app.post("/cart", (req, res) => {
  const q =
    "INSERT INTO cart (`prod_name`,`quantity`, `total`,`delete`) VALUES (?)";
  const values = [
    req.body.prod_name,
    req.body.quantity,
    req.body.total,
    req.body.delete,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json("Sucessfuly executed")
  })
})

app.delete("/cart:id", (req, res)=> {
  const crochetId = req.params.id;
  const q = "DELETE FROM crochet WHERE id = ?"
  
  db.query(q, [crochetId], (err, data) => {
    if (err) return res.json(err)
    return res.json("Sucessfuly executed")
  })

}
)




app.listen(8800, () => {
  console.log("connected to backend")
})


