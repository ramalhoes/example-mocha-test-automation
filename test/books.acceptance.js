const parameters = require('../controller/parameters')
let controllerIndex = require('../controller/controllerIndex')
let authentication = require('../controller/authentication')
let functions = require('../controller/functions')
 
let env = parameters.env; let priorityTest = parameters.priorityTest;

describe("suite test unitary : ",function(){
    describe.only("scenario test : Books",function(){ 
        functions._skip(1, priorityTest, "step test : books List Get", controllerIndex.booksListGet(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : books Post", controllerIndex.booksPost(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : books Get Id", controllerIndex.booksGet(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : books Put Id", controllerIndex.booksPut(statusCodeResponse = 200))
        functions._skip(1, priorityTest, "step test : books Delete Id", controllerIndex.booksDelete(statusCodeResponse = 200))
    })
})