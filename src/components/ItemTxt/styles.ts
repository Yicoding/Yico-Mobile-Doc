/**
 * 
 */
import { createUseStyles } from 'react-jss';

const ItemTxtBox = createUseStyles({
  box: {
    display: 'flex',
    padding: '7px 15px',
    fontSize: '15px',
    '& > span': {
      color: '#7d7d80',
      whiteSpace: 'nowrap',
      marginRight: '20px'
    },
    '& > div': {
      wordBreak: 'break-all',
      flex: 1,
      color: '#323232',
      textAlign: 'right'
    }
  }
});

export default ItemTxtBox;
