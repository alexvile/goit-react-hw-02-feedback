import { MainSection, MainTitle } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <MainSection>
      <MainTitle>{title}</MainTitle>
      {children}
    </MainSection>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
