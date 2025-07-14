#### Task type
New feature

#### Goal 
Create a hiking journal page for me to document my hiking trips.

#### Implementation Details

##### Phase 1: set up the page
- create a new route `/hiking-journal` 

##### Phase 2: UI
- UI is designed using mock data and is modular for future CMS integration.
- The following elements are included:
    - The route on a map (Mapbox placeholder, ready for GPX/GeoJSON input in the future)
    - Statistics of the hike, including total distance, time, elevation gain, etc.
    - A photo blog section: a sequence of photos and text blocks, allowing for a narrative/photo-blog style journal. Each entry can be a photo, text, or both, in order.
- The design uses the existing color scheme and is responsive.

##### Data Structure
- TypeScript interfaces are defined for hikes, stats, and blog entries.
- Blog entries support three types: 'photo', 'text', and 'photo-text' for flexible storytelling.
- All data is currently mocked for demonstration and easy future migration to a CMS.


