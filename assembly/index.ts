import {logging} from "near-sdk-as"
import { CameraData, Position, SpeedData, VehicleData } from "./model";

let cameraData = new CameraData();
let vehicleData = new VehicleData();
let speedDataObject = new SpeedData(0,"", 1);


export function submitOverSpeedTransaction(speed:i32,vehiclePlate:string, datetime: i32):void{
    
    assert(speed > 40,"Speed must be above 40")
    let setSpeedResponse = speedDataObject.SubmitOverSpeedTransaction(speed,vehiclePlate, datetime);
    logging.log(`Set Speed Response ${setSpeedResponse}`)
    
}


export function getAllOverSpeedingTransactions():Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();
    result = speedDataObject.ReturnAllOverSpeedingTransactions();

    logging.log("Speed data returned");
    return result;
}

export function registerCamera(location: Position):string{

    let result = cameraData.RegisterCamera(location);
    logging.log("camera registered");
    return result;
}

export function listOfCameras():Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();
    result = cameraData.ListOfCameras();
    logging.log("List of cameras returned.");
    return result;
}

export function cameraOverSpeedTransactions(cameraId?:string):Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();
    result = speedDataObject.GetCameraOverSpeedTransactions(cameraId);

    logging.log(" camera id specifc data returned");
    return result;

}

export function registerVehicle(vehiclePlate:string):string{
    
    let result = vehicleData.RegisterVehicle(vehiclePlate);
    logging.log("vehicle registered");
    return result;
}

export function listOfVehicles():Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();
    result = vehicleData.ListAllVehicles();
    logging.log("List of all registered vehicles");
    return result;
}


export function listMyVehicles(ownderId?:string):Array<Map<string,string>>{

    let result = vehicleData.ListMyVehicles(ownderId);
    logging.log("List of all registered vehicles");
    return result;
}

export function vehicleOverSpeedTransactions(vehiclePlate?:string):Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();
    result = speedDataObject.GetVehicleIdOverspeedTransactions(vehiclePlate);

    logging.log(" Vehicle specifc data returned");
    return result;

}

