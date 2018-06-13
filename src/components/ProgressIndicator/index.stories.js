import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text, boolean, object } from '@storybook/addon-knobs/react';
import ProgressIndicator from './index';

const steps = [
  { key: 'account-creation', label: 'Account Creation' },
  { key: 'program-preferences', label: 'Program Preferences' },
  { key: 'pairing', label: 'Pairing' },
  { key: 'schedule-first-session', label: 'Schedule first session' },
  { key: 'complete-first-session', label: 'Complete first session' }
];

storiesOf('Progress Indicator', module)
  .add('Default', () =>
    <ProgressIndicator
      currentStep={number('currentStep', 2)}
      steps={object('steps', steps)}
      isCancelled={boolean('isCancelled', ProgressIndicator.defaultProps.isCancelled)}
      cancelledLabel={text('cancelledLabel', ProgressIndicator.defaultProps.cancelledLabel)}
      cancelledMarkerColor={text('cancelledMarkerColor', ProgressIndicator.defaultProps.cancelledMarkerColor)}
      activeMarkerColor={text('activeMarkerColor', ProgressIndicator.defaultProps.activeMarkerColor)}
    />
  );
