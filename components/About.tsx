import Image from 'next/image'

const About = () => {

    return ( 
        <div className="flex flex-col w-screen h-screen py-36 pl-12" id='about'>
          
          <div className='flex flex-row gap-9'>
            <div className='border-2 h-72 border-cyan-600 bg-cyan-900 hover:bg-green-900 hover:border-white rounded'>
                <Image
                src="/my_picture.png"
                alt="abenezer picture"
                width={200}
                height={200}
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

          <div className='flex flex-row gap-4 font-[600] text-xl rounded-xl w-11/12 bg-gray-200 h-14 m-4 mt-16 p-3'>
            <span>React</span>
            <span>Redux</span>
            <span>Next</span>
            <span>Tailwind</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Flask</span>
            <span>GraphQL</span>
            <span>React Native</span>
            <span>Kubernetes</span>
            <span>Docker</span>
            <span>Jenkins</span>
            <span>Ansible</span>
            <span>Prometheus</span>
            <span>Terraform</span>
            <span>AWS Cloud</span>
          </div>
        </div>
     );
}
 
export default About;