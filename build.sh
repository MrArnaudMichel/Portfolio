#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"
npm run build

echo -e "\033[0;32mCopying build folder to docs folder...\033[0m"
cp -r build/ docs/

echo -e "\033[0;32mRemoving build folder...\033[0m"
rm -rf build/