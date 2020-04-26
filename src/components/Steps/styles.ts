import { createUseStyles } from 'react-jss';

import {
  checkRed,
  checkBlue,
  ellipsis,
  ellipsisGray,
  iconError,
} from '../Icon';

export const StepItem = createUseStyles({
  step: {
    display: 'flex',
    position: 'relative',
    '&.item-row': {
      flexDirection: 'column',
      alignItems: 'center',
      '&.line-active': {
        '&:after': {
          content: '""',
          position: 'absolute',
          top: '14px',
          left: 'calc(50% + 15px)',
          width: '100%',
          height: '2px',
          background: '#f54d4f'
        }
      },
      '&.line-disabled': {
        '&:after': {
          content: '""',
          position: 'absolute',
          top: '14px',
          left: '50%',
          transform: 'translateY(-50%)',
          width: '100%',
          height: '2px',
          background: '#f7d3d5'
        }
      }
    },
    '&.item-column': {
      paddingBottom: '23px',
      '&.item-large': {
        '&.line-active': {
          '&:after': {
            top: '30px',
            left: '14px',
            height: 'calc(100% - 30px)'
          }
        },
        '&.line-disabled': {
          '&:after': {
            top: '30px',
            left: '14px',
            height: 'calc(100% - 30px)'
          }
        },
        '& .icon': {
          marginRight: '8px',
          marginBottom: 0
        },
        '& .step-txt': {
          '& .title': {
            height: '30px',
            lineHeight: '26px'
          }
        }
      },
      '&.line-active': {
        '&:after': {
          content: '""',
          position: 'absolute',
          top: '18px',
          left: '8px',
          width: '2px',
          height: 'calc(100% - 18px)',
          background: '#298bea'
        }
      },
      '&.line-disabled': {
        '&:after': {
          content: '""',
          position: 'absolute',
          top: '18px',
          left: '8px',
          width: '2px',
          height: 'calc(100% - 18px)',
          background: '#ccc'
        }
      },
      '& .icon': {
        marginRight: '8px',
        marginBottom: 0
      }
    },
    '&.item-small': {
      '&.item-row': {
        '&.line-active': {
          '&:after': {
            left: 'calc(50% + 9px)',
            top: '8px',
            height: '1px'
          }
        },
        '&.line-disabled': {
          '&:after': {
            left: 'calc(50% + 9px)',
            top: '8px',
            height: '1px'
          }
        }
      }
    },
    '& .icon': {
      color: '#fff',
      borderRadius: '50%',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
      marginBottom: '12px',
      '&.icon-large': {
        fontSize: '17px',
        width: '30px',
        height: '30px',
        lineHeight: '30px'
      },
      '&.icon-small': {
        fontSize: '12px',
        width: '18px',
        height: '18px',
        lineHeight: '18px'
      },
      '&.icon-active': {
        background: '#f54d4f'
      },
      '&.icon-disabled': {
        background: '#f7d3d5'
      },
      '&.icon-pass-red': {
        backgroundImage: `url(${checkRed})`,
        backgroundSize: '100% 100%'
      },
      '&.icon-pass-blue': {
        backgroundImage: `url(${checkBlue})`,
        backgroundSize: '100% 100%'
      },
      '&.icon-process': {
        backgroundImage: `url(${ellipsis})`,
        backgroundSize: '100% 100%'
      },
      '&.icon-await': {
        backgroundImage: `url(${ellipsisGray})`,
        backgroundSize: '100% 100%',
        width: '20px',
        height: '20px',
        marginRight: '6px',
        right: '1px',
        bottom: '1px',
        '&.icon-large': {
          width: '36px',
          height: '36px',
          marginRight: '4px',
          right: '3px',
          bottom: '2px'
        }
      },
      '&.icon-error': {
        backgroundImage: `url(${iconError})`,
        backgroundSize: '100% 100%'
      }
    },
    '& .step-txt': {
      flex: 1,
      '& .title': {
        fontSize: '15px',
        color: 'rgba(0, 0, 0, 0.65)',
        height: '18px',
        lineHeight: 1,
        '&.title-active, &.title-pass-red': {
          fontSize: '15px',
          color: '#f54d4f'
        },
        '&.title-disabled': {
          fontSize: '15px',
          color: '#f7d3d5'
        },
        '&.title-process, &.title-pass-blue': {
          color: 'rgba(0, 0, 0, 0.8)'
        },
      },
      '& .desc': {
        fontSize: '15px',
        color: 'rgba(0, 0, 0, 0.45)',
        marginTop: '6px'
      }
    }
  }
});

const StepBox = createUseStyles({
  steps: {
    display: 'flex',
    padding: '20px 0',
    '&.column': {
      flexDirection: 'column',
      padding: '0 20px'
    },
    '& div, & p': {
      margin: 0
    },
    '& > div': {
      flex: 1
    }
  }
});

export default StepBox;
