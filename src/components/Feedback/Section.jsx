import { MainSection, MainTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <MainSection>
      <MainTitle>{title}</MainTitle>
      {children}
    </MainSection>
  );
};
export default Section;
