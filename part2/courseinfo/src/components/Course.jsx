const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => (
    <div>
        {parts.map(part =>
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
    </div>
)

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

export default Course