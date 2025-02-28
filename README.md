# Start the project

```js
npm install
npm run dev
```

# Running tests

```js
npm run test
```

# Summary

- Architecture & State:
  The app is divided into small, reusable components. The App component holds all state (annotations and active filters) and provides functions for modifying that state. This ensures a clear separation of concerns and makes the code easier to maintain.

- Event Handling & Positioning:
  The Blueprint component uses a container with relative positioning so that annotation flags (which are absolutely positioned) align perfectly with the blueprint image. It listens for click events and calculates coordinates relative to the image.

- Annotation Management:
  Each flag is rendered by the Flag component. Clicking an existing flag cycles its type through a predetermined order, while clicking on a blank area of the blueprint adds a new flag (with the next available label number and “Unconfirmed” as its default type).

- Filtering UI:
  The FilterButtons component offers a clear way to toggle the visibility of annotations by type. An extra button toggles all filters, and its text and style update based on the current filter state.

- Best Practices:
  The solution uses TypeScript for type safety, React hooks for state management, and Tailwind CSS for fast and responsive styling.
