#!/usr/bin/env bash

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable"
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable"

echo "deleting $CONTRACT and setting $OWNER as beneficiary"
echo
near delete $CONTRACT $OWNER

echo --------------------------------------------
echo
echo "cleaning up the /neardev folder"
echo
rm -rf ./neardev

# exit on first error after this point to avoid redeploying with successful build
set -e

echo --------------------------------------------
echo
echo "rebuilding the contract"
echo "Ensure  Near SDK is installed to run build"
echo
echo "if build fails, run 'yarn add -D near-sdk-as' "
echo
echo
yarn build

echo --------------------------------------------
echo
echo "redeploying the contract"
echo
near dev-deploy ./build/release/overspeedingdata.wasm

# Run near deploy <yourAccountName.testnet> ./build/release/overspeedingdata.wasm
#if you would like to deploy contact to your own account
echo --------------------------------------------
echo run the following commands
echo
echo 'export CONTRACT=<dev-123-456>'
echo 'export OWNER=<your own account>'
echo 'export CAMERA=<your account or sub-account for camera account>'
echo 'export VEHICLE=<your account or sub-account for vehicle account>'
echo
echo

exit 0