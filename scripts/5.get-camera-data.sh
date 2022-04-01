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
[ -z "$CAMERAID" ] && echo "Missing \$CAMERAID environment variable, export CAMERAID=cam23, for sample data" && exit 1
[ -z "$CAMERAID" ] || echo "Found it! \$CAMERAID is set to [ $CAMERAID ]"


echo "View all speed data set related to specific vehicle Id"
echo
echo 

echo --------------------------------------------
echo
echo near view $\CONTRACT GetCameraData '{"cameraId":"$CAMERAID"}'
echo 
echo --------------------------------------------

near view $CONTRACT GetCameraData '{"cameraId":"'$CAMERAID'"}'

echo "Array of all data related to Camera Id"
echo "if empty verify if Camera Id is in the recorded data sets in Script 3 response"
echo --------------------------------------------

exit 0
