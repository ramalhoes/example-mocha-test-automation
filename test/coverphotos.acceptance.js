const parameters = require('../controller/parameters')
let controllerIndex = require('../controller/controllerIndex')
let authentication = require('../controller/authentication')
let functions = require('../controller/functions')
 
let env = parameters.env; let priorityTest = parameters.priorityTest;

describe("suite test unitary : ",function(){
    describe.only("scenario test : Cover Photos",function(){ 
        functions._skip(1, priorityTest, "step test : cover photos List Get", controllerIndex.coverPhotosListGet(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : cover photos Post", controllerIndex.coverPhotosPost(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : cover photos Get Id", controllerIndex.coverPhotosGet(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : cover photos Put Id", controllerIndex.coverPhotosPut(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : cover photos Delete Id", controllerIndex.coverPhotosDelete(statusCodeResponse = 200))
    })
})