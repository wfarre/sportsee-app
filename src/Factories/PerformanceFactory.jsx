import Performance from "../models/User";

class PerformanceFactory{
    constructor(data, type){
        if(type === "api"){
            return new Performance(data);
        }
    }
}




export default PerformanceFactory;