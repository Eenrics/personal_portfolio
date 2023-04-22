const Intro = () => {
    return ( 
        <div className='text-white w-screen flex flex-col justify-center '>
            <p className='ml-auto mr-auto text-2xl'>Hi, I am {" "}<br/>
              <span className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>Abenezer Eshetie</span>,
              <br/> a web developer who speaks the language of the internet and turns ideas into reality.</p>
            <br/>
            <p className='w-8/12 mr-auto ml-auto bg-white text-black p-5 rounded text-l'>I am a versatile web and mobile application developer with expertise in front-end, back-end, and DevOps..
             I create beautiful, eye-catching applications that are highly scalable and available using cloud and automation tools..
            </p>
            <br/>
            <button className="border-2 border-white ml-auto mr-auto py-2 px-4 rounded-full hover:bg-gradient-to-r from-green-400 to-blue-500">CHECK MY RESUME</button>
          </div>
     );
}
 
export default Intro;