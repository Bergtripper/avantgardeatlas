# Visual media architecture

This document defines the media layer used by Avant-Garde Atlas.

## Editorial principle

The Atlas is not a museum collection database. Media exists to support interpretation, orientation, and representative reading.

- Visual DNA diagrams remain original editorial graphics.
- Representative works are selective anchors, not exhaustive catalogues.
- Portraits humanize People records.
- Institutional collection links send users to authoritative holdings for deeper exploration.
- Real images must carry explicit source and rights metadata.

## Media source modes

### hosted
Use only when the project may legally host the image itself, for example public-domain or compatible open-license material.

Required:
- `imageUrl`
- `sourceUrl`
- `rightsStatus`
- `alt`
- `verified: true` only after source and rights review

### external
Use when the authoritative institution remains the image host or when reproduction rights do not permit copying into the Atlas.

Required:
- `sourceUrl`
- rights status
- descriptive metadata

`imageUrl` / `thumbnailUrl` may be used only where the source permits direct display.

### iiif
Preferred when an institution exposes an official IIIF manifest or image service.

Requires at least one:
- `iiifManifestUrl`
- `iiifImageServiceUrl`

## Rights status

Supported statuses:
- public-domain
- cc0
- cc-by
- cc-by-sa
- copyrighted-permission
- copyrighted-link-only
- unknown-review-required

An asset marked `unknown-review-required` must never be `verified: true`.

## Entity media

### Movement
`movement.media`
- `representativeWorks`: typically 2–4 selective visual anchors
- `externalCollections`: museum/archive collection pages

### Person
`person.media`
- `portrait`: normally one authoritative portrait
- `externalCollections`: artist/person collection pages where useful

### Object
`object.media`
- `image`: the authoritative image record for the selected object
- `externalCollections`: the holding institution or relevant archive

## Fallback behaviour

If no verified real image is available, the Atlas continues to use the existing editorial vector plate / Visual DNA treatment.

Fallback graphics must not be presented as reproductions of the historical work.

## Minimum credit line

Where applicable, display:

Creator · Work · Year · Institution · Rights / Source
