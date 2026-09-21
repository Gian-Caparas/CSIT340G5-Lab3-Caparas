const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.units}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1.name} units={props.part1.units} />
      <Part name={props.part2.name} units={props.part2.units} />
      <Part name={props.part3.name} units={props.part3.units} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units:
      {' '}
      {props.part1.units + props.part2.units + props.part3.units}
    </p>
  )
}

const App = () => {
  const course = 'BS Information Technology'

  const part1 = {
    name: 'CSIT340',
    units: 3
  }

  const part2 = {
    name: 'CSIT321',
    units: 3
  }

  const part3 = {
    name: 'CSIT327',
    units: 3
  }

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total
        part1={part1}
        part2={part2}
        part3={part3}
      />
    </div>
  )
}

export default App