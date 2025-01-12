const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => (
    <div>
        {parts.map(part =>
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
        <Total exercises={parts.map(part => part.exercises)} />
    </div>
)

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Total = ({ exercises }) => {
    const total = exercises.reduce(
        (acc, current) => acc + current,
        0,
    );
    return (
        <p><strong>total of {total} exercises</strong></p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

export default Course