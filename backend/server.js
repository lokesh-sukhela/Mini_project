const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "4444",
    database: "jmddb"
})

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to database');
    }
});

app.post('/signup', (req, res) => {
    const sql = 'INSERT INTO users (`name`,`email`,`password`) VALUES (?)';
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM users WHERE `email`=? AND `password`=?';
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            const useremail = req.body.email;
            return [res.json("Success"),useremail];
        }
        else {
            return res.json("failed");
        }
    })
})




app.post('/api/saveData', (req, res) => {

    console.log("response",req.body)
    const data1 = req.body.TrainingTitle
    const data2 = req.body.SkillTitle;
    const data3 = req.body.SkillCategory;
    const data4 = req.body.StartDateAndTime;
    const data5 = req.body.EndDateAndTime;
    const data6 = req.body.DescriptionofTraining;
    const data7 = req.body.Participantslimit;



    const query = "INSERT INTO TrainingsDetail (TrainingTitle,SkillTitle,SkillCategory,StartDateAndTime,EndDateAndTime,DescriptionofTraining,Participantslimit)  VALUES (?,?,?,?,?,?,?)";
    // const query1 = "SELECT * FROM TrainingsDetail";

    db.query(query, [data1, data2, data3, data4, data5, data6, data7], (err, result) => {
        if (err) {
            console.error(err);
            res.status(200).json({ message: 'Error saving data' });
        } else {
            console.log(res.result);
            res.status(200).json({ message: 'Data saved successfully', });
        }
    });

});



app.get('/GetTrainingDetails', async (req, res) => {
    const query = 'SELECT Id,TrainingTitle, SkillTitle, SkillCategory, StartDateAndTime, EndDateAndTime, DescriptionofTraining,Participantslimit FROM TrainingsDetail';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching data' });
        } else {
            res.status(200).json(results);
        }
    });
})


app.listen(3002, () => {
    console.log("listening")
})