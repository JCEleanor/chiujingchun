# Task 008: refactor @journal-section

## Overview / Goal
Currently @journal-section/index.tsx is doing too many things.
Refactor to improve maintainability.

## Requirements
 - separate api logic and component
 - extract loading, error, title, tags, date components to seperate files
 - extract the same layout structure to avoid repeating code

## Steps / Instructions
1. Move API/data fetching logic to @journal-section/api.ts
2. Create Loading.tsx, Error.tsx, Title.tsx, Tags.tsx, Date.tsx in @journal-section/components/
3. Extract shared layout to a reusable component or hook if needed
4. Update index.tsx to use the new components and structure
5. Test to ensure functionality is unchanged

## Acceptance Criteria
Functionality should be the same as before.

## References / Resources
- @journal-section/index.tsx
- @journal-section/utils/index.ts

## Change Log / Revision History
- 2025-07-15 - created task
- 2025-07-15 - updated steps for actionable refactor