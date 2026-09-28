# Cross-navigation QA

J.2G establishes a navigation invariant for the Atlas:

> A cross-entity link must land on the specific target record in a visible, focused state — not merely on the correct top-level section.

## Verified routes

### Movement
- Movement → Person
- Movement → Object
- Movement → Movement
- Movement → Global Map

### People
- Person → Movement
- Person → Object
- Person → Global Map

### Objects
- Object → Person, when the creator resolves to the People registry
- Object → Movement
- Object → Global Map

### Stories
- Story step → Movement
- Global Map → Story + exact step

### Geography
- City → Movement
- City → Global Map
- Global Map → Europe City

## Target-focus behavior

Cross-section navigation now requires the destination view to expose a stable focus target.

- People: `person-card-{personId}`
- Stories: `story-active-record`
- Geography: `geography-city-detail`
- Objects: the selected object opens directly in the object detail drawer

Each target is brought into the viewport after the destination component mounts and can receive programmatic focus.

## Data integrity

The existing validator already checks:
- movement keyPeople references
- movement keyWorks references
- person primaryMovements references
- object movement references
- story focalMovements references
- place activeMovements references
- movement/person and movement/object cross-registry consistency

## Editorial rule for future PRs

When adding a new entity relationship, do not add a text-only label if the target exists in the Atlas.

Prefer:
- `EntityLink` for entity navigation
- a focused destination state
- a visible target record
- a reciprocal route where editorially meaningful
