import { styled, Box } from '@mui/material';
import Image from 'next/image';

import Img2 from '../../public/assets/Img2.jpg';
import Img5 from '../../public/assets/Img5.jpg';

export const GlobalStylesWrapper = styled(Box)`
  font-family: 'Roboto', 'Sofia Sans Condensed';
`;

export const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: auto 2.5%;
  margin-bottom: 228px;
`;

export const StyledBackgroundImage = styled(Box)`
  height: 535px;
  width: 535px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    background-image: linear-gradient(#1a2a57, #1a2a57), url(${Img2.src});
    background-blend-mode: color;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    border-radius: 20px;
  }
`;

export const StyledCenterImage = styled(Image)`
  position: relative;
  border-radius: 20px;
  height: 205px;
  width: 205px;
`;

export const AboutUsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;
`;

export const StyledHeader = styled('h1')`
  font-family: 'Sofia Sans Condensed';
  font-weight: 700;
  font-size: 60px;
  line-height: 83.5%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #1a2a57;
  margin-bottom: 40px;
`;

export const StyledAbout = styled('p')`
  width: 70%;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 124.5%;
  letter-spacing: -0.025em;
  color: #1a2a57;
  margin-bottom: 46px;
`;

export const StackContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 0 2.5%;
  padding: 89px 84px 89px 64px;
  background-color: #81828e;
  border: 1px solid #81828e;
  border-radius: 20px;
  position: relative;
  align-items: center;
  box-shadow: 0 -37px #9c9dab, 0 -74px 0 #c0c0c5, 0 -111px #e7e7e7;
  height: 600px;
  margin-bottom: 108px;
`;

export const StackInfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 420px;
`;

export const StackInfo = styled(Box)`
  font-family: 'Sofia Sans Condensed';
  font-weight: 700;
  font-size: 24px;
  line-height: 83.5%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 90px;
`;

export const ProfitsContainer = styled(Box)`
  display: flex;
  align-items: baseline;
  margin-bottom: 28px;
`;

export const Profits = styled(Box)`
  font-family: 'Sofia Sans Condensed';
  font-weight: 700;
  font-size: 74px;
  text-align: center;
  letter-spacing: -0.025em;
  margin-right: 21px;
`;

export const ProfitsDate = styled(Box)`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.025em;
  color: #ffffff;
`;

export const StackSport = styled(Box)`
  font-family: 'Sofia Sans Condensed';
  font-weight: 700;
  font-size: 220px;
  line-height: 134px;
  letter-spacing: -0.025em;
  text-transform: uppercase;
`;

export const StackImage = styled(Image)`
  border-radius: 20px;
  width: 315px;
  height: 420px;
  object-fit: cover;
`;

export const JoinUsContainer = styled(Box)`
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 0 2.5%;
  margin-bottom: 43px;
`;

export const JoinUsText = styled(Box)`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 124.5%;
  letter-spacing: -0.025em;
  color: #4b6290;
  margin-right: 17px;
`;

export const StyledDivider = styled(Box)`
  border-top: 1px dashed #9cadcb;
  width: 100%;
`;

export const CareersContainer = styled(Box)`
  display: flex;
  margin-bottom: 177px;

  #CareersInfoContainer {
    display: flex;
    flex-direction: column;
    width: 31%;
    padding: 0 2.5%;
  }
`;

export const CareersHeader = styled('h2')`
  font-family: 'Sofia Sans Condensed';
  font-weight: 700;
  font-size: 60px;
  line-height: 83.5%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #1a2a57;
  margin-bottom: 39px;
`;

export const CareersInfo = styled('p')`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 124.5%;
  letter-spacing: -0.025em;
  color: #1a2a57;
  margin-bottom: 31px;
`;

export const CareersCardsContainer = styled(Box)`
  display: flex;
  overflow: hidden;
  width: 60%;
  gap: 0 20px;
  margin-left: auto;

  &:hover {
    overflow: scroll;
  }
`;

export const CareersCards = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #1a2a57;
  border-radius: 20px;
  min-width: 316px;
  height: 428px;
  padding: 34px;
`;

export const CareersLabel = styled('p')`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 124.5%;
  letter-spacing: -0.025em;
  color: #9cadcb;
  margin-bottom: 20px;
`;

export const CareersData = styled('p')`
  font-family: 'Sofia Sans Condensed';
  font-weight: 700;
  font-size: 24px;
  line-height: 83.5%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #f5f5f5;
  margin-bottom: 20px;
`;

export const CareersDate = styled('p')`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 124.5%;
  letter-spacing: -0.025em;
  color: #9cadcb;
  margin: auto 0 25px;
`;

export const NewsContainer = styled(Box)`
  background-color: #1a2a57;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 87px 2.5% 0;
  height: 959px;
`;

export const NewsHeaderContainer = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  border-top: 1px dashed #9cadcb;
  padding: 87px 0 66px;
`;

export const NewsHeader = styled('p')`
  font-family: 'Sofia Sans Condensed';
  font-weight: 700;
  font-size: 60px;
  line-height: 83.5%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #ffffff;
  width: 40%;
`;

export const NewsBoxContainer = styled(Box)`
  display: flex;
  justify-content: space-between;

  #NewsBox {
    display: flex;
    flex-direction: column;
    width: 49%;
  }
`;

export const NewsBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 49%;
`;

export const NewsImage = styled(Image)`
  border-radius: 20px;
  width: 100%;
  height: 330px;
  margin-bottom: 39px;
`;

export const NewsDate = styled('p')`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 124.5%;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const NewsTitleContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewsTitle = styled('h3')`
  font-family: 'Sofia Sans Condensed';
  font-weight: 700;
  font-size: 24px;
  line-height: 83.5%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #ffffff;
  width: 65%;
`;

export const StyledArrowContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  width: 47px;
  border-radius: 100%;
  border: 1px solid #ffffff;
  background-color: #1a2a57;
  margin-right: 48px;

  img {
    width: 16px;
    height: 16px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(199deg)
      brightness(107%) contrast(102%);
  }
`;

export const FutureContainer = styled(Box)`
  min-height: 1359px;
  position: relative;
  padding: 80px 2.5% 0;
  background-image: url(${Img5.src});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  #FutureText {
    position: relative;
    font-family: 'Sofia Sans Condensed';
    font-weight: 700;
    font-size: 24px;
    line-height: 83.5%;
    letter-spacing: -0.025em;
    text-transform: uppercase;
    color: #1a2a57;
    text-align: center;
    padding-bottom: 564px;
  }
`;

export const FutureHeader = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Sofia Sans Condensed';
  font-weight: 700;
  font-size: 220px;
  line-height: 80%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #1a2a57;
  text-align: center;
  padding-bottom: 113px;
`;

export const FutureImage = styled(Image)`
  width: 143px;
  height: 163px;
  border-radius: 20px;
  margin: auto 35px;
`;
