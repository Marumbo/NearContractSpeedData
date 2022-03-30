import { context, logging } from 'near-sdk-as';
import { speedDataVector } from './storage';

@nearBindgen
export class SpeedData {
    public speed: string;
    public vehiclePlate: string;
  public cameraData: CameraData;

 constructor(

     speed: string,
      vehiclePlate: string,
   cameraData: CameraData
 ) 
 { 
     this.speed = speed,
     this.vehiclePlate =vehiclePlate,
     this.cameraData = cameraData
 }

 SetSpeedCameraDataFunction(speedData: SpeedData):string{
    speedDataVector;
    const eventTime = context.blockTimestamp.toString();
   
    let map = new Map<string, string>();
    map.set("eventTime", `${eventTime}`);
    map.set("speed", `${speedData.speed}`);
    map.set("vehicleId", `${speedData.vehiclePlate}`);
    map.set("lat", `${speedData.cameraData.location.lat}`);
    map.set("lng", `${speedData.cameraData.location.lng}`);
    map.set("cameraId", `${speedData.cameraData.cameraId}`)
    map.set("sender", `${context.sender}`);

    //add map data to vector
   speedDataVector.push(map);

    logging.log("Data added to map");

    return "Data added to map";
}

ReturnAllSpeedCameraDataFunction():Array<Map<string,string>>{

    speedDataVector;

   
    let result = new Array<Map<string,string>>();

    for(let i:number = 0; i <speedDataVector.length; i++){
        
        let map = new Map<string,string>();
        map.set("eventTime", `${speedDataVector[<i32>i].get("eventTime")}`);
        map.set("speed", `${speedDataVector[<i32>i].get("speed")}`);
        map.set("vehicleId",`${speedDataVector[<i32>i].get("vehicleId")}`);
        map.set("lat", `${speedDataVector[<i32>i].get("lat")}`);
        map.set("lng", `${speedDataVector[<i32>i].get("lng")}`);
        map.set("cameraId", `${speedDataVector[<i32>i].get("cameraId")}`);
        map.set("sender", `${speedDataVector[<i32>i].get("sender")}`);    
        
        result.push(map);  
    }

    return result;
}

GetDataForVehicleId(vehicleId:string):Array<Map<string,string>>{

    speedDataVector;

   
    let result = new Array<Map<string,string>>();

    for(let i:number = 0; i <speedDataVector.length; i++){
        if(speedDataVector[<i32>i].get("vehicleId") == vehicleId){
            let map = new Map<string,string>();
            map.set("eventTime", `${speedDataVector[<i32>i].get("eventTime")}`);
            map.set("speed", `${speedDataVector[<i32>i].get("speed")}`);
            map.set("vehicleId",`${speedDataVector[<i32>i].get("vehicleId")}`);
            map.set("lat", `${speedDataVector[<i32>i].get("lat")}`);
            map.set("lng", `${speedDataVector[<i32>i].get("lng")}`);
            map.set("cameraId", `${speedDataVector[<i32>i].get("cameraId")}`);
            map.set("sender", `${speedDataVector[<i32>i].get("sender")}`);    
            result.push(map);  
        }
    }
    return result;

}


GetDataForCameraId(cameraId:string):Array<Map<string,string>>{

    speedDataVector;

   
    let result = new Array<Map<string,string>>();

    for(let i:number = 0; i <speedDataVector.length; i++){
        if(speedDataVector[<i32>i].get("cameraId") == cameraId){
            let map = new Map<string,string>();
            map.set("eventTime", `${speedDataVector[<i32>i].get("eventTime")}`);
            map.set("speed", `${speedDataVector[<i32>i].get("speed")}`);
            map.set("vehicleId",`${speedDataVector[<i32>i].get("vehicleId")}`);
            map.set("lat", `${speedDataVector[<i32>i].get("lat")}`);
            map.set("lng", `${speedDataVector[<i32>i].get("lng")}`);
            map.set("cameraId", `${speedDataVector[<i32>i].get("cameraId")}`);
            map.set("sender", `${speedDataVector[<i32>i].get("sender")}`);    
            result.push(map);  
        }
    }
    return result;

}

}


@nearBindgen
export class CameraData {
constructor(
   public cameraId: string,
    public location: Location
){}

}

@nearBindgen
export class Location {
    constructor(
        public lat: string,
        public lng: string,
    ){ }
}