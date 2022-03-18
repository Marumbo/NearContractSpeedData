import { context, logging, PersistentVector } from "near-sdk-as";
import { SpeedData } from "./model";
import { speedDataVector } from "./storage";




export function ReturnAllSpeedCameraDataFunction():Array<Map<string,string>>{

    speedDataVector;

    let map = new Map<string,string>();
    let result = new Array<Map<string,string>>();

    for(let i:number = 0; i <speedDataVector.length; i++){
        map.set("eventTime", `${speedDataVector[<i32>i].get("eventTime")}`);
        map.set("speed", `${speedDataVector[<i32>i].get("speed")}`);
        map.set("vehicleId",`${speedDataVector[<i32>i].get("vehicleId")}`);
        map.set("lat", `${speedDataVector[<i32>i].get("lat")}`);
        map.set("lng", `${speedDataVector[<i32>i].get("lng")}`);
     //   map.set("CameraId", `${speedDataVector[<i32>i].get("cameraId")}`);
        map.set("sender", `${speedDataVector[<i32>i].get("sender")}`);
        result.push(map);  
    }

    return result;
}

export function SetSpeedCameraDataFunction(speedData: SpeedData):string{
    speedDataVector;
    const eventTime = context.blockTimestamp.toString();
   
    let map = new Map<string, string>();
    map.set("eventTime", `${eventTime}`);
    map.set("speed", `${speedData.speed}`);
    map.set("vehicleId", `${speedData.vehiclePlate}`);
    map.set("lat", `${speedData.CameraData.Location.lat}`);
    map.set("lng", `${speedData.CameraData.Location.lng}`);
    map.set("CameraId", `${speedData.CameraData.cameraId}`)
    map.set("sender", `${context.sender}`);

    //add map data to vector
   speedDataVector.push(map);

    logging.log("Data added to map");

    return "Data added to map";
}