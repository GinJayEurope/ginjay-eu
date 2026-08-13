import trailerArtwork from "../assets/news/pilot-wallpaper-2.PNG";
import milestonePoster from "../assets/news/lunar-secret-1m-views-poster.jpg";
import milestoneVideo from "../assets/news/lunar-secret-1m-views.mp4";
import { currentSchedule } from "./schedule";

export const news = [
  {
    id: 1,
    type: "Schedule",
    title: "Monthly Schedule",
    text: "Find the latest GinJay schedule poster created by our fanbase.",
    image: currentSchedule.poster,
    button: "View full schedule",
  },
  {
    id: 2,
    type: "Milestone",
    title: "1 Million Views!",
    text: "The Lunar Secret pilot has reached 1 million views on YouTube. Celebrate this special milestone with the edit created by GinJay Europe.",
    video: milestoneVideo,
    poster: milestonePoster,
  },
  {
    id: 3,
    type: "Spotlight",
    title: "New Series Trailer",
    text: "Watch the trailer for the upcoming series starring Ginny & Jayna and show your support by streaming and sharing it with fellow fans.",
    image: trailerArtwork,
    button: "Watch trailer",
    link: "https://www.youtube.com/watch?v=TDY-ZwAtCPI",
  },
  {
    id: 4,
    type: "Community",
    title: "Fan Projects",
    text: "Stay tuned — our very first fan project is getting ready to launch soon. We’re excited to share more with you very soon, so keep an eye on our channels for updates.",
    button: "Coming soon",
  },
];
