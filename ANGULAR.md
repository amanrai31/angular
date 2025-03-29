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
- Angular does not require state management libraries though we have NgRx (Based on redux, uses RxJS internally for handling state changes reactively)
- Angular use Observables instead of Promise because Angular prefers reactive programming (RxJS library(reactive extension for JS) allows reactive programming)

**FLUX (Redux) :** An architecture that promotes unidirectional data flow through a store that saves the current state of the app => An action that is request to change app state & reducer to perform this request.

---

Angular has at-least one module (root module/app module).

root component/app component > component(s) > files (html + css + js/ts + other files(service.ts, route.ts, module.ts, comp.spac.ts specs.ts,) )   

Primary files => main.ts, index.html, style.css

---

#### Angular CLI(command line interface)

Helps to quickly create, build, and manage Angular projects with simple commands. Provide boiler codes.

e.g. => ng g <c/s/i/r> <name of file|component>  => ng g c Home (generates a component with boiler code with name "Home")

e.g. => ng g i Users => generates an interface Users (interface let component know what type of data to expect)

---

```ts
@Component({                                             // component decorator (meta data)
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],  
  template: `./home.component.html `,                 // we can have inline template also, if we have small template(html)
  styleUrls: ['./home.component.css']
})
```

Benefits of dependency injection/DI (dependency is service which is injected where required)=> Reusable code , maintainable code, testable code. 

To use a service as dependency, it must be provided in angular DI system => 
1. In ```@Injectable({ providedIn: 'root' })``` Recommended way, check service file.
2. In a Specific Module (providers array in @NgModule)

Where we can use DI => service(most common), component, directives, pipes, guard & interceptor

Passing data in components from parent to child with *@Input* properties.

---