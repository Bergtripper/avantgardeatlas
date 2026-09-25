import React from 'react';
import { MovementId } from '../types/atlas';
import { ALL_OBJECTS } from '../data/objects';
import { ObjectsArchiveSection } from '../components/ObjectsArchiveSection';

interface ObjectsRouteSectionProps {
  onSelectMovement: (id: MovementId) => void;
}

export default function ObjectsRouteSection({ onSelectMovement }: ObjectsRouteSectionProps) {
  return (
    <ObjectsArchiveSection
      objects={ALL_OBJECTS}
      onSelectMovement={onSelectMovement}
    />
  );
}
