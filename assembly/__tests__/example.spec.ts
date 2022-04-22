 
import { PersistentVector, VMContext, VM } from "near-sdk-as";
import { GetAllOverSpeedingTransactions, ListOfCameras, RegisterCamera, SubmitOverSpeedTransaction } from "..";
import { CameraData,Position,SpeedData, VehicleData } from "../model";

const contract = "speedData";
const alice = "alice";

let cameraData = new CameraData();
let vehicleData = new VehicleData();
let speedDataObject = new SpeedData(0,"", 0.0);


let speed= 0;
let vehiclePlate="";
let datetime:f32 = 0.0
let location = new Position("0.0","0.0")


let result = new Array<Map<string,string>>();

let overSpeedTransaction  : PersistentVector<Map<string,string>>;

let vehicles : PersistentVector<Map<string,string>>;

let cameras :PersistentVector<Map<string,string>>;


describe("Overspeeding Contract Test", ()=>{

  beforeEach(() => {
    VMContext.setCurrent_account_id(contract);
    VMContext.setSigner_account_id(alice);
   
 overSpeedTransaction = new PersistentVector<Map<string,string>>("OverSpeedTransaction");

vehicles = new PersistentVector<Map<string,string>>("Vehicles");

cameras = new PersistentVector<Map<string,string>>("Cameras");
  });

 
  it("should be able to add one set of data", () => {

    speed= 45;
    vehiclePlate="MA1234";
    datetime = 122344.12

   SubmitOverSpeedTransaction(speed,vehiclePlate,datetime);
    //let setSpeedResponse = speedDataObject.SubmitOverSpeedTransaction(speed,vehiclePlate,datetime);

    expect(VM.logs()).toContainEqual("Data added to overspeeding transactions");
  });

  
  it("Return all overSpeeding Transactions", () => {
  
    speed= 45;
    vehiclePlate="MA1234";
    datetime = 122344.12
    SubmitOverSpeedTransaction(speed,vehiclePlate,datetime);

    speed= 87;
    vehiclePlate="TEST1234";
    datetime = 1234785.92
    SubmitOverSpeedTransaction(speed,vehiclePlate,datetime);

    let allSpeedData = GetAllOverSpeedingTransactions();

    expect(allSpeedData.length).toBe(2,"Speed data stored should be 2");
    expect(VM.logs()).toContainEqual("Speed data returned");
 });

 
 it("Register Camera test", () => {
  
  location = new Position("12.34","-12.45")
  let result = RegisterCamera(location)

  expect(result).toBe("Camera data added to map");
  expect(VM.logs()).toContainEqual("camera registered");
});

 
it("Return Camera List", () => {
  
  location = new Position("12.34","-12.45")
  RegisterCamera(location)

  location = new Position("14.67","100.34")
  RegisterCamera(location)
  
  let result = ListOfCameras()

  expect(result).toHaveLength(2,"List of Cameras");
  expect(VM.logs()).toContainEqual("List of cameras returned.");
});

 
it("Camera Over speed transactions", () => {
  
  location = new Position("12.34","-12.45")
  RegisterCamera(location)

  location = new Position("14.67","100.34")
  RegisterCamera(location)
  
  let result = ListOfCameras()

  expect(result).toHaveLength(2,"List of Cameras");
  expect(VM.logs()).toContainEqual("List of cameras returned.");
});




});