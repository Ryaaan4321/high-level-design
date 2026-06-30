import dotenv from 'dotenv'
import express from 'express';
dotenv.config();
import { rm2 } from './m2.js';

const app = express();
const router = express.Router();

router.get('/', rm2, async function (req, res) {
    try {
        return res.status(200).json("we are running fine");
    } catch (e) {
        console.log("error from the route");
        return res.status(500).json({ msg: "error from the controller" });
    }
})
app.use('/', router);
app.listen(3000, () => {
    console.log("we are running from the rate-limitter");
})
