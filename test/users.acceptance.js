const parameters = require('../controller/parameters')
let controllerIndex = require('../controller/controllerIndex')
let authentication = require('../controller/authentication')
let functions = require('../controller/functions')
 
let env = parameters.env; let priorityTest = parameters.priorityTest;

describe("suite test unitary : ",function(){
    describe.only("scenario test : Users",function(){ 
        functions._skip(1, priorityTest, "step test : users List Get", controllerIndex.usersListGet(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : user Post", controllerIndex.usersPost(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : users Get Id", controllerIndex.usersGet(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : users Put Id", controllerIndex.usersPut(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : users Delete Id", controllerIndex.usersDelete(statusCodeResponse = 200))
    })
})