# Dependency Injection

You can get data from a specific source and store the list in-memory, explicitly importing where that source comes from.

Here's a scenario [without dependency injection](src/app/dependency-injection/without-dependency-injection) is not in use.

Alternatively, you can inject a service, avoiding the need to create a `new` instance of it.
Inject it by passing the dependency type as a parameter into a constructor.

Here's a scenario [with dependency injection](../directives/structural-directives/whats-with-the-asterisk).

## Optional dependencies
Make dependencies optional to a component or service by using the `@Optional()` annotation.

If optional, account for a null value.
`logger` can be null if a `Logger` is not registered anywhere.
```ts
import { Optional } from '@angular/core';

// ...

constructor(@Optional() private logger?: Logger) {
    if (this.logger) {
        this.logger.log(someMessage);
    }
}
```

## Parameters can be decorated, too
`@Inject()` and `@Optional` can be applied to parameters.
