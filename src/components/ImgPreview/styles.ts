import { createUseStyles } from 'react-jss';


const Container = createUseStyles({
  pickerImgBox: {
    padding: '3px',
    width: '80px',
    height: '80px',
    border: '1px dashed #d2d2d2',
    borderRadius: '5px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    '& .picker-img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    },
    '& .picker-empty': {
      width: '100%',
      height: '100%',
      background: '#efefef',
      color: '#999',
      fontSize: '10px'
    }
  },
  title: {
    fontSize: '12px',
    color: '#7d7d80',
    textAlign: 'center',
    marginTop: '5px'
  }
});

export default Container;
