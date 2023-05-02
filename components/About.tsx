import Image from 'next/image'

const About = () => {

    return ( 
        <div className="flex flex-col w-screen py-36 pl-12" id='about'>
          
          <div className='flex flex-row gap-9 justify-center items-center'>
            <div className='border-2 border-black bg-black hover:bg-cyan-900 hover:border-white rounded-full overflow-hidden '>
                <img
                src="/my_picture.png"
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


            <div className=' bg-white grid grid-cols-12 gap-8 rounded-lg m-4 mt-16 ml-24 w-10/12 p-3 filter grayscale hover:grayscale-0 hover:scale-105 ease-out transition'>
              <img src="/assets/logo/react.png" alt="heart icon" className='hover:animate-spin'/>
              <img src="/assets/logo/three.png" alt="heart icon" />
              <img src="/assets/logo/tailwind.png" alt="heart icon" />
              <img src="/assets/logo/sass.png" alt="heart icon" />
              <img src="/assets/logo/redux.png" alt="heart icon" />
              <img src="/assets/logo/ansible.png" alt="heart icon" />
              <img src="/assets/logo/aws.png" alt="heart icon" />
              <img src="/assets/logo/bootstrap.png" alt="heart icon" />
              <img src="/assets/logo/c.png" alt="heart icon" />
              <img src="/assets/logo/python.png" alt="heart icon" />
              <img src="/assets/logo/circleci.png" alt="heart icon" />
              <img src="/assets/logo/css.png" alt="heart icon" />
              <img src="/assets/logo/cypress.png" alt="heart icon" />
              <img src="/assets/logo/docker.png" alt="heart icon" />
              <img src="/assets/logo/express.png" alt="heart icon" />
              <img src="/assets/logo/flask.png" alt="heart icon" />
              <img src="/assets/logo/framer_motion.png" alt="heart icon" />
              <img src="/assets/logo/graphana.png" alt="heart icon" />
              <img src="/assets/logo/graphql.png" alt="heart icon" />
              <img src="/assets/logo/grcp.png" alt="heart icon" />
              <img src="/assets/logo/haproxy.png" alt="heart icon" />
              <img src="/assets/logo/html.png" alt="heart icon" />
              <img src="/assets/logo/javascript.png" alt="heart icon" />
              <img src="/assets/logo/jenkins.png" alt="heart icon" />
              <img src="/assets/logo/jest.png" alt="heart icon" />
              <img src="/assets/logo/kubernetes.png" alt="heart icon" />
              <img src="/assets/logo/mongodb.png" alt="heart icon" />
              <img src="/assets/logo/mysql.png" alt="heart icon" />
              <img src="/assets/logo/neo4j.png" alt="heart icon" />
              <img src="/assets/logo/next.png" alt="heart icon" />
              <img src="/assets/logo/nginx.png" alt="heart icon" />
              <img src="/assets/logo/node.png" alt="heart icon" />
              <img src="/assets/logo/postgresql.png" alt="heart icon" />
              <img src="/assets/logo/prometheus.png" alt="heart icon" />
              <img src="/assets/logo/react_native.png" alt="heart icon" />
              <img src="/assets/logo/redis.png" alt="heart icon" />
              <img src="/assets/logo/socketio.png" alt="heart icon" />
              <img src="/assets/logo/terraform.png" alt="heart icon" />
              <img src="/assets/logo/typescript.png" alt="heart icon" />
              <img src="/assets/logo/webrtc.png" alt="heart icon" />
            </div>
        </div>
     );
}
 
export default About;