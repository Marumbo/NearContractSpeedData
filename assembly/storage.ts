import { PersistentMap, PersistentVector } from "near-sdk-as";
import { Position } from "./model";

export const overSpeedTransaction = new PersistentVector<Map<string,string>>("OverSpeedTransaction");

export const vehicles = new PersistentVector<Map<string,string>>("Vehicles");

export const cameras = new PersistentVector<Map<string,string>>("Cameras");

