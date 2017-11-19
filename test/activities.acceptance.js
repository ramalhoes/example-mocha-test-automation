const parameters = require('../controller/parameters')
let controllerIndex = require('../controller/controllerIndex')
let authentication = require('../controller/authentication')
let functions = require('../controller/functions')
 
let env = parameters.env; let priorityTest = parameters.priorityTest;

describe("suite test unitary : ",function(){
    describe.only("scenario test : Activities",function(){ 
        functions._skip(1, priorityTest, "step test : activities List Get", controllerIndex.activitiesListGet(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : activities Post", controllerIndex.activitiesPost(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : activities Get Id", controllerIndex.activitiesGet(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : activities Put Id", controllerIndex.activitiesPut(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : activities Delete Id", controllerIndex.activitiesDelete(statusCodeResponse = 200))
    })
})