/**
 * 
 */
import { createUseStyles } from 'react-jss';

const TextAreaBox = createUseStyles({
  box: {
    '& .am-textarea-label': {
      color: '#323233',
      fontSize: '15px'
    },
    '& .am-textarea-control': {
      '& textarea': {
        fontSize: '15px'
      }
    }
  }
});

export default TextAreaBox;
