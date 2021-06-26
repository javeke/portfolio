#!/usr/bin/env sh

set -e # abort on errors

npm run build

git add .

git commit -m "deploy"

git push origin master