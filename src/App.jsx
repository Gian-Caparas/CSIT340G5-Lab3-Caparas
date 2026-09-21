const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} — {props.part.units} units
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      <strong>
        Total units: {props.parts[0].units +
          props.parts[1].units +
          props.parts[2].units}
      </strong>
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.name} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'BS Information Technology',
    parts: [
      {
        name: 'CSIT340',
        units: 3
      },
      {
        name: 'CSIT321',
        units: 3
      },
      {
        name: 'CSIT327',
        units: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

      <Footer
        name="Gian Joebert B. Caparas"
        courseCode="CSIT340"
        section="G5"
      />
    </div>
  )
}

export default App