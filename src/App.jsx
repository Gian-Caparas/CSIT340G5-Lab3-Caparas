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
      <Part name={props.part1} units={props.units1} />
      <Part name={props.part2} units={props.units2} />
      <Part name={props.part3} units={props.units3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units: {props.units1 + props.units2 + props.units3}
    </p>
  )
}

const App = () => {
  const course = 'BS Information Technology'

  const part1 = 'CSIT Subject 1'
  const units1 = 3

  const part2 = 'CSIT Subject 2'
  const units2 = 3

  const part3 = 'CSIT Subject 3'
  const units3 = 3

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        units1={units1}
        part2={part2}
        units2={units2}
        part3={part3}
        units3={units3}
      />

      <Total
        units1={units1}
        units2={units2}
        units3={units3}
      />
    </div>
  )
}

export default App