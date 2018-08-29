import Text from './Text';
import theme from '../theme';

const Heading = Text.withComponent('h1')

Heading.displayName = 'Heading';

Heading.defaultProps = {
  fontWeight: 700,
  fontSize: [10, 11],
  m: '0',
  lineHeight: 1,
  theme: theme
}

Heading.h1 = Heading.withComponent('h1')
Heading.h1.defaultProps = {
  fontWeight: 600,
  fontSize: [8, 9],
  lineHeight: 1,
  m: '0'
}

Heading.h2 = Heading.withComponent('h2')
Heading.h2.defaultProps = {
  fontWeight: 300,
  fontSize: [6, 7],
  lineHeight: 2,
  m: '0'
}

Heading.h3 = Heading.withComponent('h3')
Heading.h3.defaultProps = {
  fontWeight: 600,
  fontSize: [6, 7],
  m: '0'
}

Heading.h4 = Heading.withComponent('h4')
Heading.h4.defaultProps = {
  fontWeight: 300,
  fontSize: [4, 5],
  lineHeight: 2,
  m: '0'
}

Heading.h6 = Heading.withComponent('h6')
Heading.h6.defaultProps = {
  fontWeight: 700,
  caps: true,
  fontSize: [0, 1],
  lineHeight: 3,
  m: '0'
}

export default Heading
