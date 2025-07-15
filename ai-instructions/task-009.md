# Task 009: fix journal section page transition

## Overview / Goal
When a user clicks a post, setLoadingPostId(noteId) is called, and then router.push(...) is called immediately after, so the loading/transition does not show. 

## Requirements
- [List the key requirements, constraints, or preferences for the feature.]
- fix the page transition when users click on a journal post
- create a new custom Link component using next/link. Please make sure it can be reused in other places
- use framer motion for the page transition

## Steps / Instructions
1. Install framer-motion if not already present.
2. Create a reusable Link component (e.g., components/AnimatedLink.tsx) that wraps next/link and adds framer-motion animation.
3. Update JournalSection to use AnimatedLink for each post.
4. Use setLoadingPostId and framer-motion to animate the transition when a post is clicked.
5. Test the transition and ensure the Link is reusable.

## References / Resources
- https://www.npmjs.com/package/framer-motion
- @journal-section/index.tsx


## Change Log / Revision History
- created task
- decided to remove all onClick and loading state logic from journal post links and use only <PageTransitionLink> for navigation and animation.
- clarified to implement true page transition animation at the layout or page level using framer-motion's AnimatePresence and motion.div, instead of animating the link itself.
- implemented PageTransitionLink and used it in JournalSection, then realized true page transitions require animation at the page/layout level, not the link.
- moved AnimatePresence/motion.div logic to a new PageTransitionLayout client component and used it at the page level for both the journal list and post pages.
- removed PageTransitionLink and reverted to standard Next.js Link for posts, with all page transition animation handled by framer-motion at the page level.
 