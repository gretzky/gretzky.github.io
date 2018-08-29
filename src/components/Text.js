import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  fontSize,
  space,
  color,
  responsiveStyle,
  fontWeight,
  lineHeight
} from 'styled-system';
import theme from '../theme';

export const caps = props =>
  props.caps
    ? {
      textTransform: 'uppercase'
    }
    : null

const align = responsiveStyle('text-align', 'align')

const Text = styled.div`
  ${fontSize} ${space} ${color} ${caps} ${align} ${fontWeight} ${lineHeight};
`

Text.displayName = 'Text';

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Text.propTypes = {
  fontSize: numberStringOrArray,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  caps: PropTypes.bool,
  fontWeight: numberStringOrArray,
  lineHeight: numberStringOrArray,
  color: PropTypes.string,
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray
}

Text.defaultProps = {
  theme: theme
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.p.defaultProps = {
  fontSize: [2, 3],
  lineHeight: 4,
  pb: 1,
  fontWeight: 400
}

export default Text
