#!/bin/bash
cd app
ng build --prod --output-path ../dist
cd ..
rm *.js
rm *.html
rm *.css
mv dist/* .
rm -rf dist
sed -i '' 's#base href="/"#base href="./"#g' ${PWD}/index.html
