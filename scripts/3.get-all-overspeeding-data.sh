#!/usr/bin/env bash

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable"
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable"


echo "View all over speeding data on contract"
echo
echo 

echo --------------------------------------------
echo
echo near view \$CONTRACT GetAllOverSpeedingTransactions
echo 
echo --------------------------------------------

near view \$CONTRACT GetAllOverSpeedingTransactions

echo "Array of all data set from contract"
echo "if empty run script 2 to enter sample data"
echo --------------------------------------------

exit 0
