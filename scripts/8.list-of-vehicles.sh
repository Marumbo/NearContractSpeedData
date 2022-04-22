#!/usr/bin/env bash

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable"


echo "List of Vehicles"
echo
echo 

echo --------------------------------------------
echo
echo near view \$CONTRACT ListOfVehicles
echo --------------------------------------------



near view $CONTRACT ListOfVehicles

echo "Change template data entries on subsequent runs to ensure data change"
echo
echo "Useful when testing getting Vehicle plate or Camera specific data"
echo "Change export owner with other accounts or dev details by using contract to sign call"
echo "To vary context sender details"
echo --------------------------------------------

exit 0