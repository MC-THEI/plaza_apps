import SectionTitle from '../../ui/SectionTitle';
import { facilitiesTitle } from '../../assets/languages';
import SectionWrapper from '../../ui/SectionWrapper';
import FacilitiesContainer from './FacilitiesContainer';

function Facilities() {
  return (
    <SectionWrapper bgColor={'light'}>
      <SectionTitle title={facilitiesTitle[1]} />
      <FacilitiesContainer />
    </SectionWrapper>
  );
}

export default Facilities;
