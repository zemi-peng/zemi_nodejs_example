console.log('welcom test Mongodb!');
var mongodb = require("mongodb");

  mongodb.connect('mongodb://localhost:27017/zemidb', function(err, conn){
  	if(err!=null){
  	    	console.log("error:"+err);
  	}
  	if(conn!=null){
  	  	console.log("conn mongodb://localhost:27017/zemidb Successed!");
  	}else{
  	 return;
  	}
  	//at mongodb 
  	//cmd :db.storeCollection.find()
    conn.collection('storeCollection', function(err, coll){
    	console.log("storeCollection is connected");
    	coll.find(function(err,rows){
    		rows.each(function(err,row){
    			  console.log("get storeCollection data ");
    			  if(row){
    			  	    console.log(row);
    			  	    console.log(row.version);
    			  }
    		})
    		
 				console.log("rows length:"+rows.length);
     });
    	
  
    });
  });