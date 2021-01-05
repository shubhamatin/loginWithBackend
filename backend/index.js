import express from 'express';
import axios from 'axios';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });
app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;


    const fetch = async () => {
        try {
            const { data } = await axios.get(`http://85.10.205.244:8082//login/${username}/${password}`)
            res.send(data);
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }
    fetch();



})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});