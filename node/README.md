--------------------------------------------------------------------------------
mongodb install && import db
server: mongod --dbpath "C:\A-LICHUNHUI\mongdb\data"
client: mongo

use bookdb

db.bookcollection.drop()
db.books.insert([
 { "name" : "think in java", "img":"java.jpg", "description" : "java is langugae." },
 { "name" : "think in .net", "img":"net.jpg", "description" : ".net is langugae." },
 { "name" : "think in javascript", "img":"js.jpg", "description" : "javascirpt is langugae." }
 ])


db.bookcollection.find().pretty()
db.bookcollection.find({"by":"tutorials yiibai","title": "MongoDB Overview"}).pretty()

---------------------------------------------------------------------------------
cd node
npm install
npm start

