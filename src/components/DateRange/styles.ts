import { createUseStyles } from 'react-jss';

const DateBox = createUseStyles({
  box: {
    paddingTop: '12px',
    display: 'flex',
    fontSize: '14px',
    position: 'relative',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '1px',
      background: '#ddd',
      transform: 'scaleY(0.5)'
    },
    '& .select-item': {
      flex: 1.5,
      '& > p': {
        whiteSpace: 'nowrap',
        color: '#969799',
        fontSize: '10px'
      },
      '& .am-list-item': {
        paddingLeft: 0,
        '& .am-list-line': {
          display: 'flex',
          paddingRight: '10px',
          '& .am-list-extra': {
            flex: 1,
            color: '#232323',
            fontSize: '12px',
            textAlign: 'left'
          }
        }
      }
    },
    '& .time-forever': {
      flex: 1,
      position: 'relative',
      display: 'flex',
      '& > div': {
        minHeight: '44px',
        alignSelf: 'flex-end',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: '10px',
        '& i': {
          width: '15px',
          height: '15px',
          border: '1px solid #999',
          borderRadius: '50%',
          marginLeft: '10px'
        },
        '& span': {
          fontSize: '12px'
        }
      },
      '&.time-forever-left': {
        '& > div': {
          justifyContent: 'flex-start',
          '& img': {
            width: '16px',
            height: '16px',
            marginLeft: '10px'
          }
        }
      }
    }
  }
});

export default DateBox;
