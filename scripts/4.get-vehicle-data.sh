#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variables"
echo "CONTRACT, OWNER and VEHICLEID"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1
[ -z "$OWNER" ] || echo "Found it! \$OWNER is set to [ $OWNER ]"
[ -z "$VEHICLEID" ] && echo "Missing \$VEHICLEID environment variable, export VEHICLEID= MA1234, for sample data" && exit 1
[ -z "$VEHICLEID" ] || echo "Found it! \$VEHICLEID is set to [ $VEHICLEID ]"


echo "View all speed data set related to specific vehicle Id"
echo
echo 

echo --------------------------------------------
echo
echo near view $\CONTRACT GetVehicleData '{"vehicleId":"$VEHICLEID"}'
echo 
echo --------------------------------------------

near view $CONTRACT GetVehicleData '{"vehicleId":"'$VEHICLEID'"}'

echo "Array of all data related to Vehicle Id"
echo "if empty verify if Vehicle Id is in the recorded data sets in Script 3 response"
echo --------------------------------------------

exit 0
