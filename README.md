# GAS template for Clasp

for `Vue.js`

## use env for deploy

if you use `Windows`, import npm pkg `cross-env` and set 'deploy' script in `package.json` like:

```bash
dotenv cross-var \"clasp deploy -i $GAS_DEPLOYMENT_ID\"
```
