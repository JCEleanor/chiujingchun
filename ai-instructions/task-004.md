#### Task type
Fix

#### Description 
Use mock data in local environment to cut down usage on HackMD API.

#### Goal
When I run `npm run dev:mock`, it should call a mock api endpoint, `localhost:3000/api/mock/notes`, for exmaple, to display the post content. On the other hand, when I run `npm run dev`, it should use the real, production data from HackMD API.

#### Mock data
- In @src/app/lib/mock-data.ts, I have created mock data `HackMDNote[]` and `HackMDNote` for Journal list and individual post page. 

#### Implementation Details

##### Phase 0: Environment Setup
- Add a new script dev:mock to package.json
- Create environment variable to distinguish between mock and real API calls

##### Phase 1: Create Mock API Endpoints
- Create src/app/api/mock/notes/route.ts - returns mock notes list
- Create src/app/api/mock/notes/[id]/route.ts - returns individual mock note
- These endpoints will return the mock data from @src/app/lib/mock-data.ts

##### Phase 2: Update API Layer
- Modify the `fetchHackMD` function in @src/app/lib/hackmd-api.ts to check environment 
- When USE_MOCK_DATA=true, call local mock endpoints instead of HackMD API
- I want to be able to see loading feature when USE_MOCK_DATA=true. It could be a simple async sleep function using `await new Promise(resolve => setTimeout(resolve, 1000));`
- Keep existing HackMD API calls for production
