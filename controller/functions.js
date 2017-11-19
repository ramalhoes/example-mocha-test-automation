var functions = module.exports = {};

functions._skip = function(condition, priorityTest, name, callback) {
    if(priorityTest >= condition){
        var fn = it;
        fn(name, callback);
    }
    else if(priorityTest == undefined){
        var fn = it;
        fn(name, callback);
    }
}