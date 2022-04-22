#!/usr/bin/env bash

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable"
[ -z "$VEHICLE" ] && echo "Missing \$OWNER environment variable"


echo "List of Vehicles to specific Vehicle Owner Account Id"
echo
echo 

echo --------------------------------------------
echo
echo  near view \$CONTRACT ListMyVehicles '{"ownderId":"'"\$VEHICLE"'"}'
echo 
echo --------------------------------------------


near view $CONTRACT ListMyVehicles '{"ownderId":"'"$VEHICLE"'"}'

echo "Change template data entries on subsequent runs to ensure data change"
echo
echo "Useful when testing getting Vehicle plate or Camera Id specific data"
echo "Change export owner with other accounts or dev details by using contract to sign call"
echo "To vary context sender details"
echo --------------------------------------------

exit 0