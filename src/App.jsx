const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ part }) => {
  return <p>{part.name} - {part.units} units</p>
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part part = {parts[0]}/>
      <Part part = {parts[1]}/>
      <Part part = {parts[2]}/>
    </div>
  )
}

const Total = ({ parts })  => {
  return (
    <p>Total units: {parts[0].units + parts[1].units + parts[2].units}</p>
  )
}

const Footer = ({ fullname, courseCode, section}) => {
  return ( 
    <footer>
      <p>{fullname} - {courseCode} - {section}</p>
    </footer>
  )
}

const App = () => {
    const course = {
        name: 'INFORMATION TECHNOLOGY',
        parts: [
        {
          name: 'CSIT321 - APP DEVELOPMENT',
          units: 3,
        },
        {
          name: 'CSIT340 - INDUSTRY ELECTIVE',
          units: 3,   
        },
        {
          name: 'CSIT327 - INFORMATION MANAGEMENT',
          units: 3,
        },
      ],
  }

  const fullName = 'Gian Joebert B. Caparas - GWAPO'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course = {course.name}/>
      <Content parts  = {course.parts}/>
      <Total parts = {course.parts}/>

      <Footer
        fullname={fullName}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

export default App