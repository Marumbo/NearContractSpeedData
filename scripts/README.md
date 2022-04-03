# Introduction
These scripts help you get set up and use the contract as intended. 
Listed in order of sequence, from deploying setting data and calls to view data.

## Run Dev Deploy

  ```sh

  ./scripts/1.dev-deploy.sh         # cleanup, compile and deploy contract

   ``` 

This will ask you delete any CONTRACT and OWNER variables. 
Build the application and deploy contract to a dev account.
Once done save CONTRACT and OWNER variables.

## Call Set Speed Data


  ```sh

  ./scripts/2.call-set-speed-data.sh # enters inital speed data , speed 
    
```
This bash script calls the SetSpeedCameraData function, to enter speed data with sample data.

Feel free to run multiple times and directly change the sample data to add varied information on to blockchain. 

This will come in handy when calling specifc vehicle and camera data. 

The contract will return alert when speed is below 40, as speed limit needs to be above 40 to be considered speeding.

## Get all speed data


  ```sh

  ./scripts/3.get-all-apeed-data.sh  # returns all speed data details associated with Contract details it is deployed to.
    
```
Returns all the speed data currently stored on blockchain.
Returns Empty array if no data has been included

## Get Vehicle Data

 ```sh

  ./scripts/4.get-vehicle-data.sh  # returns Vehicle specific data assosicated with Contract
 
```


Returns arrayn with data related to specific vehicle using vehicle plate as identifier.
Returns empty array if vehicle plate data not available. 
Ensure that you add VEHICLEID environment variable to access the data using contract. Change the variable as needed to get specific data as submitted in call set speed data function.


## Get Camera Data
 ```sh
  ./scripts/5.get-camera-data.sh  # returns Camera specific data associated with Contract
    
```

Used to get Camera specific data using Camera Id.
Returns array with data related to specifc camera using CAMERAID environment varible as a reference.
Returns empty array if data not found. Change variable as needed to get specific camera data as submittied in call set speed data function.