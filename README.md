# Crrashh Homepage
This is a customizable personal homepage template based on Vue 3.  
Get it starred if you like it! :D  
其他语言：[简体中文](./README.zh.md)  

![License](https://img.shields.io/github/license/crrashh1542/crash-homepage)
![Version](https://img.shields.io/github/package-json/v/crrashh1542/crash-homepage)
![Release](https://img.shields.io/github/v/release/crrashh1542/crash-homepage?include_prereleases)
![Framework](https://img.shields.io/badge/framework-Vue%203-3fb984)

This branch is set to handle the work on **making the page publically customizable**(provisionally finished during v2.2) and **upgrading UI**(prov. finished during v2.3). Main branch is at [crash-homepage@v2](https://github.com/crrashh1542/crash-homepage/tree/v2). 
  
## 💻 Customize & Build
1. Make sure NodeJS(Version 16+) and Git are installed on your computer.
2. `Clone` this repo. **(Do not download ZIP only or it will fail to build!)**
```shell
git clone https://github.com/crrashh1542/crash-homepage
```
3. Install Yarn.
```shell
npm install yarn -g
```
4. Install dependencies.
```shell
yarn add @vue/cli -g
cd /path/to/crash-homepage
yarn set version berry
yarn install
```
5. Change the data in `/config/config.js` to yours. You can either write properties in it as objects or import data from external JSON files.
6. Start the dev env. and do some preview and edits on the devServer.
```shell
yarn serve
```
7. Exit the dev env. and start the prod env. to build static pages.
```shell
yarn build
```
8. Get built pages at `/dist` and deploy them **under the PERMISSION of Apache 2.0 License**.

## 🐛 Feedback
Suggestions and bug reports are welcome at [issues](https://github.com/crrashh1542/crash-homepage/issues).  
You can also give me your resolutions on such or newly found issues through [creating PRs](https://github.com/crrashh1542/crash-homepage/pulls).   
As a freshman in front-end, I will be of great thanks to you for your instructions.

~~Next big version(v3) will be built with React and completed someday in 2024.~~

