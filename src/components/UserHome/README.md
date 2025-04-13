# Enhanced Explore Section

This directory contains components to enhance the explore section with 50+ additional posts, similar to Instagram's explore feature.

## Overview

We've created three files:

1. `ExplorePosts.jsx` - Contains the first set of additional explore posts (14 posts)
2. `MoreExplorePosts.jsx` - Contains the second set of additional explore posts (18 posts)
3. `ExploreSection.jsx` - A component that combines all posts for rendering

## How to Use

### Option 1: Replace the Explore Section

In `UserHomePageNew.jsx`, replace the explore section code with:

```jsx
{activeView === 'explore' && <ExploreSection 
  explorePosts={explorePosts} 
  exploreCategories={exploreCategories} 
  primaryColor={primaryColor}
  setViewingPost={setViewingPost}
/>}
```

Don't forget to import the component at the top:

```jsx
import ExploreSection from './UserHome/ExploreSection';
```

### Option 2: Modify Existing Code

If you prefer to keep the current structure, you can simply add the additional posts to the existing `explorePosts` array:

```jsx
import additionalExplorePosts from './UserHome/ExplorePosts';
import moreExplorePosts from './UserHome/MoreExplorePosts';

// Inside your component
const allExplorePosts = [...explorePosts, ...additionalExplorePosts, ...moreExplorePosts];

// Then use allExplorePosts instead of explorePosts in your render function
```

## Post Types

The additional posts include various types:

- Image posts
- Video posts
- Gallery posts (multiple images)
- Audio posts
- Short-form video posts
- Text/note posts

Each post has rich metadata including user information, engagement stats, and appropriate media references. 