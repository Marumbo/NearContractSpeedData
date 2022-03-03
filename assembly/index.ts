import {logging, storage, PersistentMap, context, PersistentVector} from "near-sdk-as"

export function HelloWorld(name:string):string{

    logging.log(`name entered is ${name}`)
    return `hello ${name}`
}

export function SetSpeedCameraData(speed:string, vehicleId:string, lat:string, lng:string):void{
    
    //setter needs to be unique so time stamp and camera names?? 
    const mapVector = new PersistentVector<Map<string,string>>("SpeedData");

    const eventTime = context.blockTimestamp.toString();
   
    let map = new Map<string, string>();
    map.set("eventTime", `${eventTime}`);
    map.set("speed", `${speed}`);
    map.set("vehicleId", `${vehicleId}`);
    map.set("lat", `${lat}`);
    map.set("lng", `${lng}`);
    map.set("sender", `${context.sender}`);

    //add map data to vector
    mapVector.push(map);

    logging.log("Data added to map");

}


export function GetAllSpeedCameraData():Array<Map<string,string>>{

    const mapVector = new PersistentVector<Map<string,string>>("SpeedData");
    let map = new Map<string,string>();
    let result = new Array<Map<string,string>>();

    for(let i = 0; i <mapVector.length; i++){
        map.set("eventTime", `${mapVector[i].get("eventTime")}`);
        map.set("speed", `${mapVector[i].get("speed")}`);
        map.set("vehicleId",`${mapVector[i].get("vehicleId")}`);
        map.set("lat", `${mapVector[i].get("lat")}`);
        map.set("lng", `${mapVector[i].get("lng")}`);
        map.set("sender", `${mapVector[i].get("sender")}`);

        result.push(map);
    }
    logging.log("Speed data returned");
    return result;
}