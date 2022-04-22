import {logging} from "near-sdk-as"
import { CameraData, Position, SpeedData, VehicleData } from "./model";


let cameraData = new CameraData();
let vehicleData = new VehicleData();
let speedDataObject = new SpeedData(0,"", 0.0);


export function SubmitOverSpeedTransaction(speed:i32,vehiclePlate:string, datetime: f32):void{
    
    assert(speed > 40,"Speed must be above 40")
    speedDataObject.SubmitOverSpeedTransaction(speed,vehiclePlate, datetime);
    logging.log("Data added to overspeeding transactions")
    
}


export function GetAllOverSpeedingTransactions():Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();
    result = speedDataObject.ReturnAllOverSpeedingTransactions();

    logging.log("Speed data returned");
    return result;
}

export function RegisterCamera(location: Position):string{

    logging.log(location);
    let result = cameraData.RegisterCamera(location);
    logging.log("camera registered");
    return result;
}

export function ListOfCameras():Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();
    result = cameraData.ListOfCameras();
    logging.log("List of cameras returned.");
    return result;
}

export function CameraOverSpeedTransactions(cameraId:string):Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();
    result = speedDataObject.GetCameraOverSpeedTransactions(cameraId);

    logging.log(" camera id specifc data returned");
    return result;

}

export function RegisterVehicle(vehiclePlate:string):string{
    
    let result = vehicleData.RegisterVehicle(vehiclePlate);
    logging.log("vehicle registered");
    return result;
}

export function ListOfVehicles():Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();
    result = vehicleData.ListAllVehicles();
    logging.log("List of all registered vehicles");
    return result;
}


export function ListMyVehicles(ownderId:string):Array<Map<string,string>>{

    let result = vehicleData.ListMyVehicles(ownderId);
    logging.log("List of all registered vehicles");
    return result;
}

export function VehicleOverSpeedTransactions(vehiclePlate:string):Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();
    result = speedDataObject.GetVehicleIdOverspeedTransactions(vehiclePlate);

    logging.log(" Vehicle specifc data returned");
    return result;

}

