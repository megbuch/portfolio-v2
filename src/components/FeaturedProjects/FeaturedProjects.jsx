import "./FeaturedProjects.css";
import { useRef, useEffect } from "react";
import gitfundedFrame from "../../assets/mockups/gitfunded/gitfunded_frame.png";
import gitfundedMobile from "../../assets/mockups/gitfunded/gitfunded_mobile.png";
import ledgerlyFrame from "../../assets/mockups/ledgerly/ledgerly_frame.png";
import ledgerlyMobile from "../../assets/mockups/ledgerly/ledgerly_mobile.png";
import jobseekrFrame from "../../assets/mockups/jobseekr/jobseekr_frame.png";
import jobseekrMobile from "../../assets/mockups/jobseekr/jobseekr_mobile.png";
import npcgenFrame from "../../assets/mockups/npcgen/npcgen_frame.png";
import npcgenMobile from "../../assets/mockups/npcgen/npcgen_mobile.png";

export default function FeaturedProjects() {
  const hiddenElsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    hiddenElsRef.current.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="featured-projects" className="FeaturedProjects col">
      <h2>Featured Projects.</h2>
      <div className="project-element row">
        <div className="mockups">
          <img
            id="gitfunded-frame"
            alt="gitfunded mockup"
            className="mockup hidden"
            src={gitfundedFrame}
            ref={(el) => (hiddenElsRef.current[0] = el)}
          />
          <img
            id="gitfunded-mobile"
            alt="gitfunded mockup"
            className="mockup hidden"
            src={gitfundedMobile}
            ref={(el) => (hiddenElsRef.current[1] = el)}
          />
        </div>
        <div
          className="project-info hidden"
          ref={(el) => (hiddenElsRef.current[2] = el)}
        >
          <h3>
            <a
              href="https://gitfunded.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              GitFunded
            </a>
          </h3>
          <p>
            Discover and support charitable causes with GitFunded. Create,
            customize, and manage your campaigns. Make donations to the ones
            that inspire you.
          </p>
          <div className="skills">
            <div className="skill language">
              <p>Python</p>
            </div>
            <div className="skill language">
              <p>HTML5</p>
            </div>
            <div className="skill language">
              <p>CSS3</p>
            </div>
            <div className="skill library-framework">
              <p>Django</p>
            </div>
            <div className="skill database">
              <p>PostgreSQL</p>
            </div>
            <div className="skill other">
              <p>AWS S3</p>
            </div>
            <div className="skill other">
              <p>Django Authentication</p>
            </div>
            <div className="skill other">
              <p>RESTful APIs</p>
            </div>
            <div className="skill design">
              <p>Responsive Design</p>
            </div>
          </div>
          <a
            href="https://github.com/megbuch/GitFunded"
            rel="noreferrer"
            target="_blank"
          >
            GitHub Repository
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://gitfunded.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            Live Preview
          </a>
        </div>
      </div>
      <div className="project-element row-reverse">
        <div className="mockups">
          <img
            id="ledgerly-mobile"
            alt="ledgerly mockup"
            className="mockup hidden"
            src={ledgerlyMobile}
            ref={(el) => (hiddenElsRef.current[3] = el)}
          />
          <img
            id="ledgerly-frame"
            alt="ledgerly mockup"
            className="mockup hidden"
            src={ledgerlyFrame}
            ref={(el) => (hiddenElsRef.current[4] = el)}
          />
        </div>
        <div
          className="project-info hidden"
          ref={(el) => (hiddenElsRef.current[5] = el)}
        >
          <h3>
            <a
              href="https://ledgerly-accounting.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              Ledgerly Accounting
            </a>
          </h3>
          <p>
            Ledgerly Accounting provides small-business owners with a
            comprehensive solution to manage business income and expenses. Users
            can manage their income and expense data, filter these transactions
            by category and/or date range, and generate financial reports.
          </p>
          <div className="skills">
            <div className="skill language">
              <p>JavaScript</p>
            </div>
            <div className="skill language">
              <p>HTML5</p>
            </div>
            <div className="skill language">
              <p>CSS3</p>
            </div>
            <div className="skill library-framework">
              <p>React</p>
            </div>
            <div className="skill library-framework">
              <p>Node.js</p>
            </div>
            <div className="skill library-framework">
              <p>Express</p>
            </div>
            <div className="skill library-framework">
              <p>Mongoose</p>
            </div>
            <div className="skill database">
              <p>MongoDB</p>
            </div>
            <div className="skill other">
              <p>Token-Based Authentication</p>
            </div>
            <div className="skill other">
              <p>MVC Architecture</p>
            </div>
            <div className="skill other">
              <p>RESTful APIs</p>
            </div>
          </div>
          <a
            href="https://github.com/megbuch/ledgerly"
            rel="noreferrer"
            target="_blank"
          >
            GitHub Repository
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://ledgerly-accounting.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            Live Preview
          </a>
        </div>
      </div>
      <div className="project-element row">
        <div className="mockups">
          <img
            id="jobseekr-frame"
            alt="jobseekr mockup"
            className="mockup hidden"
            src={jobseekrFrame}
            ref={(el) => (hiddenElsRef.current[6] = el)}
          />
          <img
            id="jobseekr-mobile"
            alt="jobseekr mockup"
            className="mockup hidden"
            src={jobseekrMobile}
            ref={(el) => (hiddenElsRef.current[7] = el)}
          />
        </div>
        <div
          className="project-info hidden"
          ref={(el) => (hiddenElsRef.current[8] = el)}
        >
          <h3>
            <a
              href="https://job-seekr.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              jobSeekr
            </a>
          </h3>
          <p>
            jobSeekr is the best way to organize all aspects of your job search.
            Ditch the spreadsheet and manage your job applications with
            descriptions, company and role information, contact information,
            status updates, dates, notes, and tasks while navigating a beautiful
            and responsive interface.
          </p>
          <div className="skills">
            <div className="skill language">
              <p>JavaScript</p>
            </div>
            <div className="skill language">
              <p>HTML5</p>
            </div>
            <div className="skill language">
              <p>CSS3</p>
            </div>
            <div className="skill language">
              <p>EJS</p>
            </div>
            <div className="skill library-framework">
              <p>Node.js</p>
            </div>
            <div className="skill library-framework">
              <p>Express</p>
            </div>
            <div className="skill library-framework">
              <p>Mongoose</p>
            </div>
            <div className="skill database">
              <p>MongoDB</p>
            </div>
            <div className="skill other">
              <p>Google OAuth 2.0</p>
            </div>
            <div className="skill other">
              <p>MVC Architecture</p>
            </div>
            <div className="skill other">
              <p>RESTful APIs</p>
            </div>
            <div className="skill design">
              <p>Responsive Design</p>
            </div>
          </div>
          <a
            href="https://github.com/megbuch/job-seekr-app"
            rel="noreferrer"
            target="_blank"
          >
            GitHub Repository
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://job-seekr.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            Live Preview
          </a>
        </div>
      </div>
      <div className="project-element row-reverse">
        <div className="mockups">
          <img
            id="npcgen-mobile"
            alt="npcgen mockup"
            className="mockup hidden"
            src={npcgenMobile}
            ref={(el) => (hiddenElsRef.current[9] = el)}
          />
          <img
            id="npcgen-frame"
            alt="npcgen mockup"
            className="mockup hidden"
            src={npcgenFrame}
            ref={(el) => (hiddenElsRef.current[10] = el)}
          />
        </div>
        <div
          className="project-info hidden"
          ref={(el) => (hiddenElsRef.current[11] = el)}
        >
          <h3>
            <a href="https://npcgen.com/" rel="noreferrer" target="_blank">
              NPC Generator
            </a>
          </h3>
          <p>
            Let NPC Generator inspire you. Create characters on the fly,
            generating randomized demographic information, appearance
            descriptions, ability scores, personality traits, plot hooks,
            alignments, and corresponding beliefs — all at the push of a button.
          </p>
          <div className="skills">
            <div className="skill language">
              <p>JavaScript</p>
            </div>
            <div className="skill language">
              <p>HTML5</p>
            </div>
            <div className="skill language">
              <p>CSS3</p>
            </div>
            <div className="skill design">
              <p>Responsive Design</p>
            </div>
          </div>
          <a
            href="https://github.com/megbuch/npc-generator"
            rel="noreferrer"
            target="_blank"
          >
            GitHub Repository
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://npcgen.com/" rel="noreferrer" target="_blank">
            Live Preview
          </a>
        </div>
      </div>
    </section>
  );
}
