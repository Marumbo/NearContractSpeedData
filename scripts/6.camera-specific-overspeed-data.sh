#!/usr/bin/env bash

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable"
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable"
[ -z "$CAMERA" ] && echo "Missing \$CAMERA environment variable"


echo "Camera specific speed transactions"
echo
echo 

echo --------------------------------------------
echo
echo  near view \$CONTRACT CameraOverSpeedTransactions '{"cameraId": "'"\$CAMERA"'"}'
echo 
echo --------------------------------------------


 near view $CONTRACT CameraOverSpeedTransactions '{"cameraId": "'"$CAMERA"'"}'

echo "Change template data entries on subsequent runs to ensure data change"
echo
echo "Useful when testing getting Vehicle plate or Camera Id specific data"
echo "Change export owner with other accounts or dev details by using contract to sign call"
echo "To vary context sender details"
echo --------------------------------------------

exit 0