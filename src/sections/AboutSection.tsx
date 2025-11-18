import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-heading">
            ME, MYSELF
            <span className="about-arrow">→</span>
          </h2>
        </div>

        <div className="about-right">
          <p className="about-text">
            My career actually started way before I wrote my first line of code
            — back when I genuinely believed I'd become a scientist 🧪✨.
          </p>
          <p className="about-text">
            So naturally, I did what every aspiring scientist does: completed an MSc in Theoretical Computer Science, got extremely good at proofs nobody reads… and then landed up as a full-stack developer anyway 😂.
          </p>
          <p className="about-text">
            College told me I got placed at <strong>Oracle</strong> 🎉… and then Oracle told me "lol no"
            because their hiring and operations teams weren't speaking to each other 💀.
            With placements done and my vibes six feet under, I proudly stepped out with
            a very theoretical degree, a dream, and absolutely no income.
          </p>
          <p className="about-text">
            Enter <strong>Chinmay</strong> 🚀 — the guy who made sure my story didn't end there. Thanks to him,
            I joined <strong>FoxSense Innovations</strong> — a very young company run almost
            entirely by youth and Gen-Z energy ⚡. I joined as an intern, became part of the
            team working on Vigil, hopped across multiple projects, and somehow
            evolved into "the full-stack person" without realizing it 😌.
          </p>
          <p className="about-text">
            Fast-forward — now I guide interns, handle client calls, plan features, gather requirements, and build
            products with a ridiculously energetic team that makes work feel less like a job and more like a multiplayer
            match 😅.
          </p>
          <p className="about-text">
            Basically: <br/>
            "Future scientist" → "Oracle almost-but-not-really" → "Accidental developer" → "I actually love this ❤️‍🔥"
          </p>
          <p className="about-text">
            Still building. Still learning. Still vibing 🚀✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

