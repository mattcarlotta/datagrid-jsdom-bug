### DataGrid JSDOM Bug

When rendering DataGrid columns within a jsdom environment, only the first two columns are rendered.

To Reproduce:

- Clone repo: `git clone git@github.com:mattcarlotta/datagrid-jsdom-bug.git`

- Install deps: `yarn`

- Run test suites: `yarn test` and view log output (only the `_id` and `seasonId` columns are rendered)

- Run test coverage: `yarn test:cov` and view the output (`coverage/lcov-report/index.html`) (notice how coverage of `components/Layout/ViewEvents/Columns` is at 16.67%)

- Change the order of the columns by moving the [eventDate column](src/components/Layout/ViewEvents/Columns/index.tsx#L37-L48) to the first index within the columns array.

- Re-run test coverage: `yarn test:cov` and view the output (`coverage/lcov-report/index.html`) (coverage changes from 16.67% to 33.33%)
