--------------------------------------------------------------------------------
mongodb install && import db
server: mongod --dbpath "C:\A-LICHUNHUI\mongdb\data"
client: mongo

use bookdb
db.bookcollection.insert({ "title" : "think in java", "content" : "ABCDEDEDEDED" })
db.bookcollection.find().pretty()
---------------------------------------------------------------------------------
cd node
npm install
npm start

