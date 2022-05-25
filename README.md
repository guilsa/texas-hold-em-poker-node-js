# Learnings

- Improve class control by asserting Error will be thrown. Provides useful coverage without having to care about implementation details.
- TDD with red, green, refactor flow can also be followed up by further with testing of implementation via REPL. `.load` can be used in Node REPL to import entire modules on the fly (example `.load index.js`).
- Node implicitly applies `util.inspect` into `console.log` (as long as 1st argument it's a format string). With `util.inspect`, you can do more fun things. For example, controlling what a complex class can return for its instances by defining their own `[util.inspect.custom](depth, opts, inspect)` function. Useful to mimick **repr** in Python.
