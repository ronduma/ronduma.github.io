// components

function About() {
  return (
    <>
      <div className="flex justify-center text-center xl:mx-40 2xl:mx-96">
        <div>
          <h1 className="font-bold">About Me</h1>
          <div>Welcome to my website.</div>
          <div>
            I&apos;m a <span className="font-semibold">22-year-old software engineer </span> 
            from <span className="font-semibold"> Queens, NYC </span> 
            currently based out of the <span className="font-semibold">New York Metropolitan Area.</span>
          </div>
          <div>
            My interests currently lie in 
            <span className="font-semibold"> full-stack web development</span>, 
            <span className="font-semibold"> generative AI</span>, and 
            <span className="font-semibold"> technology consulting</span>.</div>
          <div>Feel free to view my <a>resume</a> or <a>contact me</a>.</div>
        </div>
      </div>
    </>
    
  )
}

export default About;