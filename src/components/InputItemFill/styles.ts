/**
 * 
 */
import { createUseStyles } from 'react-jss';

const InputItemBox = createUseStyles({
  box: {
    '& .am-list-item': {
      '& .am-input-label': {
        color: '#323233',
        fontSize: '15px'
      },
      '& .am-input-control': {
        '& input': {
          fontSize: '15px'
        }
      }
    }
  }
});

export default InputItemBox;
