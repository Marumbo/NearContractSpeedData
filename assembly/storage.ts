import { PersistentVector } from "near-sdk-as";

export const speedDataVector = new PersistentVector<Map<string,string>>("SpeedData");