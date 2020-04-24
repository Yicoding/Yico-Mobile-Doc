import { createUseStyles } from 'react-jss';

const mobileHeader = require('../../assets/images/mobile-header.png');

const useStyles = createUseStyles({
  page: {
    width: '375px',
    height: '667px',
    background: '#fff',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 3px 5px 0 #ccc',
    '& .header': {
      width: '100%',
      boxSizing: 'border-box',
      background: 'linear-gradient(rgba(55,55,55,.98),#545456)',
      '& .status-bar': {
        height: '10px',
        backgroundImage: `url(${mobileHeader})`,
        backgroundSize: '100% 100%',
        margin: '5px 10px',
      },
      '& .status-name': {
        textAlign: 'center',
        height: '44px',
        lineHeight: '44px',
        color: '#fff',
        fontSize: '17px',
      },
    },
    '& .content': {
      flex: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      overflowScrolling: 'touch',
    },
  },
});

export default useStyles;
