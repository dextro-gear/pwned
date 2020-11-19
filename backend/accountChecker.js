import responseRecords from "./models/responseRecords.js";
import SubSchema from "./models/subscription.js"

setTimeout(()=>{
    SubSchema.find();
}, 300000);