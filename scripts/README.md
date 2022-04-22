# Introduction
These scripts help you get set up and use the contract as intended. 
Listed in order of sequence, from deploying setting data and calls to view data.

## Run Dev Deploy

  ```sh

  ./scripts/1.dev-deploy.sh         # cleanup, compile and deploy contract

   ``` 

This will ask you delete any CONTRACT and OWNER variables. 
Build the application and deploy contract to a dev account.
Once done save CONTRACT, CAMERA, VEHICLE and OWNER variables.

## Call Set Speed Data


  ```sh

  ./scripts/2.call-set-speed-data.sh # enters inital speed,vehicle palte, datetime from IOT device 
    
```
This bash script calls the SubmitOverSpeedTransaction function, to enter speed data with sample data.

Feel free to run multiple times and directly change the sample data to add varied information on to blockchain. 

This will come in handy when calling specifc vehicle and camera data. 

The contract will return alert when speed is below 40, as speed limit needs to be above 40 to be considered speeding.

## Get all speed data


  ```sh

  ./scripts/3.get-all-overspeeding-data.sh  # returns all speed data details associated with Contract details it is deployed to.
    
```
Returns all the speed data currently stored on blockchain.
Returns Empty array if no data has been included

## Register Camera

 ```sh

  ./scripts/4.register-camera.sh  # registers IOT device camera accounts to submit data to contract
 
```

Registers camera to contract. Returns a string with message confirmation of addition.

## Get List Of Cameras
 ```sh
  ./scripts/5.list-of-cameras.sh  # returns list of cameras
    
```
Returns an array of registered cameras. An empty array if no cameras are currently registered.

## Camera specific overspeeding data
 ```sh
  ./scripts/6.camera-specific-overspeed-data.sh  # returns list of cameras
    
```
Returns an array of camera specific overspeeding data related to contract.

## Register Vehicle

 ```sh

  ./scripts/7.register-vehicle.sh  # registers vehicles associated specific vehicle owner
 
```

Registers a vehicle plate with an owner id using the account id of vehicle owner.


## Get List Of Vehicles
 ```sh
  ./scripts/8.list-of-vehicles.sh  # returns list of vehicles
    
```
Returns an array of all registered vehcles.

## List My Vehicles
```sh
  ./scripts/9.list-my-vehicles.sh #returns list of vehicles associated with owner account id

```

Returns list of vehiles associated with specific vehicle owner id.


## Vehicle specific overspeeding data
```sh
  ./scripts/10.vehicle-specific-overspeed-data.sh #returns overpseeding transaction data related to specific vehicle.

```

Returns a list of vehicle speicific overspeeding transaction data. Useful when presenting data to specific vehicle owner end users.


