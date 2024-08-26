var a = [1,2,3,4,5,6,7,8,9,10];
//prototype.filter
Array.prototype.filter = function(callback){
    var result = [];
    for(var i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){ //element, index, array
            result.push(this[i]);
        }
    }
    return result;
}

var even = a.filter(function(value){
    return value % 2 === 0;
});
console.log("FILTER: ",even); 
//prototype.map
Array.prototype.map = function(callback){
    var result = [];
    for(var i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;
}

var double = a.map(function(value){
    return value * 2;
});
console.log("MAP: ",double);
//prototype.reduce
Array.prototype.reduce = function(callback, initialValue){
    var accumulator = (initialValue === undefined) ? undefined : initialValue;
    for(var i = 0; i < this.length; i++){
        if(accumulator !== undefined){
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        }else{
            accumulator = this[i];
        }
    }
    return accumulator;
}

var sum = a.reduce(function(accumulator, value){
    return accumulator + value;
}, 0);
console.log("REDUCE: ",sum);
//prototype.find
Array.prototype.find = function(callback){
    for(var i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            return this[i];
        }
    }
    return "Not Found";
}

var first = a.find(function(value){
    return value == 12;
});
console.log("FIND: ",first);
//prototype.findIndex
Array.prototype.findIndex = function(callback){
    for(var i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            return i;
        }
    }
    return -1;
}

var index = a.findIndex(function(value){
    return value == 2;
});
console.log("FINDINDEX: ",index);


