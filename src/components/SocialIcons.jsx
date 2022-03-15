import { FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { StyledSocials } from './styles/SocialIcons.styled'

function SocialIcons() {
  return (
    <StyledSocials>
        <li>
            <a href="https://twitter.com">
            <FaTwitter/>    
            </a>
            <a href="https://facebook.com">
            <FaFacebook/>    
            </a>
            <a href="https://linkedin.com">
            <FaLinkedin/>    
            </a>
        </li>
    </StyledSocials>
  )
}

export default SocialIcons