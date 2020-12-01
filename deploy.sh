#!/usr/bin/env sh

# build
yarn build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git clone -b gh-pages https://github.com/JunilHwang/vue-composition-todoapp/
cp -rf vue-composition-todoapp/.git ./.git
rm -rf vue-composition-todoapp

git add -A
git commit -m "deploy $(date +%Y-%m-%d) $(date +%H:%M)"

git push origin gh-pages

cd -