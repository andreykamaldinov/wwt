# WinWinTravel

## Task

### What needs to be done

The API provides filter data located in the file `filterData.json`

Based on this data, create a filter modal window — [Figma design](https://www.figma.com/file/cnBVURUTntc8peGEfKexoY/WWT-Test-task?type=design&node-id=0%3A1&mode=design&t=GZ0EY5BJ6KB7iy02-1)

The design should closely follow the layout. If indentations differ slightly in the layout — make them consistent across the modal

The modal window should be opened via a button on the homepage

When opening the filter modal, if the user has already selected some data previously, it should be pre-filled in the modal

The user should be able to modify the data and click the `Apply` button. This action should open a confirmation dialog

- If the user confirms the changes — the selected data should be saved to the global state (`App`)
- If the user cancels — keep the previously saved data without applying the new changes

Display the current selected filter data on the homepage in JSON format (no design required, just for debug/visibility)

The project must include a GitHub Action that automatically checks the code

Types:

- `FilterItem` — input data format from API / `filterData.json`
- `SearchRequestFilter` — output data format to be displayed on the homepage

### What technologies to use

Required:

- Git with `Conventional Commits`
- Semantic HTML layout
- React
- react-query
- tailwindcss
- i18n
- zustand

You may use other technologies already installed in the project, or install additional ones if needed

If you install any new technology, describe why you added it and what it’s used for in some file

### How to submit the task

- Create a **public** copy(not fork) of the repository, preserving the full commit history
- Complete the task in this private repository
- Inform HR that the task is complete and ready for review

Also, please let us know upfront whether you would like detailed feedback (what exactly was wrong and a score), or if a simple acceptance or rejection response is sufficient

## How to set up the project

All scripts described below (except for _**dependency installation**_) can be used with pnpm instead of npm. They work the same way

### Installing dependencies

After downloading the project's source code, you need to install the dependencies. To do this, you can use the following command:

```shell
pnpm i
# or
pnpm install
```

### Run

To start the project for development, use the script `dev`:

```shell
npm run dev
```

This script automatically refreshes the page after you make changes in the code and works quickly with `vite`.

### Build

To compile the project, use the script `build`:

```shell
npm run build
```

After executing this script, you will have a folder `dist` in which the project's output files will be located, which can be uploaded to hosting.

Also, to see how the compiled version of the program looks, you can use the script `preview`.

```shell
npm run preview
```

## Solution overview

No new dependencies were added — everything is built with the technologies already installed in the project.

### Structure

Code that belongs to one part of the UI lives next to it: component, hook, types and translations.

```
src
├── i18n.ts                         # merges translations of all sections and initialises i18next
├── shared                          # reusable building blocks
│   ├── api                         # API types and the filter items request (react-query)
│   ├── button / checkbox / divider / modal
│   ├── disclosure / class-names    # small hooks and utils
│   ├── language.enum.ts            # supported languages (English)
│   ├── translation.enum.ts         # i18n namespaces
│   └── shared-i18n.ts
├── store
│   └── search-filter               # global zustand store with the applied SearchRequestFilter
└── pages
    └── home                        # homepage: open button + applied filter as JSON
        ├── home-i18n.ts
        └── filter-modal            # filter modal and everything it is built from
            ├── filter-modal.hook.ts, filter-draft.hook.ts
            ├── filter-section-list / filter-section / filter-option
            └── confirm-apply-modal
```

### Conventions

- kebab-case folders and files; suffixes describe the role: `*.hook.ts`, `*.types.ts`, `*.enum.ts`, `*.utils.ts`, `*.store.ts`, `*.service.ts`
- Translations live in an `i18n/en.json` folder next to the component; section aggregators (`home-i18n.ts`, `shared-i18n.ts`) map them to `TranslationsNameSpaces`, keys are `UPPER_SNAKE_CASE`
- Path aliases instead of relative imports (`tsconfig.json` + `vite.config.ts`): `@api`, `@temp`, `@shared`, `@store`, `@home`, `@filter-modal`
- Components are `FC<Props>` (`FC<PropsWithChildren<Props>>` for children) with props in `*.types.ts`; logic lives in hooks
- Colors, typography and effects are Figma styles mapped to Tailwind tokens (`grey-500`, `brand-200`, `primary-100`, `text-title`, `shadow-popup`, ...)

### Flow

1. `Open filter` mounts `FilterModal`, its draft is initialised with the filter from the global store (pre-fill)
2. `Apply` opens the confirmation modal
3. `Apply new filter` saves the draft to the store, `Use old filter` closes the modal and keeps the previous filter, `×` returns to editing

### Scripts

- `pnpm test:run` — run unit and integration tests once (`pnpm test` — watch mode)

The GitHub Action (`.github/workflows/pipeline.yml`) checks formatting, lint, tests and the production build on every push and pull request.
