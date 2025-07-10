#### Task type
New feature

#### Goal
When user click the post in `JournalSection.tsx`, it should open a new page that shows the post content.

#### Third party API specification
- https://hackmd.io/@hackmd-api/developer-portal/https%3A%2F%2Fapi.hackmd.io%2Fv1%2Fdocs?utm_source=preview-mode&utm_medium=rec

#### Implementation Details

##### Phase 1
- create a new route `/post/hackmd/[noteId]` that shows the post content.
- create a new component `PostPage.tsx` that shows the post content.

##### Phase 2
- inside `PostPage.tsx`, call api https://api.hackmd.io/v1/notes/{noteId} with the same Bearer token as in `JournalSection.tsx`. It should return the post content in markdown format.

##### Phase 3
- format the returned markdown content to html. You may use external library to do this.
- for styling, you may take creative liberty for now, but please respect the color scheme (light and dark mode)

##### constrains
- please follow the same coding style as in `JournalSection.tsx`
- when defining interfaces, please use typescript utility types to avoid code duplication
- use server actions to prevent leaking api key to client side

