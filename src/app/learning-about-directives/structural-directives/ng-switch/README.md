# The NgSwitch directives

Implementing a `switch` statement in Angular involves a group of directives: 
- `NgSwitch`
- `NgSwitchCase`
- `NgSwitchDefault`

Code example [here](ng-switch.component.html).


## How it works

The `NgSwitch` directive is assigned to`robot.status`, which will be used to determine which of the switch cases below it matches.
It is considered an *attribute* directive because it controls the behavior of the other switch directives that follow.

`NgSwitchCase` and `NgSwitchDefault` are *structural* directives. These will need to be attached to elements with the asterisk `*` prefixed.
If an `NgSwitchCase` matches the switch value, it will display the host element. If nothing matches and an `NgSwitchDefault` is defined, it will display its host element.

The host element refers to the element to which you apply a directive on. `<hungry-robot>` is the host element for the "hungry" `*ngSwitchCase`.
