import * as React from 'react';
import { Label } from '@patternfly/react-core';
import {
  GreenCheckCircleIcon,
  YellowExclamationTriangleIcon,
  GrayUnknownIcon,
} from '@console/shared';

interface GitOpsRenderStatusLabelProps {
  status: string;
}

const GitOpsRenderStatusLabel: React.FC<GitOpsRenderStatusLabelProps> = ({ status }) => {
  switch (status) {
    case 'Synced':
      return (
        <Label icon={<GreenCheckCircleIcon />} isTruncated>
          Synced
        </Label>
      );
    case 'OutOfSync':
      return (
        <Label icon={<YellowExclamationTriangleIcon />} isTruncated>
          OutOfSync
        </Label>
      );
    case 'Unknown':
      return (
        <Label icon={<GrayUnknownIcon />} isTruncated>
          Unknown
        </Label>
      );
    default:
      return null;
  }
};

export default GitOpsRenderStatusLabel;
