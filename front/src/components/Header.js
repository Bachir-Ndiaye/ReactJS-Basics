 import PropTypes from 'prop-types';
 import Button from './Button.js';

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add'/>
        </header>
    )
}

// Like a constructor
Header.defaultProps = {
    title: 'Task Tracker',
}

// Handle the type passed by the user
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header;
