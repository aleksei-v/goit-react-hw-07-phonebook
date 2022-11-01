import PropTypes from 'prop-types';
import { StyledTitle } from './Title.styled';

const Title = ({ text }) => <StyledTitle>{text}</StyledTitle>

Title.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Title;