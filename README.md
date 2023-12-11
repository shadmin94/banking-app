# BankingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.
Node version required is v18.10.0

## Run the app with http-server

Install http-server globally `npm install http-server -g`
Navigate to the banking-folder and run `http-server dist/banking app`
In the browser, navigate to `http://127.0.0.1:8080`

## Development server

In the root folder run `npm install` to install the dependencies.
Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Please note: The build might generate following error while serving.

`Error: node_modules/foundation-sites/dist/js/foundation.d.ts:371:5 - error TS7010: 'constructor', which lacks return-type annotation, implicitly has an 'any' return type. constructor(element: any, options: any); `

If while running `ng serve` you encounter the same error please navigate to the path node_modules/foundation-sites/dist/js/foundation.d.ts and replace `constructor(element: any, options: any);` with `constructor(element: any, options: any):any;`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
