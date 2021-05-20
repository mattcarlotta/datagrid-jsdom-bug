### DataGrid Pagination Bug

Prior to v4.0.0-alpha.29 the `page` parameter from the `onPageChange` function would increment/decrement when a pagination button is clicked. Instead, the page stays a 0.

To reproduce:

- Clone repo: `git clone --single-branch --branch pagination git@github.com:mattcarlotta/datagrid-jsdom-bug.git`

- Install deps: `yarn`

- Run dev: `yarn dev` and click on the "Next page" pagination button.
