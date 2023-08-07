set -e
# npm run build-prod
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Navfront/Phylosopy.git master:gh-pages
cd -
