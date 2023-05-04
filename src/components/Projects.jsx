import { projects } from '../data'
import Portfolio from './Portfolio'

const Projects = () => {
  return (
    <section className='section' id='tours'>

      <div className='section-center featured-center'>
        {projects.map((project) => {
          return <Portfolio {...project} key={project.id} />
        })}
      </div>
    </section>
  )
}
export default Projects
