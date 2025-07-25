
import React from 'react';

export interface ConstructionActivity {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  progress: number; // 0-100
  type: string;
  originalData?: any; // Dados originais da atividade
}

export interface ConstructionActivityProps {
  id: string;
  title: string;
  description: string;
  progress: number;
  type: string;
  status: 'pending' | 'in_progress' | 'completed';
  onView?: (id: string) => void;
  onShare?: (id: string) => void;
  onEdit?: () => void;
}

export interface EditActivityModalState {
  isOpen: boolean;
  activityId: string | null;
  activityTitle: string;
}
