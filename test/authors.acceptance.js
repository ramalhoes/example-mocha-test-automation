const parameters = require('../controller/parameters')
let controllerIndex = require('../controller/controllerIndex')
let authentication = require('../controller/authentication')
let functions = require('../controller/functions')
 
let env = parameters.env; let priorityTest = parameters.priorityTest;

describe("suite test unitary : ",function(){
    describe.only("scenario test : Authors",function(){ 
        functions._skip(1, priorityTest, "step test : authors List Get", controllerIndex.authorsListGet(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : authors Post", controllerIndex.authorsPost(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : authors Get Id", controllerIndex.authorsGet(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : authors Put Id", controllerIndex.authorsPut(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : authors Delete Id", controllerIndex.authorsDelete(statusCodeResponse = 200))
    })
})