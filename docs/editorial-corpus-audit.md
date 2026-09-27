# Editorial Corpus Audit

Snapshot: 2026-09-27

## Publication-critical status

- Movement narrative provenance: 48/48 core claims sourced (100%)
  - summary
  - coreIdeas
  - historicalContext
- Story narrative provenance: 19/19 step text claims sourced (100%)
- People completeness: no missing date, birth-place, biography, movement or discipline fields reported by the validator
- TypeScript check: passing
- Data integrity check: passing
- Production build: passing

## Specialist movement-note backlog

The atlas intentionally keeps architecture, graphic-design and industry notes as a secondary editorial layer. These fields remain partially sourced and can be completed incrementally without blocking publication.

Current total movement claim provenance: 64/96 fields (67%).

Remaining fields:

- bauhaus — graphicDesignNotes
- de-stijl — architectureNotes, industryRelationship
- constructivism — graphicDesignNotes, industryRelationship
- suprematism — architectureNotes, graphicDesignNotes
- futurism — architectureNotes, graphicDesignNotes
- dada — architectureNotes, graphicDesignNotes
- international-style — graphicDesignNotes, industryRelationship
- new-typography — architectureNotes, industryRelationship
- purism — architectureNotes, graphicDesignNotes, industryRelationship
- vienna-secession — graphicDesignNotes, industryRelationship
- cubism — architectureNotes, industryRelationship
- art-nouveau — graphicDesignNotes, industryRelationship
- neue-sachlichkeit — architectureNotes, graphicDesignNotes, industryRelationship
- rationalism — graphicDesignNotes, industryRelationship
- cubo-futurism — architectureNotes, graphicDesignNotes, industryRelationship

## Object provenance backlog

Current object core-claim provenance: 30/76 description/significance fields (39%).

The following objects still need claim-level sourcing for both description and significance:

- obj-wassily-chair
- obj-bauhaus-poster
- obj-rietveld-schroder
- obj-mondrian-broadway
- obj-beat-the-whites
- obj-lengiz-books
- obj-suprematist-composition
- obj-proun-19d
- obj-citta-nuova
- obj-depero-bolted-book
- obj-merzbau
- obj-palais-stoclet
- obj-weissenhofsiedlung
- obj-barcelona-pavilion
- obj-die-neue-typographie-book
- obj-futura-specimen
- obj-purist-still-life
- obj-violin-and-candlestick
- obj-metro-entrances
- obj-frankfurt-kitchen
- obj-asilo-sant-elia
- obj-victory-over-sun
- obj-rodchenko-photo-pioneer

## Audit policy

Structural errors continue to fail CI.

Editorial incompleteness is reported separately as backlog rather than as a technical warning. This avoids conflating incomplete research coverage with broken application state.

The curated ALL_CONNECTIONS graph is not required to mirror every influencesFrom/influencesTo declaration. It is a selected narrative/network layer and is validated for structural integrity on its own.

## Phase I closure criterion

Phase I can be considered publication-ready when:

1. all publication-critical movement narrative claims are sourced;
2. all story narrative text is sourced;
3. people records pass completeness checks;
4. TypeScript, data integrity and production build all pass.

Specialist movement notes and the remaining object provenance are documented follow-up research, not release blockers.
