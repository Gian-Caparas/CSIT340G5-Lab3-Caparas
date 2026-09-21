const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.units}
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
      Total units:
      {' '}
      {props.parts[0].units +
        props.parts[1].units +
        props.parts[2].units}
    </p>
  )
}

const App = () => {
  const course = 'BS Information Technology'

  const parts = [
    {
      name: 'CSIT340',
      units: 3
    },
    {
      name: 'CSIT321',
      units: 3
    },
    {
      name: 'CSITT327',
      units: 3
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App