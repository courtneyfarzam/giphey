import PropTypes from 'prop-types';

export const storePropType = PropTypes.shape({
	dispatch: PropTypes.func.isRequired,
	getState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
    replaceReducer: PropTypes.func.isRequired,
});