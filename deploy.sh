#!/usr/bin/env sh

set -e # abort on errors

npm run build

cd dist

git init

git add .

git commit -m "deploy"  

git push -f git@github.com:javeke/javeke.github.io.git master

cd -