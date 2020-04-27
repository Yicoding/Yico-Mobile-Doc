import { createUseStyles } from 'react-jss';

export const TabContainer = createUseStyles({
  box: {
    position: 'relative',
    overflow: 'hidden',
    '&:after': {
      content: '""',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: '35px',
      background: 'linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff)'
    },
    '& > ul': {
      padding: '0 20px 0 0',
      margin: 0,
      fontSize: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'space-around',
      background: '#fff',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.04)',
      '&.tab-scroll': {
        display: 'block',
        overflow: 'auto',
        overflowScrolling: 'touch',
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        '& > li': {
          padding: '0 15px'
        }
      },
      '& > li': {
        display: 'inline-block',
        fontSize: '14px',
        height: '34px',
        lineHeight: '34px',
        whiteSpace: 'nowrap',
        '&.active': {
          color: '#f54d4f',
          fontSize: '15px',
          fontWeight: 'bold',
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'inline-block',
            width: '25px',
            height: '2px',
            background: '#f54d4f',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)'
          }
        }
      }
    }
  }
});

export default TabContainer;
