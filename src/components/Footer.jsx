import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styles";
import { FooterStyled } from "./styles/Footer.styled";
import SocialIcons from "./SocialIcons";



function Footer() {
  return (
    <FooterStyled>
        <Container>
            <img src="./images/logo_white.svg" alt="" />

            <Flex>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi distinctio, beatae inventore labore laboriosam laudantium error natus quae ratione?</li>
                    <li>+1-543-123-4567</li>
                    <li>example@huddle.com</li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>WHat we do</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>

                <SocialIcons />
            </Flex>

            <p>&copy; 2022 Tamilore Olaniyi. All Rights Reserved</p>
        </Container>
    </FooterStyled>
  )
}

export default Footer