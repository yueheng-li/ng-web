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

----------------------------------------------------------------------------------
mongodb 
创建一个数据库
>use mydb
检查数据库列表
>show dbs
删除新数据库
>use mydb
>db.dropDatabase()
创建集合
>db.books.insert([{ "name" : "think in java", "img":"java.jpg", "description" : "java is langugae." }])
检查集合列表
>show collections
删除集合
>db.bookcollection.drop()

----------------------------------------------------------------------------------

--------------------------------------------------------------
npm install formidable@latest
大文件upload处理