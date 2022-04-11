import { GetAllSpeedCameraData, SetSpeedCameraData } from "..";

import { PersistentVector, VMContext, VM } from "near-sdk-as";
import { CameraData, Position, SpeedData } from "../model";

const contract = "speedData";
const alice = "alice";


let location = new Position("","");
let cameraData = new CameraData("",location)

let speedDataObject = new SpeedData("","", cameraData);

let mapVector : PersistentVector<Map<string,string>>;

describe("hello world test", ()=>{

  beforeEach(() => {
    VMContext.setCurrent_account_id(contract);
    VMContext.setSigner_account_id(alice);
    mapVector = new PersistentVector<Map<string,string>>("SpeedData");
  });

 
  it("should be able to add one set of data", () => {

   
    speedDataObject.speed = "85";
    speedDataObject.vehiclePlate = "MA1234"
    speedDataObject.cameraData.cameraId = "cam23";
    speedDataObject.cameraData.location.lat = "23.56";
    speedDataObject.cameraData.location.lng = "-18.98" ;

        SetSpeedCameraData( speedDataObject);
    //expect(setData.length).toBe(1,"added one map to vector");
    expect(VM.logs()).toContainEqual("Data added to map");
  });

  
  it("return speed data", () => {
    speedDataObject.speed = "85";
    speedDataObject.vehiclePlate = "MA1234"
    speedDataObject.cameraData.cameraId = "cam23";
    speedDataObject.cameraData.location.lat = "23.56";
    speedDataObject.cameraData.location.lng = "-18.98" ;
    
    SetSpeedCameraData( speedDataObject);
    SetSpeedCameraData( speedDataObject);
    let allSpeedData = GetAllSpeedCameraData();

    expect(allSpeedData.length).toBe(2,"Speed data should be 2");

   //expect(setData.length).toBe(1,"added one map to vector");
   expect(VM.logs()).toContainEqual("Speed data returned");
 });


});