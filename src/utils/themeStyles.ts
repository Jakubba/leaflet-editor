import oldPage from '../assets/oldPage.png';
import defaultPage from '../assets/deafult.jpg';
import hellPage from '../assets/hell.jpg';
export const themeStyles = {
  default: {
    height: '760px',
    background: 'url(' + defaultPage + ') no-repeat center center',
    backgroundSize: 'cover',
  },
  oldschool: {
    padding: '45px',
    background: 'url(' + oldPage + ') no-repeat center center',
    backgroundSize: 'contain',
    height: '760px',
  },
  red: {
    background: 'url(' + hellPage + ') no-repeat center center',
    border: '2px solid #e53935',
  },
};
export const titleStyles = {
  default: {
    width: 'max-content',
    backgroundColor: '#1c8273',
    color: '#fff',
    px: 2,
    py: 2,
    pl: 3,
    display: 'inline-block',
  },
  oldschool: {
    width: '100%',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    px: 2,
    py: 0.5,
    pl: 3,
    display: 'inline-block',
  },
  red: {
    backgroundColor: '#e53935',
    color: '#fff',
    px: 2,
    py: 2,
    pr: 10,
    mb: 1,
    display: 'inline-block',
    clipPath: 'polygon(0 0, 100% 0%, 58% 100%, 0% 100%)',
  },
};
export const descriptionStyles = {
  default: {
    width: 'max-content',
    fontSize: '0.875rem',
    backgroundColor: '#31a097',
    color: '#fff',
    px: 1.5,
    py: 1.5,
    pr: 3,
    display: 'inline-block',
  },
  oldschool: {
    pl: 3.5,
    color: '#000000',
    fontSize: '1.125rem',
    fontWeight: 'normal',
    display: 'inline-block',
  },
  red: {
    backgroundColor: '#ffcdd2',
    color: '#b71c1c',
    px: 1.5,
    py: 1.5,
    pl: 8,
    mt: 1,
    display: 'inline-block',
    clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
  },
};
export const numberPageStyles = {
  default: {
    marginLeft: 'auto',
    padding: '4px 8px',
    width: 'max-content',
    backgroundColor: '#e0e0e0',
    color: '#616161',
    fontWeight: 'bold',
    mt: 1,
    display: 'block',
  },
  oldschool: {
    marginLeft: 'auto',
    padding: '4px 8px',
    width: 'max-content',
    color: '#000000',
    fontSize: '1.875rem',
    fontWeight: 'bold',
    mt: 1,
    display: 'block',
  },
  red: {
    marginLeft: 'auto',
    padding: '4px 8px',
    width: 'max-content',
    backgroundColor: '#ffcdd2',
    color: '#b71c1c',
    fontWeight: 'bold',
    mt: 1,
    display: 'block',
  },
};
export const clipPaths = {
  default: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
  oldschool:
    'polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)',
  red: 'polygon(0 0, 100% 0, 70% 100%, 30% 100%)',
};
