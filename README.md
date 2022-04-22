# OverSpeeding Vehicle Data Contract

This contract is designed to receive data from an IOT device
The goal is to prototype, how IOT can interface with blockchain
NEAR protocol provides an easy to use layer that allows for the two worlds to co-exist. I beleive both will have impact in our near futures.

## Setup

- Clone this repo
- Run `yarn`
- Run `yarn build`


## Test 

- Run `yarn test`

## Usage
Some variables are expected to be set to use contract. 
Variables for CONTRACT, OWNER, VEHICLEID and CAMERAID.

Scripts are available with hints on data to enter for variables.

- Environment
  ```sh
  export CONTRACT=        # depends on deployment
  export OWNER=           # any account you control
  export CAMERA=          #camera demo account, suggested sub-account of your account 
  export VEHICLE=         #vehicle owner demo account, suggested sub-account of your account 

  # for example
  # export CONTRACT=dev-1615190770786-2702449
  # export OWNER=<youraccount>.testnet
  ```

- Commands

Typically run script commands in order of numbers

  _Usage Scripts_

  ```sh

  ./scripts/1.dev-deploy.sh         # cleanup, compile and deploy contract
  
  ./scripts/2.call-set-speed-data.sh # enters inital speed,vehicle palte, datetime from IOT device 
  
  ./scripts/3.get-all-overspeeding-data.sh  # returns all speed data details associated with Contract details it is deployed to.
  
  ./scripts/4.register-camera.sh  # registers IOT device camera accounts to submit data to contract
  
  ./scripts/5.list-of-cameras.sh  # returns list of cameras
  
  ./scripts/6.camera-specific-overspeed-data.sh  # returns list of cameras
  
  ./scripts/7.register-vehicle.sh  # registers vehicles associated specific vehicle owner
  
  ./scripts/8.list-of-vehicles.sh  # returns list of vehicles
  
  ./scripts/9.list-my-vehicles.sh #returns list of vehicles associated with owner account id
  
   ./scripts/9.list-my-vehicles.sh #returns list of vehicles associated with owner account id



    
```
# File Structure

![file structure](./images/fileStructure.png)

# Contributors
 
 [Marumbo Sichinga](https://github.com/Marumbo)


