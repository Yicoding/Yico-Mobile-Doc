import { createUseStyles } from 'react-jss';

const ImgBox = createUseStyles({
  boxSingle: {
    padding: '0 20px',
    height: '130px'
  },
  boxDouble: {
    padding: '0 20px',
    display: 'flex',
    '& > div': {
      flex: 1,
      height: '90px',
      '&:first-of-type': {
        marginRight: '20px'
      }
    }
  }
});

export default ImgBox;
