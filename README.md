# Project 1 @cmda-minor-web · 2018-2019

## Table of Contents

1. [Live demo 🚀](#live-demo)
2. [Installation](#installation)
    1. [Pre-install](#pre-install)
    2. [Install](#install)
3. [Features 🔥](#features)
4. [Future enhancements](#future-enhancements)
5. [Technologies used 📦](#technologies-used)
6. [License](#license)

## Live demo

[Demo link](https://minor-web-project-1.netlify.com)

## Installation

### Pre-install

* Make sure to install [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com).
* Make sure that you have check for updates on the [OBA-Wrapper](https://github.com/maanlamp/OBA-wrapper) and install them if there are severe bugs. You can do this by downloading the js folder from that repository and dragging the contents of it into [this folder](./client/src/modules/OBAWrapper).
* Make sure the **port** specified in the [package.json](client/package.json) is available (defaults to 3000).

### Install

* Clone the repository: `git clone git@github.com:Maikxx/project-1-1819.git`.
* Navigate into the directory: `cd project-1-1819`.
* Install dependencies: `yarn` or `npm install`.
* Start the client with: `yarn start-client` or `npm run start-client`.

To build the client run: `yarn build-client` or `npm run build-client`.

## Concept

The ability to explore content of the OBA is pretty poor, especially when looking at a certain location of the OBA in specific.

I choose to create a map with all the locations of the OBA on it, where you would select a location of your choice, or accept the one that is nearest to your current location.

1. When you select a location, you get to see a stacked view of floorplans, in order of floor level.
2. You will now see a floor where you can explore the contents of this floor, split up in areas (for example Greek books).
3. When you click on a section, you get taken to a page which shows you suggestions. On this page you can also search by text for related books of within this topic. The books that are shown on this page are always available in this vicinity.
4. You can click on a item as usual, which takes you to the detail page of this item.

## Features

* Render a map with all the OBA locations on it.

## Future enhancements

* In a production build of this application, all of the OBA locations will need to be mapped into svgs and then to canvas. Unfortunately for now I only have the floorplans of the OBA Oosterdok location.

## Technologies used

* [Autoprefixer](https://www.npmjs.com/package/autoprefixer).
* [BabelJS](https://babeljs.io).
* [Concurrently](https://www.npmjs.com/package/concurrently).
* [Navigo](https://github.com/krasimir/navigo).
* [ParcelJS](https://parceljs.org).
* [TypeScript](https://www.typescriptlang.org).
* [Wait-on](https://www.npmjs.com/package/wait-on).
* [Yarn](https://yarnpkg.com/en/).

## License

This repository is licensed as [MIT](LICENSE) by [Maikel van Veen](https://github.com/maikxx).