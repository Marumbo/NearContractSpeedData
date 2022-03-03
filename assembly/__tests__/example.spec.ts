import { GetAllSpeedCameraData, HelloWorld, SetSpeedCameraData } from "..";

import { PersistentVector, VMContext, VM } from "near-sdk-as";

const contract = "speedData";
const alice = "alice";

let mapVector : PersistentVector<Map<string,string>>;

describe("hello world test", ()=>{

  beforeEach(() => {
    VMContext.setCurrent_account_id(contract);
    VMContext.setSigner_account_id(alice);
    mapVector = new PersistentVector<Map<string,string>>("SpeedData");
  });

  it("should return 'hello maru'",() =>{
expect(HelloWorld("maru")).toStrictEqual("hello maru");
  });

  it("should be able to add one set of data", () => {
     SetSpeedCameraData("100", "Na12", "10.01","-27.87");
    

    //expect(setData.length).toBe(1,"added one map to vector");
    expect(VM.logs()).toContainEqual("Data added to map");
  });

  
  it("return speed data", () => {
    SetSpeedCameraData("100", "Na12", "10.01","-27.87");
    SetSpeedCameraData("120", "Na15", "10.01","-27.87");
    let allSpeedData = GetAllSpeedCameraData();

    expect(allSpeedData.length).toBe(2,"Speed data should be 2");

   //expect(setData.length).toBe(1,"added one map to vector");
   expect(VM.logs()).toContainEqual("Speed data returned");
 });


});