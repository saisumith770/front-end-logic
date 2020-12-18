# Front End Logic

This is the core for my front end, built along with the [pulse-framework](https://github.com/pulse-framework/pulse). It handles all the logic from state management to API requests and populates that data to the react components.

## Structure
- api.ts contains the setup for the API requests.
- All custom errors are present in the Errors folder. They extend the JS Error class
- Controllers contain the sub-sections of that are a collection of states, actions, computed functions etc.
- States are setup for each controller that allow the components to re-render.
- Collections are holding similar type data sets like user info.
