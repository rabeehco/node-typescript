# Node-Typescript

## Steps to Initiate Typescript With Node

### Step 1
- Run `sudo npm i -g typescript` to install typescript globally.
- Check typescripe version by running `tsc --version` to make sure you installed it correctly.

### Step 2
- Create a file called app.ts `touch app.ts`
- Write typescript code in it.
- To compile it run `tsc app.ts`. It will generate actual Javascript file for app.js.
- If you want to watch your ts file everytime when changes happen, run `tsc app.ts -w`.

### Step 3
- Create a typescript config file by running `tsc --init`. This will generate a tsconfig.json file with commented options.
- Make the `"target"` to `es2016`
- Uncomment `"outDir": "./"` and `"rootDir": "./"`.
- Add `./dist` to outDir. `"outDir": "./dist"`: It will add the compiled js files into dist folder.
- Add `./src` to rootDir. `"rootDir": "./src"`: It will specify the root directory of input files.
- Make sure to uncomment the `"moduleResolution": "node"`

### Step 4
- Now move the `app.ts` file into `src` folder.
- Simple run `tsc` in project directory to automatically create `dist` folder and add the compiled version of `app.ts`.

### Step 5
- Add package.json file by running `npm init -y`.
- Install express: `npm i express`.
- Run `npm i -D typescript ts-node nodemon  @types/node @types/express` to install typescript, ts-node, nodemon, types definition of node and express as Dev dependencies.

### Step 6
Add Below as Scripts in package.json file
 - `"start":"node dist/app.js",`
 - `"dev": "nodemon src/app.ts",`
 - `"build": "tsc -p ."`


