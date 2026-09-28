import React from 'react';
import { ArchivalObject, MovementId } from '../types/atlas';
import { ALL_OBJECTS } from '../data/objects';
import { ObjectsArchiveSection } from '../components/ObjectsArchiveSection';

interface ObjectsRouteSectionProps {
  onSelectMovement: (id: MovementId) => void;
  onSelectPerson: (id: string) => void;
  selectedYear: number;
  focusedObjectId?: string | null;
  onExploreGlobalObject: (object: ArchivalObject) => void;
}

export default function ObjectsRouteSection({
  onSelectMovement,
  onSelectPerson,
  selectedYear,
  focusedObjectId,
  onExploreGlobalObject,
}: ObjectsRouteSectionProps) {
  return (
    <ObjectsArchiveSection
      objects={ALL_OBJECTS}
      onSelectMovement={onSelectMovement}
      onSelectPerson={onSelectPerson}
      selectedYear={selectedYear}
      focusedObjectId={focusedObjectId}
      onExploreGlobalObject={onExploreGlobalObject}
    />
  );
}
