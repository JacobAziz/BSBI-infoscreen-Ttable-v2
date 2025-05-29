import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    sessions: {
      morning: {
        bg: '#4a7fcb', // Bright blue for morning (from image)
        text: 'white',
      },
      noon: {
        bg: '#F7B32B', // Warm yellow for noon
        text: 'black',
      },
      afternoon: {
        bg: '#1A365D', // Darker blue for afternoon
        text: 'white',
      },
    },
  },
  fonts: {
    heading: 'system-ui, sans-serif',
    body: 'system-ui, sans-serif',
  },
  components: {
    Table: {
      variants: {
        simple: {
          th: {
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 'wider',
            padding: '16px',
            borderBottom: '2px solid',
            borderColor: 'gray.200',
          },
          td: {
            padding: '16px',
            borderBottom: '1px solid',
            borderColor: 'gray.100',
          },
        },
      },
    },
  },
});

export default theme; 