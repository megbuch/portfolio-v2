import gitfundedFrame from "../assets/mockups/gitfunded/gitfunded_frame.png";
import ledgerlyFrame from "../assets/mockups/ledgerly/ledgerly_frame.png";
import jobseekrFrame from "../assets/mockups/jobseekr/jobseekr_frame.png";
import npcgenFrame from "../assets/mockups/npcgen/npcgen_frame.png";
import simonsaysFrame from "../assets/mockups/simonsays/simonsays_frame.png";
import portfolioV1Frame from "../assets/mockups/portfolio_v1/portfolio_v1_frame.png";
import portfolioV2Frame from "../assets/mockups/portfolio_v2/portfolio_v2_frame.png";

const projects = [
  {
    id: 1,
    title: "GitFunded",
    mockup: gitfundedFrame,
    description: "Python, Django, PostgreSQL",
    repoLink: "https://github.com/megbuch/GitFunded",
    liveLink: "https://gitfunded.herokuapp.com/",
  },
  {
    id: 2,
    title: "Ledgerly Accounting",
    mockup: ledgerlyFrame,
    description: "JavaScript, React, Express, Node.js, MongoDB",
    repoLink: "https://github.com/megbuch/ledgerly",
    liveLink: "https://ledgerly-accounting.herokuapp.com/",
  },
  {
    id: 3,
    title: "jobSeekr",
    mockup: jobseekrFrame,
    description: "JavaScript, Express, Node.js, MongoDB",
    repoLink: "https://github.com/megbuch/job-seekr-app",
    liveLink: "https://job-seekr.herokuapp.com/",
  },
  {
    id: 4,
    title: "NPC Generator",
    mockup: npcgenFrame,
    description: "Vanilla JavaScript",
    repoLink: "https://github.com/megbuch/npc-generator",
    liveLink: "https://npcgen.com/",
  },
  {
    id: 4,
    title: "Simon Says",
    mockup: simonsaysFrame,
    description: "Vanilla JavaScript",
    repoLink: "https://github.com/megbuch/simon-says-game",
    liveLink: "https://simonsays-mb.netlify.app/",
  },
  {
    id: 5,
    title: "Portfolio v1",
    mockup: portfolioV1Frame,
    description: "Vanilla JavaScript",
    repoLink: "https://github.com/megbuch/portfolio",
    liveLink: "https://meghanbucher-v1.netlify.app/",
  },
  {
    id: 6,
    title: "Portfolio v2",
    mockup: portfolioV2Frame,
    description: "JavaScript, React",
    repoLink: "https://github.com/megbuch/portfolio-v2",
    liveLink: "https://meghanbucher.work",
  },
];

export default projects;
