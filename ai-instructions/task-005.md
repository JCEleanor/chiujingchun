#### Task type
Refactor

#### Gaol 
Refactor @src/app/lib/hackmd-api.ts to improve code readability and maintainability.

#### Implementation Details

##### Phase 1: remove repetitive logic
- if `isUseMockData` is true, set api endpoint to `http://localhost:3000/api/mock` otherwise set it to `https://hackmd.io/api/v1`
- the rest of the logic should remain the same for both mock and production data

##### Phase 2: refactor `fetchHackMD` function
- refactor the function to accept one arguments like so: 
```
{endpoint: string, cacheKey: string, options:{}}
```

