import React from 'react';
import { ArchivalObject, MovementId } from '../types/atlas';
import { ALL_OBJECTS } from '../data/objects';
import { ObjectsArchiveSection } from '../components/ObjectsArchiveSection';

interface ObjectsRouteSectionProps {
  onSelectMovement: (id: MovementId) => void;
  selectedYear: number;
  focusedObjectId?: string | null;
  onExploreGlobalObject: (object: ArchivalObject) => void;
}

export default function ObjectsRouteSection({
  onSelectMovement,
  selectedYear,
  focusedObjectId,
  onExploreGlobalObject,
}: ObjectsRouteSectionProps) {
  return (
    <ObjectsArchiveSection
      objects={ALL_OBJECTS}
      onSelectMovement={onSelectMovement}
      selectedYear={selectedYear}
      focusedObjectId={focusedObjectId}
      onExploreGlobalObject={onExploreGlobalObject}
    />
  );
}
