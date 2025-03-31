export const navBottonStyle = 'text-white border-2 border-black hover:border-cyan-600 mx-5 p-1 px-2 rounded-full cursor-pointer'
export const slashStyle = 'text-cyan-600 font-[900]'

const NavigationBar = () => {
    return ( 
        <nav 
          className='flex fixed justify-between h-10 w-11/12 border-b-2 border-white m-5 pb-1  chewy-regular'
          >
             <div className='cursor-pointer'>
              <svg  className='h-10'
                    id="ePBXlpJ48591"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 300 300"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision">
                      <defs><linearGradient id="ePBXlpJ48592-fill" x1="0" y1="0.5" x2="1" y2="0.5" spreadMethod="pad" gradientUnits="objectBoundingBox" gradientTransform="translate(0 0)"><stop id="ePBXlpJ48592-fill-0" offset="0%" stopColor="#fff"/><stop id="ePBXlpJ48592-fill-1" offset="100%" stopColor="#f4f4f4"/></linearGradient></defs>
                      <path d="M52.189772,217.51824C61.678823,205.109481,163.868613,48.905109,170.437956,43.79562s11.678832-5.839417,16.058394-1.459855s20.437957,150.364964,20.437957,156.20438.729927,5.109489,0,13.868613-2.91971,32.846715-18.978104,21.89781-54.014606-55.474459-54.014606-60.583948c0-10.218978-4.379562-18.248175,6.569343-13.138686q5.109489,5.839416,47.445263,51.824824-16.058393-108.029204-17.518247-113.86862c-1.459854-5.839416-9.48906-9.489051-13.138695,0-7.29927,10.218978-90.510949,126.277372-96.350365,129.19708-10.948905,6.56935-14.598533,1.459862-8.759124-10.218978Z"
                        transform="translate(.000009 0.000008)"
                        fill="url(#ePBXlpJ48592-fill)"
                        stroke="#3f5787"
                        strokeWidth="0.6"
                        />
              </svg>
            </div>
            <ul 
              className='pl-5 flex flex-row '>
                <li 
                  className={navBottonStyle}
                  ><a href="#about">
                    <span className={slashStyle}>/</span>About Me
                    </a></li>
                <li 
                  className={navBottonStyle}
                  >
                    <span className={slashStyle}>/</span>Education
                </li>
                <li 
                  className={navBottonStyle}
                  >
                    <span className={slashStyle}>/</span>My Works
                </li>
                <li 
                  className={navBottonStyle}
                  >
                    <span className={slashStyle}>/</span>Contact
                </li>
            </ul>
        </nav>
     );
}
 
export default NavigationBar;