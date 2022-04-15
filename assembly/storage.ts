import { PersistentMap, PersistentVector } from "near-sdk-as";


export const overSpeedTransaction = new PersistentVector<Map<string,string>>("OverSpeedTransaction");

export const vehicleStorage = new PersistentVector<Map<string,string>>("Vehicles");

export const cameraStorage = new PersistentVector<Map<string,string>>("Cameras");

