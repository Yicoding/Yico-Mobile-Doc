/**
 * 
 */
import { createUseStyles } from 'react-jss';

const ItemBox = createUseStyles({
  box: {
    '& .am-list-item': {
      '& .am-list-line': {
        '& .am-list-content, & .am-list-extra': {
          color: '#323232',
          fontSize: '15px',
        },
        '& .am-list-content': {
          width: '119px',
          marginRight: '5px',
          flex: 'initial'
        },
        '& .am-list-extra': {
          flex: 1,
          textAlign: 'left',
          whiteSpace: 'normal'
        }
      }
    },
    '&.align-start': {
      '& .am-list-item': {
        '& .am-list-line': {
          alignItems: 'flex-start'
        }
      }
    }
  }
});

export default ItemBox;
