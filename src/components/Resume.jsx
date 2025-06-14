import resume from '../../src/assets/myphoto/Untitled document.pdf'

const Resume = () => {
    console.log('resume')
  return (
  <div style={{ height: '100vh' }}>
      <iframe
        src={resume}
        title="Resume"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      ></iframe>

      hello
    </div>
  )
}

export default Resume
