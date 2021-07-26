# Books

A single page application that displays a list of books:

- Display a paginated book list;
- Filter books;
- Reflect current query parameters in the URL;
- Loading state;
- Debounced search requests;
- Memoized list items;
- Error boundary class component;

## Approach

The solution is a modular self-contained feature. All book-related functionality resides in its dedicated features directory together with it's redux slice, API wrapper, and UI components.

Integration tests are added to assert the UI is updated appropriately across multiple components. A real Redux store instance and mocked API calls are used.

Unit tests are included for atomic components.

## Installation

```
$ npm install
```

## Run

```
$ npm start
```

## Tests

```
$ npm test
```
