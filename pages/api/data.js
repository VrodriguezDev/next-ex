import nextConnect from 'next-connect';
import middleware from '../../middlewares/database';

const handler = nextConnect();

handler.use(middleware);

handler
.get(async (req, res) => {
    let doc = await req.db.collection('MRTUsers').find();
    console.log(doc);
    res.json(doc);
})
.post(async (req, res) => {
    let data = req.body;
    let userData = JSON.parse(data);
    let doc = await req.db.collection('MRTUsers').insertOne(userData);
    console.log(doc);
    res.json(doc);
});

export default handler;