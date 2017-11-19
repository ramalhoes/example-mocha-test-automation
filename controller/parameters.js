let priorityTestId
let clientIdRequest
let channelId
let typeOrderId

// - Definition of parameters : client
if(process.env.CLIENT != undefined){
    clientIdRequest = [process.env.CLIENT]
}
else{
    clientIdRequest = ['centauro', 'hering']
}

// - Definition of parameters : channel
if(process.env.CHANNEL != undefined){
    channelId = [process.env.CHANNEL]
}
else{
    channelId = ['site', 'megaloja', 'showrooming']
}

// - Definition of parameters : tipe order
if(process.env.TYPE_ORDER != undefined){
    typeOrderId = [process.env.TYPE_ORDER]
}
else{
    typeOrderId = ['shipment', 'pickup', 'reserve']
}

parameters = {
    env : process.env.ENV,
    priorityTest : priorityTestId,
    client : clientIdRequest,
    channel : channelId, 
    typeOrder : typeOrderId
}
module.exports = parameters