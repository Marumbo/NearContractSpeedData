import { context, logging } from 'near-sdk-as';
import { cameraStorage, overSpeedTransaction, vehicleStorage } from './storage';

@nearBindgen
export class SpeedData {
    private speed: i32;
    private vehiclePlate: string;
    private cameraId : string;
    private cameraTime: i32;
    private signedTime: u64;

 constructor(

     speed: i32,
      vehiclePlate: string,
      cameraTime : i32 
      ) 
 { 
     this.speed = speed;
     this.vehiclePlate = vehiclePlate;
     this.cameraTime = cameraTime;
 }

 SubmitOverSpeedTransaction(speed:i32, vehiclePlate: string, cameraTime:i32):string{
    overSpeedTransaction;
    
    this.speed = speed;
    this.vehiclePlate = vehiclePlate;
    this.cameraTime =cameraTime;
    this.signedTime = context.blockTimestamp;
   this.cameraId = context.sender;

    let map = new Map<string, string>();
    map.set("speed", `${speed}`);
    map.set("vehiclePlate", `${vehiclePlate}`);
    map.set("cameraId", `${this.cameraId}`);
    map.set("cameraTime", `${this.cameraTime}`);
    map.set("signedTime", `${this.signedTime}`);

    //add map data to vector
   overSpeedTransaction.push(map);

    logging.log("Data added to overspeeding transactions");

    return "Data added to overspeeding transactions";
}

ReturnAllOverSpeedingTransactions():Array<Map<string,string>>{

    overSpeedTransaction;

   
    let result = new Array<Map<string,string>>();

    for(let i:number = 0; i <overSpeedTransaction.length; i++){
        
        let map = new Map<string,string>();
        map.set("speed", `${overSpeedTransaction[<i32>i].get("speed")}`);
        map.set("vehiclePlate", `${overSpeedTransaction[<i32>i].get("vehiclePlate")}`);
        map.set("cameraId",`${overSpeedTransaction[<i32>i].get("cameraId")}`);
        map.set("cameraTime", `${overSpeedTransaction[<i32>i].get("cameraTime")}`);
        map.set("signedTime", `${overSpeedTransaction[<i32>i].get("signedTime")}`);
       
        
        result.push(map);  
    }

    return result;
}

GetVehicleIdOverspeedTransactions(vehiclePlate?:string):Array<Map<string,string>>{

    overSpeedTransaction;

   
    let result = new Array<Map<string,string>>();

    for(let i:number = 0; i <overSpeedTransaction.length; i++){
        if(overSpeedTransaction[<i32>i].get("vehiclePlate") == vehiclePlate ){

            let map = new Map<string,string>();
            map.set("speed", `${overSpeedTransaction[<i32>i].get("speed")}`);
            map.set("vehiclePlate", `${overSpeedTransaction[<i32>i].get("vehiclePlate")}`);
            map.set("cameraId",`${overSpeedTransaction[<i32>i].get("cameraId")}`);
            map.set("cameraTime", `${overSpeedTransaction[<i32>i].get("cameraTime")}`);
            map.set("signedTime", `${overSpeedTransaction[<i32>i].get("signedTime")}`);
            
            
            result.push(map);  
        }
    }

    return result;

}


GetCameraOverSpeedTransactions(cameraId?:string):Array<Map<string,string>>{

    overSpeedTransaction;

   
    let result = new Array<Map<string,string>>();

    for(let i:number = 0; i <overSpeedTransaction.length; i++){
        if(overSpeedTransaction[<i32>i].get("cameraId") == cameraId || overSpeedTransaction[<i32>i].get("cameraId") == context.sender ){

            let map = new Map<string,string>();
            map.set("speed", `${overSpeedTransaction[<i32>i].get("speed")}`);
            map.set("vehiclePlate", `${overSpeedTransaction[<i32>i].get("vehiclePlate")}`);
            map.set("cameraId",`${overSpeedTransaction[<i32>i].get("cameraId")}`);
            map.set("cameraTime", `${overSpeedTransaction[<i32>i].get("cameraTime")}`);
            map.set("signedTime", `${overSpeedTransaction[<i32>i].get("signedTime")}`);
            
            
            result.push(map);  
        }
    }

    return result;

}

}


@nearBindgen
export class CameraData {
    private cameraId: string
    private location: Position
constructor(
 
){}

RegisterCamera(location:Position): string{

    this.location = location;
    this.cameraId = context.sender;

    let map = new Map<string,string>();

    map.set("cameraId",this.cameraId);
    map.set("latitude",this.location.lat);
    map.set("longitude",this.location.lng);

    cameraStorage.push(map);

    logging.log("Camera data added to map");

    return "Camera data added to map";
}

ListOfCameras(): Array<Map<string,string>>{
    
    let result = new Array<Map<string,string>>();

    for(let i:number = 0; i <cameraStorage.length; i++){
        
        let map = new Map<string,string>();
        map.set("cameraId", `${cameraStorage[<i32>i].get("cameraId")}`);
        map.set("latitude", `${cameraStorage[<i32>i].get("latitude")}`);
        map.set("latitude", `${cameraStorage[<i32>i].get("longitude")}`);
    
        result.push(map);  
    }

    return result;
}
}

@nearBindgen
export class VehicleData {
    private ownderId: string;
    private plate: string
    constructor(
    
){

}

RegisterVehicle(vehiclePlate: string): string{
    this.ownderId = context.sender;
    this.plate = vehiclePlate;
    let map = new Map<string,string>();
    map.set("ownerId", this.ownderId);
    map.set("vehiclePlate",this.plate);

    vehicleStorage.push(map);

    logging.log("Vehicle registered");

    return "Vehicle registered";
}

ListAllVehicles(): Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();

    for(let i:number = 0; i <vehicleStorage.length; i++){
        
        let map = new Map<string,string>();
        map.set("ownerId", `${vehicleStorage[<i32>i].get("ownerId")}`);
        map.set("vehiclePlate", `${vehicleStorage[<i32>i].get("vehiclePlate")}`);

        result.push(map);  
    }

    return result;
}

ListMyVehicles(ownderId?:string):Array<Map<string,string>>{

    let result = new Array<Map<string,string>>();

    for(let i:number = 0; i <vehicleStorage.length; i++){
        
        if( vehicleStorage[<i32>i].get("ownerId") == ownderId||vehicleStorage[<i32>i].get("ownerId") == context.sender){

            let map = new Map<string,string>();
            map.set("ownerId", `${vehicleStorage[<i32>i].get("ownerId")}`);
            map.set("vehiclePlate", `${vehicleStorage[<i32>i].get("vehiclePlate")}`);        
            result.push(map);  
        }
    }

    return result;
}

}

@nearBindgen
export class Position {
    constructor(
        public lat: string,
        public lng: string,
    ){ }
}