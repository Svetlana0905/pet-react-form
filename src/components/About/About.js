import GuestList from "../../containers/GuestsList";
import './about.scss';

function About() {
   return (
      <main className='main__about' role='main'>
         <section className='container container__home'>
            <GuestList />
            <p className='text'>Лучшие номера для вашей работы, <br />отдыха и просто вдохновения</p>
         </section>
      </main>
   )
}

export default About;