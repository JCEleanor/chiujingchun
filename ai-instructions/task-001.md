#### Task type
New feature

#### Goal
Pull post data from https://api.hackmd.io/v1/ and display all the posts in `src/app/components/JournalSection.tsx`.

#### Implementation Details

##### Phase 0 
- create a env file that contains my api key `test-123`

##### Phase 1
call api https://api.hackmd.io/v1/notes with Bearer token `test-123`. It should return a list of posts like the offical [doc](https://hackmd.io/@hackmd-api/developer-portal/https%3A%2F%2Fapi.hackmd.io%2Fv1%2Fdocs?utm_source=preview-mode&utm_medium=rec) suggests

##### Phase 2
- display all the posts in `JournalSection.tsx`. In this phase, you may use some creative way to display the posts. Make sure to include the below information in the post:
  - title
  - createdAt
  - author name
  - tags
