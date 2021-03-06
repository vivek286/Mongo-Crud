async function mongo_crud(options,actions){
    const {MongoClient,ObjectId} = require('mongodb');
    var uri="";
    var db="-1";
    var collection="";
    var client ;
    var sheet=null;
    var pass=true;
    if(options.URL==null){
        console.log("Please set Cluster URL before performing operations");
        pass=false;
    }
      if(options.collection==null){
          pass=false;
        console.log("Please set Collection name before performing operations");
    }
     if(options.db==null){
         pass=false;
        console.log("Please select db name before performing operations");
    }
    
   
        if(options.URL!=null){
            uri=options.URL;
            client =  new MongoClient(uri);
            await client.connect();
            sheet=null;
        }
        if(options.collection!=null){
            collection=options.collection;
            sheet=null;
        }
        if(options.db!=null){
            db=options.db;
            sheet=null;
        }
        if(db!=="-1"&&collection!==""&&uri!==null&&sheet==null){
            if(db==""){
                sheet=client.db().collection(collection);
            }else{
            sheet=await client.db(db).collection(collection);
        
        }
    }
    var result={};
        if(actions!=null){
        var keys = Object.keys(actions);
        for(var i=0;i<keys.length;i++){
            var obj;
            if(actions[keys[i]]==""){
       obj=await sheet[keys[i]]().toArray();}
       else{
        obj=await sheet[keys[i]](actions[keys[i]]);
       }
      result[keys[i]]=obj;
        }
        // console.log(keys);
        // console.log(result);
            return result;
        }
}

module.exports.mongo_crud=mongo_crud;