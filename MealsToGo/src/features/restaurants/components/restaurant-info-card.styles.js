import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Text } from "react-native";
import { Card } from "react-native-paper";

// Can put a component between () to specifically style a certain type of component
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

// All CSS here needs to be written in actual CSS
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

// Write this as regular css
// We can write css styles and use them as components down below
// These components now have semantic reasoning (see Title component below)
// Now we no longer need to use StyleSheet to change a blank Text component
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Open = styled(SvgXml)`
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
