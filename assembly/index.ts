import {logging, storage, PersistentMap, context, PersistentVector} from "near-sdk-as"
import { CameraData, Location, SpeedData } from "./model";


let location = new Location("","");
let cameraData = new CameraData("",location)

let speedDataObject = new SpeedData("","", cameraData);

export function HelloWorld(name:string):string{

    logging.log(`name entered is ${name}`)
    return `hello ${name}`
}

export function SetSpeedCameraData(speedData:SpeedData):void{
    
    assert(parseInt(speedData.speed) > 40,"Speed must be above 40")

    let speedDataObject = new SpeedData(speedData.speed,speedData.vehiclePlate,speedData.cameraData);

    let setSpeedResponse = speedDataObject.SetSpeedCameraDataFunction(speedData);

    logging.log(`Set Speed Response ${setSpeedResponse}`)
    
}


export function GetAllSpeedCameraData():Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();
    result = speedDataObject.ReturnAllSpeedCameraDataFunction();

    logging.log("Speed data returned");
    return result;
}

export function GetVehicleData(vehicleId:string):Array<Map<string,string>>{
  
    let result = new Array<Map<string,string>>();
    result = speedDataObject.GetDataForVehicleId(vehicleId);

    logging.log("Speed data returned");
    return result;
}

export function GetCameraData(cameraId:string):Array<Map<string,string>>{
  
    let result = new Array<Map<string,string>>();
    result = speedDataObject.GetDataForCameraId(cameraId);

    logging.log("Speed data returned");
    return result;
}