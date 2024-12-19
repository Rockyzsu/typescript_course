# Typescript Tutorial
* online training web： https://www.typescriptlang.org/play


## 
install & config check
tsc --version
npm install typescript -g

```
tsc --init
```
Generate tsconfig.ts file


## convert and run ts file
```
tsc main.ts
```
it generates a main.js file in the same folder

```
node main.js
```

you can install ts-node tool to run at the same time
```
npm install ts-node
```

then 
```
ts-node main.ts
```
it will automatively run ts file convertion and running js file