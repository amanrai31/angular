# Angular Homes App
- Install Angular if you don't have it installed

  `npm install -g @angular/cli`

- Clone this branch to your local machine

  `git clone https://github.com/amanrai31/angular.git`

- Once the code has been downloaded

  `cd angular`

- Install the dependencies

  `npm install` 

- Run the application 

  `ng serve`



- `npm install -g json-server`  =>  install json server

- `json-server --watch db.json`  => start json server at localhost:3000

--------------------------------------------------------------------------------

Angular framework is used to build client side app, great for SPAs.

**Why =>** Angular uses modular approach(opinionated), re-usable code, quick dev.

Angular CLI uses node & its associated package manager(npm,yarn,pnpm) to install & run JS tools outside the browser.

Node can be installed `using` nvm, fnm, docker `with` npm, yarn or pnpm

**Create new angular app in your local**

- `npm install -g @angular/cli` => install angular cli
- `ng new <my-app>`             => create angular app with boiler code
- `cd <my-app>`             
- `ng serve`                    => starts the local server

Angular applications are modular in nature, 2-way data binding, dependency injection, lazy loading, tree-shaking, component based routing, cross platform(web,mobile,desktop). 

**angular.json -** Project specific configuration/settings => We can change port, name of index.html/main.ts, build related rules. Basically we can customize all things about our project

**Learn about SSR & static site generation, also about server routing & App engine API, learn about RxJS**

- Angular uses real DOM, means change done in entire tree structure using *change detection*.
- Angular does not require state management libraries though we have RxJS & NgRx
- Angular use Observables instead of Promise because Angular prefers reactive programming (RxJS(reactive extension for JS) allows reactive programming)