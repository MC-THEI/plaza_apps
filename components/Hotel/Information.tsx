import SectionWrapper from '../../ui/SectionWrapper';
import SectionTitle from '../../ui/SectionTitle';
import { informationTitle } from '../../assets/languages';
import InformationCards from './InformationCards';

function Information() {
  return (
    <SectionWrapper bgColor={'dark'}>
      <SectionTitle title={informationTitle[1]} />
      <InformationCards />
    </SectionWrapper>
  );
}

export default Information;
