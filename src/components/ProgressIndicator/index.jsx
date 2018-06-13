import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import bemClassnames from 'react-bem-builder';
import './styles.scss';

const c = bemClassnames('progress-indicator');

const ProgressIndicator = ({ currentStep, steps, isCancelled, cancelledLabel, cancelledMarkerColor, activeMarkerColor, className, ...rest }) => {
  const step = steps[currentStep - 1];
  const markers = steps.map((step, index) => {
    const active = !isCancelled && index < currentStep;
    const style = isCancelled
                    ? { backgroundColor: cancelledMarkerColor }
                    : active
                        ? { backgroundColor: activeMarkerColor }
                        : undefined;
    return <div key={index} className={c('marker', { active })} style={style} />;
  });
  const label = isCancelled
                  ? cancelledLabel
                  : step ? step.label : '';

  return (
    <div {...rest} className={classnames(c(), className)}>
      <div className={c('markers')}>
        {markers}
      </div>
      <div className={c('label')}>
        {label}
      </div>
    </div>
  );
};

ProgressIndicator.defaultProps = {
  currentStep: 1,
  isCancelled: false,
  cancelledLabel: 'Cancelled',
  activeMarkerColor: '#4769DE',
  cancelledMarkerColor: '#FF0000'
};

ProgressIndicator.propTypes = {
  currentStep: (props, propName, componentName) => {
    if (props[propName] !== undefined) {
      const value = props[propName];
      if (typeof value !== 'number') {
        return new Error("Invalid prop `" + propName + "` of type `" + typeof value + "` supplied to `" + componentName + "`, expected `number`.");
      } else if (value > props.steps.length || value < 1) {
        return new Error(propName + ' in ' + componentName + " is out of scope");
      }
    }

    // assume all ok
    return null;
  },
  // ^ current step number 

  steps: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })).isRequired,
  // ^ array of step info

  isCancelled: PropTypes.bool,
  // ^ boolean which indicates cancelled state

  cancelledLabel: PropTypes.string,
  // ^ label for cancelled state

  cancelledMarkerColor: PropTypes.string,
  // ^ background color for markers in cancelled state

  activeMarkerColor: PropTypes.string,
  // ^ background color for active marker

  className: PropTypes.string,
  // ^ additional classes for the component
};

export default ProgressIndicator;
