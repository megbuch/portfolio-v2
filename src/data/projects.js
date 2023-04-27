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
    titleGitHub: "GitFunded GitHub Link",
    ariaLabelGitHub: "GitFunded GitHub Link",
    titleLive: "GitFunded Live Link",
    ariaLabelLive: "GitFunded Live Link",
  },
  {
    id: 2,
    title: "Ledgerly Accounting",
    mockup: ledgerlyFrame,
    description: "JavaScript, React, Express, Node.js, MongoDB",
    repoLink: "https://github.com/megbuch/ledgerly",
    liveLink: "https://ledgerly-accounting.herokuapp.com/",
    titleGitHub: "Ledgerly GitHub Link",
    ariaLabelGitHub: "Ledgerly GitHub Link",
    titleLive: "Ledgerly Live Link",
    ariaLabelLive: "Ledgerly Live Link",
  },
  {
    id: 3,
    title: "jobSeekr",
    mockup: jobseekrFrame,
    description: "JavaScript, Express, Node.js, MongoDB",
    repoLink: "https://github.com/megbuch/job-seekr-app",
    liveLink: "https://job-seekr.herokuapp.com/",
    titleGitHub: "jobSeekr GitHub Link",
    ariaLabelGitHub: "jobSeekr GitHub Link",
    titleLive: "jobSeekr Live Link",
    ariaLabelLive: "jobSeekr Live Link",
  },
  {
    id: 4,
    title: "NPC Generator",
    mockup: npcgenFrame,
    description: "Vanilla JavaScript",
    repoLink: "https://github.com/megbuch/npc-generator",
    liveLink: "https://npcgen.com/",
    titleGitHub: "NPC Generator GitHub Link",
    ariaLabelGitHub: "NPC Generator GitHub Link",
    titleLive: "NPC Generator Live Link",
    ariaLabelLive: "NPC Generator Live Link",
  },
  {
    id: 5,
    title: "Simon Says",
    mockup: simonsaysFrame,
    description: "Vanilla JavaScript",
    repoLink: "https://github.com/megbuch/simon-says-game",
    liveLink: "https://simonsays-mb.netlify.app/",
    titleGitHub: "Simon Says GitHub Link",
    ariaLabelGitHub: "Simon Says GitHub Link",
    titleLive: "Simon Says Live Link",
    ariaLabelLive: "Simon Says Live Link",
  },
  {
    id: 6,
    title: "Portfolio v1",
    mockup: portfolioV1Frame,
    description: "Vanilla JavaScript",
    repoLink: "https://github.com/megbuch/portfolio",
    liveLink: "https://meghanbucher-v1.netlify.app/",
    titleGitHub: "Portfolio V1 GitHub Link",
    ariaLabelGitHub: "Portfolio V1 GitHub Link",
    titleLive: "Portfolio V1 Live Link",
    ariaLabelLive: "Portfolio V1 Live Link",
  },
  {
    id: 7,
    title: "Portfolio v2",
    mockup: portfolioV2Frame,
    description: "JavaScript, React",
    repoLink: "https://github.com/megbuch/portfolio-v2",
    liveLink: "https://meghanbucher.work",
    titleGitHub: "Portfolio V2 GitHub Link",
    ariaLabelGitHub: "Portfolio V2 GitHub Link",
    titleLive: "Portfolio V2 Live Link",
    ariaLabelLive: "Portfolio V2 Live Link",
  },
];

export default projects;
