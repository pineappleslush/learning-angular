# A Primer on Structural Directives

Structural directives can modify the DOM's structure (HTML layout) by adding, removing, or manipulating elements. 
Just like other directives, you apply structural directives onto a host element, most often prefixed by an asterisk *. 
Where they differ is that they do not require brackets or parentheses.

```html
<div *ngIf="robot" class="name">{{robot.name}}</div>
```


[Here's more info](whats-with-the-asterisk) about what that asterisk `*` really does.


## Microsyntax

Angular's microsyntax parser lets you configure directives with a friendly string, which will then translate it into attributes on the `<ng-template>`.

- The `let` keyword is what lets you reference the template input variable you defined within the template. 
  The parser translates `let robot`, `let i`, and `let odd` into variables named `let-hero`, `let-i`, and `let-odd`.
- The directive is title-cased and prefixed onto the attribute name. 
  The `ngFor` example has input properties, `of` and `trackBy`, which are then parsed into `ngForOf` and `ngForTrackBy`. 
  The directive now knows that the list to loop through is `robots` and the track-by function is `trackById`.
- While `ngFor` loops through the list, it sets and resets properties of its own context object. 
  Some of those properties include `index`, `odd`, and a special property called `$implicit`.
- Angular sets the `let-i` and `let-odd` variables to the current value of the context's `index` and `odd` properties.
- A context property for `let-hero` wasn't specified, but its intended source is implicit. 
  Angular knows to set `let-hero` to the value of the context's `$implicit` property, which is what `NgFor` has initialized with the current iteration of robot.
- The `NgForOf` directive implements `NgFor`. 
  You can view addition directive properties and context properties in the [NgForOf API reference](angular.io/api/common/NgForOf(opens in a new tab).


## Create your own structural directive

In order to write your own structural directives, you'll need to know about the microsyntax constraints, grammar, and translation.

### Constraints

The following requirements must be met:
- It must be known ahead of time in order for the IDE to parse it without knowledge of the underlying semantics of the directive or what directives are present.
- It must translate to key-value attributes in the DOM.

### Grammar

Use the following grammar:
```
*:prefix="( :let | :expression ) (';' | ',')? ( :let | :as | :keyExp )*"
```

Here's what each portion of the microsyntax grammar represents:

  |  
--|--
`prefix` | HTML attribute key
`key` | HTML attribute key
`local` | local variable name used in the template
`export` | value exported by the directive under a given name
`expression` | standard Angular expression

  |
--|
`keyExp = :key ":"? :expression ("as" :local)? ";"?` |
`let = "let" :local "=" :export ";"?` |
`as = :export "as" :local ";"?` |

#### Translation

Microsyntax is translated to Angular's normal binding syntax:

Microsyntax | Translation
----------- | -----------
`*ngFor="let item of [1,2,3]"` | `<ng-template ngFor let-item [ngForOf]="[1,2,3]">`
`*ngFor="let item of [1,2,3] as items; trackBy: myTrack; index as i"` | `<ng-template ngFor let-item [ngForOf]="[1,2,3]" let-items="ngForOf" [ngForTrackBy]="myTrack" let-i="index">`
`*ngIf="exp"` | `<ng-template [ngIf]="exp">`
`*ngIf="exp as value"` | `<ng-template [ngIf]="exp" let-value="ngIf">`

You can view the actual source code for these directives here:
- [`NgIf`](https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_if.ts)
- [`NgForOf`](https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_for_of.ts)


## Template input variable

There's all this talk about template input variables, but what are they really? 
They are variables whose values you can reference within a single instance of the template. 
The keyword `let` prepends such variables such as `robot`, `i`, and `odd`.

The `let` keyword limits the scope of your template input variable to a single instance of the repeated template. 
That means you can use the same variable name again in other structural directives.

A template *input* variable is different from a template *reference* variable. 
They are different semantically and syntactically. 

Template *Input* Variable | Template *Reference* Variable
------------------------- | -----------------------------
Declared using the `let` keyword (`let hero`) | Declared by prefixing the variable name with `#` (`#var`)
The scope of this variable is limited to a single instance of the repeated template. | Can be accessed anywhere in the entire template.
The same variable name can be used in the definition of other structural directives. | Refers to its attached element, component, or directive.

Their variable names have their own namespaces. 
`robot` from `let robot` is not the same variable as `robot` declared as `#robot`.


## There's only room for one

There can only be one structural directive applied per host element. 
They have the ability to apply very complex changes to the host element and its descendants. 
If you attach another structural directive to perform its own set of complex changes on that same host element, it can cause for mass confusion. 
There's no way to distinguish which directive takes precedence or should run first. 
For this reason, to keep things simple, you can only apply one structural directive to an element.


Here's an inside look into the [`NgSwitch` directives](ng-switch).


## Use the asterisk `*` syntax

Angular provides an easy way to apply structural directives, so we might as well use it.
The `<ng-container>` should only be used when there is no single element to host the directive.
It is still important to know and understand what an `<ng-template>` is and does, especially when you create your own structural directives.
