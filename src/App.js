import React from 'react';
import { Box } from 'grid-styled';
import Heading from './components/Heading';
import theme from './theme';

const App = () => (
  <Box
    py={theme.space[4]}
    px={theme.space[1]}
    width={['100%', '75%']}
    m='0 auto'
  >
    <Heading pb={theme.space[1]}>
      👋 hey i'm sara, a software developer originally from boston now living in
      the OG portland (maine). before software, i was a technology educator to
      kids aged 13-24 and before that i was an award winning filmmaker.{' '}
    </Heading>
    <Heading pb={theme.space[1]}>
      i'm currently one of the maintainers of{' '}
      <a href='https://github.com/react-boilerplate'>react-boilerplate</a> and
      enjoy contributing to open source software. aside from code, i also love
      building semi-useless electronics.
    </Heading>
    <Heading pb={theme.space[1]}>
      when i'm afk, i'm usually outside-- skiing, kayaking, biking, camping,
      playing hockey, or exploring the woods with my dog.
    </Heading>
    <Heading pb={theme.space[2]}>
      you can check out some of my code{' '}
      <a href='https://github.com/gretzky'>on github</a> and if you're ok with
      shameless self-expression then you can follow me
      <a href='https://github.com/farasederico'> on twitter</a>. feeling old
      fashioned? <a href='mailto:yo@sarafeder.co'>email me</a>.
    </Heading>
    <Heading.h6 color={theme.colors.lightgrey}>
      (eventually this will be a real site)
    </Heading.h6>
  </Box>
)

export default App
