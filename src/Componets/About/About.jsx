import img  from '../../assets/imgs/braa.jpg'
import "./About.css"

const About = () => {
  return (
    <section className='About'>
      <div className="about-container">
        <div className="about-img">
          <img src={img} alt="" />
        </div>
        <div className="about-contain">
          <p>Lorem ipsumae, consectetur delectus unde aut corporis, nemo sint ex quam dolor nam mollitia? Modi, iusto!

          </p>
          <h1>html</h1>
          <div className="mb-6 h-1  bg-neutral-200 dark:bg-neutral-600">
          <div className="h-1 bg-primary-400" style={{ width: "50%" }}></div>
      </div>
        </div>
      </div>

    </section>
  )
}

export default About
