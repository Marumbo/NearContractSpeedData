import {logging, storage, PersistentMap, context, PersistentVector} from "near-sdk-as"
import { SpeedData } from "./model";
import { ReturnAllSpeedCameraDataFunction, SetSpeedCameraDataFunction } from "./utils";

export function HelloWorld(name:string):string{

    logging.log(`name entered is ${name}`)
    return `hello ${name}`
}

export function SetSpeedCameraData(speedData:SpeedData):void{
    
    assert(parseInt(speedData.speed) > 40,"Speed must be above 40")

    let setSpeedResponse = SetSpeedCameraDataFunction(speedData);

    logging.log(`Set Speed Response ${setSpeedResponse}`)
    
}


export function GetAllSpeedCameraData():Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();
    result = ReturnAllSpeedCameraDataFunction();

    logging.log("Speed data returned");
    return result;
}
