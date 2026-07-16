import julySchedule from "../assets/schedule/schedule-july-2026.jpg";

export const monthlyEvents = {
  month: "July 2026",
  poster: julySchedule,
  note: "The schedule is subject to change. Updates or additional events will be announced later.",
  events: [
    {
      id: 1,
      date: "10–11 July",
      title: "Sunset Whisper: Promise by the Sea",
      artist: "Ginny",
      type: "Private event",
      location: "Registered attendees only",
      time: "TBC",
      details: ["Gifts accepted"],
    },
    {
      id: 2,
      date: "12 July",
      title: "Praew Talk on Stage 2026",
      artist: "Ginny & Jayna",
      type: "Public event",
      location: "Eden, 1st Floor, CentralWorld",
      time: "11:30 CEST",
      details: [
        "Fans may cheer throughout the event",
        "Limited space",
        "No gifts accepted",
      ],
    },
    {
      id: 3,
      date: "21 July",
      title: "A Summer Evening at DG Caffè Bangkok",
      artist: "Ginny",
      type: "Private event",
      location: "DG Caffè Bangkok, Floor 1, Siam Paragon",
      time: "13:00 CEST",
      details: [
        "Registered attendees only",
        "No public cheering area announced",
      ],
    },
    {
      id: 4,
      date: "23 July",
      title: "Thailand Y Content Awards 2025",
      artist: "Ginny & Jayna",
      type: "Public event",
      location: "MCC Hall, The Mall Lifestore Bangkapi",
      time: "12:00 CEST",
      details: [
        "Fans may cheer throughout the event",
        "Limited space",
        "No gifts accepted",
      ],
    },
    {
      id: 5,
      date: "26 July",
      title: "Royal Scoop with Jayna",
      artist: "Jayna",
      type: "Private event",
      location: "Registered attendees only",
      time: "08:00 CEST",
      details: ["Gifts accepted"],
    },
  ],
};

export const pastEvents = [
  // Beispiel für später:
  // {
  //   id: 1,
  //   title: "GinnyJayna 1st Fan Meeting – Manila",
  //   date: "December 6, 2025",
  //   location: "Samsung Hall, SM Aura Premier",
  //   type: "Fanmeeting",
  //   text: "A beautiful memory from The Tempting Venom tour.",
  //   cover: manilaCover,
  //   images: [manilaCover, manilaPhoto1, manilaPhoto2],
  // },
];