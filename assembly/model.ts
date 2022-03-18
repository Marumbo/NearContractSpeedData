import {  } from 'near-sdk-as';

@nearBindgen
export class SpeedData {
 constructor(

     public speed: string,
     public vehiclePlate: string,
   public CameraData: CameraData
 ) 
 { }
}


@nearBindgen
export class CameraData {
constructor(
   public cameraId: string,
    public Location: Location
){}

}

@nearBindgen
export class Location {
    constructor(
        public lat: string,
        public lng: string,
    ){ }
}