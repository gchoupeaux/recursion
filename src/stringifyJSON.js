// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var isEmpty = function(obj){
  for(var key in obj){
      return false; // not empty
  }
  return true; // empty
};

var stringifyJSON = function(obj) {
  var result = '';

  if (typeof(obj)==='number') result+=obj.toString();
  else if (obj===null) result+='null';
  else if (typeof(obj)==='boolean') result+=obj?'true':'false';
  else if (typeof(obj)==='string') result+='"'+obj+'"';
  else if (Array.isArray(obj) && obj.length===0) result+='[]';
  else if (!Array.isArray(obj) && typeof(obj)==='object' && isEmpty(obj)) result+='{}';

  else if (Array.isArray(obj) && obj.length){
  	for (let i=0; i<obj.length; i++){
  		// if first index
  		if (i === 0) {
  			result+='[';
  		}
  		result+=stringifyJSON(obj[i]);
  		// if not last index
  		if (i !== obj.length-1) {
  			result+=',';
  		// last index
  		} else {
  			result+=']';
  		}
  	}
  }

  else if (!Array.isArray(obj) && typeof(obj)==='object' && !isEmpty(obj)){
  	for (let i=0; i<Object.keys(obj).length; i++){
      // if first key
      if (i === 0) {
        result+='{';
      }
      if (typeof(obj[Object.keys(obj)[i]]) !== 'function' && typeof(obj[Object.keys(obj)[i]]) !== 'undefined'){
        result+=stringifyJSON(Object.keys(obj)[i])+':'+stringifyJSON(obj[Object.keys(obj)[i]]);
        // if not last key
        if (i !== Object.keys(obj).length-1) {
          result+=',';
        }
      }
      // last key
      if (i === Object.keys(obj).length-1) {
        result+='}';
      }
  	}
	}

  return result;
};
