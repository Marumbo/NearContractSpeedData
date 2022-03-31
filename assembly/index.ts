import {logging, storage, PersistentMap, context, PersistentVector} from "near-sdk-as"
import { CameraData, Location, SpeedData } from "./model";


let location = new Location("","");
let cameraData = new CameraData("",location)

let speedDataObject = new SpeedData("","", cameraData);


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

    logging.log("Vehicle data returned");
    return result;
}

export function GetCameraData(cameraId:string):Array<Map<string,string>>{
  
    let result = new Array<Map<string,string>>();
    result = speedDataObject.GetDataForCameraId(cameraId);

    logging.log("Camera data returned");
    return result;
}