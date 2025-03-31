import Image from 'next/image'

const About = () => {

    return ( 
        <div className="flex flex-col w-screen py-36 pl-12" id='about'>
          
          <div className='flex flex-row gap-9 justify-center items-center'>
            <div className='border-2 group border-black bg-black hover:bg-cyan-900 hover:border-white transition-all delay-150 hover:backdrop-blur-sm rounded-full overflow-hidden '>
                {/* <img
                src="/my_picture_real.png"
                className='group-hover:hidden'
                alt="abenezer picture"
                style={{height: 285, width: 500}}
                /> */}
                <img
                src="/my_picture_cartoon.png"
                // className='hidden group-hover:block'
                alt="abenezer picture"
                style={{height: 285, width: 500}}
                />
            </div>
            <div className='text-white text-justify pr-5 text-md mr-4 w-6/12'>
                <p className='py-3'>
                    <span className='text-white text-2xl'>I am</span> a <span className='text-cyan-200'>web designer</span> and <span className='text-cyan-200'>software engineer</span>, <br/>
                    which is awesome because that means I am a master of both creativity and logic! <br/><br/>
                    I honed my <span className='text-cyan-200'>software engineering</span> skills at <span className='text-green-200 font-[500]'>ALX Software Engineering School</span>,
                    which is kind of like the Hogwarts of coding schools ,
                    <span className='text-gray-200'>(minus the magic wands and flying broomsticks, unfortunately)</span>. 
                    I have learned some pretty cool spells to make my code work like a charm!
                </p>
            </div>
          </div>


        </div>
     );
}
 
export default About;