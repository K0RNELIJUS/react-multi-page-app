import CallToAction from '../../components/organisms/CallToAction';
import FooterContacts from '../../components/organisms/FooterContacts';
import TEXTS from '../../constants/texts';
import Card from '../../components/atoms/Card';

import repairIcon from '../../assets/icons/homePage/CardsSection/engine.svg';
import washIcon from '../../assets/icons/homePage/CardsSection/CarDiagnostic.svg';
import batteryIcon from '../../assets/icons/homePage/CardsSection/batery.svg';
import wheelImg from '../../assets/images/singleServicePage/Rims.jpg';
import SERVICES from '../../constants/services';
import ServiceCard from '../../components/atoms/ServiceCard';
import {
  StyledSingleServicePage,
  StyledSection,
  StyledCardsBlock,
  StyledOtherServices,
  StyledOtherServicesH5,
  StyledCardsCont,
  StyledTxtCardCont,
  StyledContentBlock,
  StyledImg,
  StyledP1,
  StyledP2,
  StyledContentH5,
  StyledP3,
  StyledLeftBorder,
  StyledP4,
} from './SingleServicePage.style';
const SingleServicePage = () => {
  return (
    <StyledSingleServicePage>
      <h1>{TEXTS.singleServicePage.heading}</h1>
      <StyledSection>
        <StyledCardsBlock>
          <StyledOtherServices>
            <StyledOtherServicesH5>
              {TEXTS.singleServicePage.cards.title}
            </StyledOtherServicesH5>
            <StyledCardsCont>
              <Card
                icon={repairIcon}
                text={TEXTS.singleServicePage.cards.card1}
                customWidth={'264px'}
                customHeight={'158px'}
              />
              <Card
                icon={washIcon}
                text={TEXTS.singleServicePage.cards.card2}
                customWidth={'264px'}
                customHeight={'158px'}
              />
              <Card
                icon={batteryIcon}
                text={TEXTS.singleServicePage.cards.card3}
                customWidth={'264px'}
                customHeight={'158px'}
              />
            </StyledCardsCont>
          </StyledOtherServices>
          <StyledTxtCardCont>
            {SERVICES.map((service) => (
              <ServiceCard
                icon={service.icon}
                title={service.title}
                text={service.description}
              />
            ))}
          </StyledTxtCardCont>
        </StyledCardsBlock>
        <StyledContentBlock>
          <StyledImg src={wheelImg} alt='wheeel' />
          <h4>{TEXTS.singleServicePage.article.title1}</h4>
          <StyledP1>{TEXTS.singleServicePage.article.paragraph1}</StyledP1>
          <StyledP2>{TEXTS.singleServicePage.article.paragraph2}</StyledP2>
          <StyledContentH5>
            {TEXTS.singleServicePage.article.title2}
          </StyledContentH5>
          <StyledP3>{TEXTS.singleServicePage.article.paragraph3}</StyledP3>
          <StyledLeftBorder>
            <StyledP4>{TEXTS.singleServicePage.article.paragraph4}</StyledP4>
          </StyledLeftBorder>
        </StyledContentBlock>
      </StyledSection>
      <CallToAction />
      <FooterContacts />
    </StyledSingleServicePage>
  );
};

export default SingleServicePage;
