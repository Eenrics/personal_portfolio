import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const iconStyle = "text-white m-2 py-5 cursor-pointer"
const Works = () => {
    const [telecopy, setTelecopy] = useState(false)
    const [phonecopy, setPhonecopy] = useState(false)
    return ( 
        <div className="w-screen h-screen pt-9">
          <div className='text-white w-screen flex flex-col justify-center ml-24'>
            <h3 className='text-4xl font-bold'>Some of the projects I worked on</h3>
          </div>
        </div>
     );
}
 
export default Works;