import PropTypes from 'prop-types';

export const gifImagePropTypes = PropTypes.shape({
    url: PropTypes.string,
    // and so on...
});

export const gifImagesPropTypes = PropTypes.shape({
	fixed_height_still: gifImagePropTypes,
	// and so on...
});

export const gifEntityPropTypes = PropTypes.shape({
	title: PropTypes.string,
	// and so on...
});