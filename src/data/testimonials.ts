export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  flag: string;
  country: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I literally looked around the world for such a program but could not find one that would allow us to use our own syllabus and lesson plans. The more my staff and I use SwimDesk the more we love it.",
    name: "Swim School Owner",
    role: "Independent Swim School",
    initials: "SW",
    flag: "🇦🇺",
    country: "Australia",
  },
  {
    quote: "Overall SwimDesk gives parents a clear idea of progress and it improves communication between us and the parents. I also love the function to send a bulk email to all swim lesson parents about important communications.",
    name: "Aquatics Coordinator",
    role: "Aquatic Centre",
    initials: "AC",
    flag: "🇦🇺",
    country: "Australia",
  },
  {
    quote: "I do like the SwimDesk system — it's so easy to follow. I love the fact that once Hailey has been assessed her results are on the SwimDesk within the same day. I'm always kept updated with her progress and can see exactly where she is and what she needs to work on.",
    name: "Swim School Parent",
    role: "SwimDesk Parent Portal User",
    initials: "SP",
    flag: "🇦🇺",
    country: "Australia",
  },
];
