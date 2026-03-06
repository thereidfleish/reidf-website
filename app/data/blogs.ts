export interface Blog {
    id: string;
    title: string;
    dates: string;
    coverImage: string;
    closingWord: string;
}

export const blogs: Blog[] = [
    {
        id: "reflecting-on-my-first-semester-at-cornell",
        title: "Reflecting on my First Semester at Cornell",
        dates: "December 27th, 2021",
        coverImage: "/blog/12-27-21/1.jpg",
        closingWord: "the",
    },
    {
        id: "how-life-can-change-in-a-moment",
        title: "How Life Can Change in a Moment",
        dates: "January 18th, 2021",
        coverImage: "/blog/1-18-21/1.jpg",
        closingWord: "ones,",
    },
    {
        id: "thank-a-teacher",
        title: "Thank a Teacher",
        dates: "June 23rd, 2020",
        coverImage: "/blog/6-23-20/1.png",
        closingWord: "crazy",
    },
    {
        id: "mac-vs-pc",
        title: "Mac v.s. PC",
        dates: "March 1st, 2020",
        coverImage: "/blog/3-1-20/1.png",
        closingWord: "the",
    },
    {
        id: "why-i-love-robotics",
        title: "Why I Love Robotics",
        dates: "January 1st, 2020",
        coverImage: "/blog/1-1-20/1.jpg",
        closingWord: "to",
    },
    {
        id: "why-i-started-this-blog",
        title: "Why I Started This Blog",
        dates: "November 1st, 2019",
        coverImage: "/blog/11-1-19/1.png",
        closingWord: "Here's",
    },
];

export const hiddenBlogs: Blog[] = [
    {
        id: "how-life-can-change-in-a-moment-part-2",
        title: "How Life Can Change in a Moment, Part 2",
        dates: "January 30th, 2022 (Updated March 26th, 2022 and August 4th, 2022)",
        coverImage: "/blog/1-30-22/1.jpg",
        closingWord: "misfits",
    },
];
