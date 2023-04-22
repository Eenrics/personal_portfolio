import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const iconStyle = "text-white m-2 py-5 cursor-pointer"
const Intro = () => {
    const [telecopy, setTelecopy] = useState(false)
    const [phonecopy, setPhonecopy] = useState(false)
    return ( 
        <div className="flex flex-row">
          <div className='text-white w-screen flex flex-col justify-center '>
            <p className='ml-auto mr-auto text-2xl'>Hi, I am {" "}<br/>
              <span className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>Abenezer Eshetie</span>,
              <br/> a web developer who speaks the language of the internet and turns ideas into reality.</p>
            <br/>
            <p className='w-8/12 mr-auto ml-auto bg-white text-black p-5 px-9 rounded text-lg'>I am a versatile web and mobile application developer with expertise in front-end, back-end, and DevOps..
             I create beautiful, eye-catching applications that are highly scalable and available using cloud and automation tools..
            </p>
            <br/>
            <button className="border-2 border-white ml-auto mr-auto py-2 px-4 rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500">CHECK MY RESUME</button>
          </div>

          <div className="w-9 h-screen pb-9 flex flex-col justify-end fixed">
            <a href='https://github.com/EbenGitHub' target='_black' className={iconStyle}><GitHubIcon className='hover:text-gray-200'/></a>
            <a href='https://www.linkedin.com/in/abenezereshetie/' target='_black' className={iconStyle}><LinkedInIcon className='hover:text-cyan-500'/></a>
            <a href='mailto:abenezergoo@gmail.com' target='_black' className={iconStyle}><AlternateEmailIcon className='hover:text-pink-500'/></a>
            <div className={iconStyle} onClick={() => {
                navigator.clipboard.writeText("@URenuff")
                setTelecopy(true)
                setTimeout(() => {
                    setTelecopy(false)
                }, 5000)
                }}>{ !telecopy ? <TelegramIcon className='hover:text-green-500'/> : <span className='text-sm text-cyan-500'>Copied</span> }</div>
            <div className={iconStyle} onClick={() => {
                navigator.clipboard.writeText("+251911370109")
                setPhonecopy(true)
                setTimeout(() => {
                    setPhonecopy(false)
                }, 5000)
                }}>{ !phonecopy ? <PhoneAndroidIcon className='hover:text-violet-500'/> : <span className='text-sm text-cyan-500'>Copied</span> }</div>
          </div>
        </div>
     );
}
 
export default Intro;