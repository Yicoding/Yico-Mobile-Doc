import { createUseStyles } from 'react-jss';

const TitleBox = createUseStyles({
  box: {
    color: '#323232',
    fontSize: '15px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    '& i': {
      marginRight: '10px',
      width: '5px',
      height: '12px',
      background: '#f54d50',
      borderRadius: '5px',
      position: 'relative',
      bottom: '1px'
    },
    '& p': {
      margin: 0
    }
  }
});

export default TitleBox;
