import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://mrtAdmin:Mrtdmn321%2B@mrtcluster-8mmx8.mongodb.net/test?authSource=admin&replicaSet=MRTCluster-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('MRT');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;