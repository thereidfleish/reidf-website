export type MediaItem =
    | { type: "image"; src: string }
    | { type: "video"; src: string }
    | { type: "carousel"; slides: { src: string }[] };

export interface ProjectDetail {
    id: string;
    longDescription: string;
    media?: MediaItem[];
}

export const projectDetails: ProjectDetail[] = [
    {
        id: "lifted",
        longDescription: `
    <p>Cornell Lifted is a fully student-run semesterly tradition where Cornellians come together to lift the spirits of their friends, faculty, and staff at Cornell on the last day of classes! It's a time to express gratitude, spread positivity, and watch Cornell transform into a vibrant landscape of heartfelt messages on the last day of classes.</p>
    <p>Lifted is quite a difficult project to pull off, both logistically and technically. On the user-facing side, it requires Cornellians to send messages and become notified of messages sent to them. On the backend, it requires verifying that senders inputted the correct recipient NetID, converting messages into PDFs, printing messages, sending thousands of emails, send eLifted messages, and so much more. Previously, each of these processes took countless hours of manual work.</p>
    <p>After helping organize Lifted for a semester, I decided to create a web app to automate most of these processes. The web app allows Cornellians to sign in with their NetID, search for others by name, and send messages. Recipients are automatically emailed when they've been sent a message ("Surprise! You've been Lifted!") and senders can edit and delete their own messages if they choose. Recipients can also view any eLifted messages sent to them. Finally, the web app contains a fully-fledged admin dashboard, which allows Lifted admin to manage the form, view all messages, convert messages into PDFs, configure automated emails, enable/disable viewing messages, and more.</p>
    <p>We piloted half of these features during the Fall 2024 semester's Lifted for about 2,500 participants and it was a big success.  We fully utilized this web app for the Spring 2025 semester, where we had over 7,500 participants!</p>
    `,
        media: [
            { type: "image", src: "/projects/lifted/1.png" },
            {
                type: "carousel",
                slides: [
                    { src: "/projects/lifted/2.png" },
                    { src: "/projects/lifted/3.png" },
                    { src: "/projects/lifted/4.png" },
                    { src: "/projects/lifted/5.png" },
                ],
            },
        ]
    },
    {
        id: "morrison",
        longDescription: `
    <p>However, some of the other dining halls never struggled with this. I wondered: what do they do differently than Morrison? For starters, they're a lot smaller. But I also noticed that their dish return areas were more efficient by having separate bins or chutes where students place utensils. This not only helps separate the utensils from the plates, bowls, and cups, but also takes care of the sorting work.</p>
    <p>I wondered: How could something like this be applied to Morrison? I started by gathering a lot of information about the problem. I talked to the manager of Okenshields, a dining hall that had separate utensil chutes, to understand how much it helps them. I also talked to the head chef at Morrison to understand their struggles and took a trip to their dish room. I learned that the issues spanned much more than separating utensils — for example, the dish room is underground, requiring a lot of time and effort just to bring dirty items downstairs and clean items back upstairs for distribution.</p>
    <p>However, I still really wanted to try to help by solving the utensil problem. I assembled a team from the Residential Sustainability Leaders club and went to work on designing the first prototype! My first idea consisted of placing bins on the moving carousels themselves. It was really fun to come up with this idea; we made many drawings, weighed utensils and other items, talked to some other managers, and discussed ideas in the Student Assembly Dining Committee meetings. <a href="https://docs.google.com/presentation/d/1atQwE76i93dTsDcAA1SKUaZvWUqjdBBBwFJH_5KBC6E/edit?usp=sharing">We made a presentation</a> and I pitched the idea to the general manager of Morrison and the director of Cornell Dining. They liked the idea, but said that it might not be feasible once Morrison returned to fully reusable dishware (due to space constraints in both the dish drop and dish room).</p>
    <p>While this was a little discouraging, it didn't stop me from thinking of additional ideas. I spent a lot of time over winter break and during the beginning of the Spring 2023 semester thinking of additional ideas, and after lots of iterations, I came up with the idea of simply having bins underneath the carousels. With this system, students would place utensils in the bins and staff would bring the bins to the upper-level dish room for washing. The Morrison GM liked the idea, and while it took a lot of effort to implement it because it was low on their priorities, with enough convincing and influence, I made it happen!</p>
    <p>At first, I was really worried that the bins would be unsuccessful. It appeared that students were not following the sorting properly, the labels would fall off, and sometimes the bins would become really full. However, after a little while, improvements were made and the system started to work great.</p>
    <p>Overall, the system was a big success at Morrison. It reduces the number of items placed on the dish carousel and helps staff wash utensils quicker, which helps the small number of staff they have. Most importantly, since its implementation, this system has helped Morrison switch to reusable dishware, preventing tens of thousands of disposable items from entering the landfills each day! Additionally, according to dishwashing staff, the system has made working conditions safer by significantly reducing the amount of utensils falling from the dish return onto the staff in the dish room below.</p>
    <p>We also implemented similar utensil separation systems in Bethe and Becker Dining Halls, which has helped both operate more efficiently. A different dining hall, North Star, also adopted similar bins!</p>
    <p>At the end of the Fall 2023 semester, I got my hands dirty (literally) and worked in the Morrison dish room for two shifts. I learned so much more about their struggles and have been thinking of additional ways to help. Unfortunately, most of the improvements will require large investments in renovating the place, but perhaps I can run a cost-benefit analysis to convince them to do so. In the meantime, I will focus on improving the usage of the bins through better labeling, signage, and education.</p>
    <p>Overall, this has been a super interesting project in so many facets, and I am glad that I became involved!</p>
    <p>Interestingly, this project has become quite well-known at Cornell. I have been featured in a Cornell Daily Sun article and recognized by Cornell President Kotlikoff in the 2024 State of the University Address for my work on this project.  See the links above!</p>
    `,
        media: [
            { type: "image", src: "/projects/morrison/1.jpg" },
            { type: "image", src: "/projects/morrison/2.jpg" },
            {
                type: "carousel",
                slides: [
                    { src: "/projects/morrison/6.jpg" },
                    { src: "/projects/morrison/7.jpg" },
                    { src: "/projects/morrison/8.jpg" },
                    { src: "/projects/morrison/9.jpg" },
                    { src: "/projects/morrison/10.jpg" },
                    { src: "/projects/morrison/11.jpg" },
                    { src: "/projects/morrison/12.jpg" },
                    { src: "/projects/morrison/13.jpg" },
                    { src: "/projects/morrison/14.jpg" },
                ],
            },
            {
                type: "carousel",
                slides: [
                    { src: "/projects/morrison/3.jpg" },
                    { src: "/projects/morrison/4.jpg" },
                    { src: "/projects/morrison/5.jpg" },
                ],
            },
        ]
    },
    {
        id: "ccra-website",
        longDescription: `
    <p>Over the course of a few weeks, we interviewed members of our audience to discover their goals, created sketches of the site, and coded it in HTML/CSS/JS. It was a fun group project.</p>
    <p>During the winter break, I decided to redesign and re-code our website, this time using a CSS/JS framework called Bootstrap. This made the site look and function a little nicer.</p>
    <p>Overall, this was a really fun project! It was the first site I fully designed with HTML/CSS/JS. In the future, I hope to re-write the site using a dynamic framework like PHP to make it easier to update certain components like the menu bar.</p>
    `,
        media: [
            {
                type: "image",
                src: "/projects/ccra-website/1.png",
            },
            {
                type: "image",
                src: "/projects/ccra-website/2.png",
            },
        ]
    },
    {
        id: "fumehood",
        longDescription: `
    <p>First, some background - fume hoods, found in most laboratories, are one of the most energy-wasting devices on campus (not because they consume lots of energy, but rather because they continuously vent heated/air-conditioned air out of the building, requiring new unconditioned air to replace it). While fume hoods are necessary to be opened during experiments, many people forget to close them after they are done, contributing to wasted energy.</p>
    <p>The objective of the fume hood dashboard is to inform lab managers, lab members, and the general public of fume hoods that have been left open for an extended period of time, especially in unoccupied lab spaces. To do this, we query the WebCTRL API (WebCTRL is Cornell's building controls system) to gather fume hood sash position, airflow, and room occupancy data from 1,500+ fume hoods across campus.</p>
    <p>By querying trend history of these data, we have done some calculations into how much energy was wasted from fume hoods over the past year, and how much could have been saved had the sash been closed during unoccupied periods, and the results are significant.</p>
    <p>We are currently developing the dynamic dashboard using Plotly Dash (essentially you write code in Python for querying/processing the data and you can display it in nice Plotly graphs, along with standard HTML elements). I have never developed a dashboard quite like this and it certainly is challenging! Additionally, we are working on designing and implementing a DynamoDB database to store information about buildings, labs, and fume hoods that is necessary for the dashboard.</p>
    <p>One thing you may be thinking is, "well, Reid, you could build an amazing dashboard, but if no one will use it, then you did not solve the problem!" And you are completely correct. To supplement the dashboard, we are planning to run inter-lab competitions with a prize given to the labs which use the least energy. We are also planning to develop signage to place next to fume hoods and send automated emails to labs which are using the most energy.</p>
    `,
        media: [
            { type: "image", src: "/projects/fumehood/1.png" },
            { type: "image", src: "/projects/fumehood/2.png" },
        ]
    },
    {
        id: "currents",
        longDescription: `
    <p>You are probably wondering a few things, such as how the app can control the HVAC systems and what happens if the occupant does not follow their calendar.</p>
    <p>I'll address the first point. Interestingly, much of Cornell's HVAC systems are already controlled by "smart" connected systems from AutomatedLogic. We are simply tapping into AutomatedLogic's API to control these equipment through an app. It's actually really cool!</p>
    <p>For the second point, the goal of this project is to eliminate as much hardware as possible, which is why we don't consider motion sensors. To account for edge cases, the app has a manual override feature in case occupants don't leave or arrive earlier than expected. However, we understand that this isn't enough, so there is a team working to develop a ML model to predict and respond to these edge cases. It will continuously learn from user behavior as well. We also designed a few questions for users to answer before use, such as whether they typically attend online meetings in or out of their office.</p>
    `,
        media: [
            { type: "image", src: "/projects/currents/1.png" },
            { type: "image", src: "/projects/currents/2.png" },
        ]
    },
    {
        id: "myace",
        longDescription: `
    <p>This was my first experience working on an app as part of a team, rather than individually. I could focus on the design and frontend development while my teammates focused on the backend development, which was nice. This was also the first time I was shipping an app to potential customers, so I ensured that my work was top-notch. I learned a lot about fetching and loading data efficiently and concurrently, which was very useful. We worked really well as a team, and we ended up making a very good product!</p>
    <p>However, as entrepreneurs, we were a bit naive. We didn't do much market research or user interviews, so upon releasing the app, we didn't get much traction. So, we decided to go back to the drawing board and instead design an app specific to tennis clubs' needs rather than a catch-all social network. After showing our designs to some clubs, we received generally positive feedback, and were ready to develop!</p>
    <p>Well…not quite. We are now, in January 2023, realizing that our product is a bit too niche and will require too much customization for each club. So now, we are thinking of other entrepreneurial ideas. I'll keep you posted!</p>
    `,
        media: [
            {
                type: "carousel",
                slides: [
                    { src: "/projects/myace/1.jpg" },
                    { src: "/projects/myace/2.jpg" },
                    { src: "/projects/myace/3.jpg" },
                    { src: "/projects/myace/4.jpg" },
                    { src: "/projects/myace/4.jpg" },
                    { src: "/projects/myace/5.jpg" },
                    { src: "/projects/myace/6.png" },
                    { src: "/projects/myace/7.png" },
                    { src: "/projects/myace/8.png" },
                ],
            },
        ]
    },
    {
        id: "quarantine-tutors",
        longDescription: `
    <p>I was tasked to make an app to facilitate student-tutor communications. This was a challenging app to make, as I didn't have much experience with backend. I decided to use Firebase for a login/backend/database, and while it was initially very hard to set up, it worked well! The most challenging aspect was integrating it with SwiftUI, as at the time Firebase's docs were exclusive to UIKit.</p>
    <p>The hardest part was actually releasing the app to the App Store. It was rejected for containing the word "Quarantine," which apparently was not allowed to be used in an app during the pandemic. So, I had to remove all traces of the word and call it "QTutors."</p>
    <p>My girlfriend at the time and I had a lot of fun adding tutor data into the app and testing it with each other. We also hid a small Easter Egg in the app. If you can find it, send me an email!</p>
    <p>Overall, it was a successful app. While it didn't receive as much traffic as I would have liked, it was a great learning experience for me, and is still an app I revisit on my home screen time to time!</p>
    `,
        media: [
            {
                type: "carousel",
                slides: [
                    { src: "/projects/qt/1.jpg" },
                    { src: "/projects/qt/2.jpg" },
                    { src: "/projects/qt/3.jpg" },
                    { src: "/projects/qt/4.jpg" },
                    { src: "/projects/qt/5.jpg" },
                    { src: "/projects/qt/6.jpg" },
                ],
            },
        ]
    },
    {
        id: "shs-app",
        longDescription: `
    <p>I wanted to make this app cloud-based, so it could provide information to students in real-time. To do that, I used Apple's CloudKit, which is very fast and easy to use.</p>
    <p>I spent about two weeks straight, 10 hours per day making this app, and it was incredibly fun to do. Like, really, really, REALLY fun. I loved working through all of the issues I had along the way, and I had learned to make my code shorter and more re-usable (compared to Wash Streaks).</p>
    <p>The app provides users with the following:</p>
    <ul>
        <li>LIVE updates to the school calendar, morning announcements, upcoming events, and important info</li>
        <li>Notifications on what type of school day it is</li>
        <li>Easy way to view and contact all faculty and staff</li>
        <li>Important schedules and websites</li>
        <li>…and much more!</li>
    </ul>
    <p>Designated users can also update information within the app, and publish it to every single student's iPad. That's pretty cool if you ask me.</p>
    <p>Unfortunately, I tried very hard to actually get this published, but was unable to. The building principal and owner of the old app approved my new app, but I was unable to get in touch with the administrator who runs the Great Neck Public School's App Store Connect account in order to upload the app to the App Store.</p>
    `,
        media: [
            {
                type: "carousel",
                slides: [
                    { src: "/projects/shs-app/1.png" },
                    { src: "/projects/shs-app/2.png" },
                    { src: "/projects/shs-app/3.png" },
                    { src: "/projects/shs-app/4.png" },
                    { src: "/projects/shs-app/5.png" },
                    { src: "/projects/shs-app/6.png" },
                    { src: "/projects/shs-app/7.png" },
                    { src: "/projects/shs-app/8.png" },
                    { src: "/projects/shs-app/9.png" },
                    { src: "/projects/shs-app/10.png" },
                    { src: "/projects/shs-app/11.png" },
                    { src: "/projects/shs-app/12.png" },
                ],
            },
        ]
    },
    {
        id: "save-the-frontline",
        longDescription: `
    <p>I spent a week or so working to redesign the entire site from top to bottom. I taught myself WordPress and built up the site, one page at a time. It was quite fun, especially since this was my first web project for something very important. The GoFundMe campaign ended up being a success, and many people commented that the website looked nice, which made me really happy.</p>
    <p>Since that time in May, I have been constantly updating the pages of the site and adding some other ones along the way as well. In order to speed up the process of updating the donation numbers on the front page, I created a PHP script that parsed a Google Sheets file and put that data into the site. That way, all that I needed to update was the Google Sheets file.</p>
    `,
        media: [
            {
                type: "carousel",
                slides: [
                    { src: "/projects/save-the-frontline/1.png" },
                    { src: "/projects/save-the-frontline/2.png" },
                    { src: "/projects/save-the-frontline/3.png" },
                    { src: "/projects/save-the-frontline/4.png" },
                ],
            },
        ]
    },
    {
        id: "wash-your-hands-streaks",
        longDescription: `
    <p>I needed to start small. So, everyday from March 15th, 2020, I worked on Swift and SwiftUI courses from an amazing site called HackingWithSwift. If I had done the 100 days of lessons, I would have had the knowledge to build an extraordinary first app. But I wanted to do something now, I didn't want to have to wait till June.</p>
    <p>Then it just hit me — why not, for a small app, create one to remind users to wash their hands during COVID-19? After all, at the time, people thought that washing hands would end the pandemic, so I thought it would be a genius app!</p>
    <p>So I looked through the App Store for any apps like that…and nothing. Great! (While developing the app a few others came out, though).</p>
    <p>I started conceptualizing the idea in my head and decided to make it into a streak system — the more people washed their hands, the more they were rewarded. I had known just enough SwiftUI at that point that I was confident I could make the app, and so I set to work.</p>
    <p>I soon found that it wasn't easy. Designing the UI was pretty simple, but actually getting everything to work properly was very hard. I had to work with dates a lot, and account for every possible thing the user would do — whether it was open the app during their streak, close it while they were getting one, wait a few days after washing hands, not have internet connection to download the current total streaks, and so on. My code resulted in a ton of if statements and copied and pasted code (I was not aware of the idea of writing once and using everywhere yet!). I also wrote the entire app in a single view 😅.</p>
    <p>But in the end, after a week or so of 10-hour days working on it, it was complete. I went to submit it to the App Store, crossed my fingers, aaanndddd…rejected!</p>
    <p>I really had no idea why it would get rejected. Was it not "unique" enough? Did it not work on their device? Did they not like the idea??? But when I opened the Resolution Center, I was really quite surprised at what the issue was. Apparently they did not allow any references to "COVID-19" in the app since they only wanted COVID-19-related apps to be published by official organizations, not some high schooler on Long Island. So all I had to do was delete any references to "COVID-19" in the app by marketing it slightly differently, and…accepted!</p>
    <p>The app has about 120 hundred downloads as of August 20, 2020. Not very many, but enough that I am satisfied. It was a very fun app to build, and I am looking forward to building many more later in life.</p>
    `,
        media: [
            {
                type: "carousel",
                slides: [
                    { src: "/projects/wash-your-hands-streaks/1.png" },
                    { src: "/projects/wash-your-hands-streaks/2.png" },
                    { src: "/projects/wash-your-hands-streaks/3.png" },
                    { src: "/projects/wash-your-hands-streaks/4.png" },
                    { src: "/projects/wash-your-hands-streaks/5.png" },
                    { src: "/projects/wash-your-hands-streaks/6.png" },
                ],
            },
        ]
    },
    {
        id: "scouting-app",
        longDescription: `
    <p>So I set to work on a UI, and this is what I came up with. It's a much more visual version of anything that's already out there.</p>
    <p>Over the next year, the Rebel Robotics App Team did a phenomenal job coding the app using React Native. Since then, we've used the app for all our scouting and it's been a success! We expect to continue to update it for each season.</p>
    `,
        media: [
            {
                type: "image",
                src: "/projects/scouting-app/1.jpg",
            },
        ]
    },
    {
        id: "2638-stickers",
        longDescription: `
    <p>So I set out to do it for my robotics team. It was actually super easy to do — it was literally just drag-and-drop the images to a folder and Xcode did the rest.</p>
    <p>But with all easy things, there were sneaky things too. After importing all of the images, I soon realized that they needed to be transparent so that when a user places it on a text bubble it doesn't look ugly. So into Photoshop I went.</p>
    <p>Then, just as I thought I was done, I realized that the larger you made the image, the smaller it appeared when dragged onto a text bubble by the user (weird, huh?). So into Preview to resize all the images I went.</p>
    <p>Finally, it was done! I archived the file, uploaded it to App Store connect, waited a few days, aaaaanddd…rejected.</p>
    <p>They said that the logo I used for the app was too similar to my other app I had already published, which was a scouting app for iOS. Haha. So into Photoshop again I went, this time to produce a cool sticker-like effect which ultimately allowed the app to get approved!</p>
    <p>This wasn't too much of an exciting project, but people on the team definitely do like it and definitely do use it. I still update it time to time with new stickers as well.</p>
    `,
        media: [
            {
                type: "carousel",
                slides: [
                    { src: "/projects/2638-stickers/1.jpg" },
                    { src: "/projects/2638-stickers/2.jpg" },
                    { src: "/projects/2638-stickers/3.jpg" },
                ],
            },
        ]
    },
    {
        id: "2638-website",
        longDescription: `
    <p>I spent about 10 hours each day during the entire April break of my freshman year in high school doing this, building each page from scratch on RapidWeaver. The intention was to make the site more consistent and responsive, so it would look good on not just a desktop computer but also a phone.</p>
    <p>Now that I set up my server, I figured that I would figure out how to host the site on the server — so I did just that. After another week of configuring that by playing around with DNS and SSL and a bunch of other annoying things, I finally got it working. I would say the hardest part was dealing with the DNS and the way it caches on your computer. There were many changes that I made, and I soon found myself using 5 different web browsers to make sure things with the DNS worked. The SSL was also tricky, as my Synology server did not want to use any SSL certificate I gave it at first.</p>
    <p>Now gnsrobotics.com was hosted on my server! Not only did I find that to be super cool at the time but also realized that it saved our team about $70/mo on website costs. But self-hosting a website (properly) is much harder than you think.</p>
    <p>To this day, I still manage the website and host it on my Synology. While it is quite time consuming at times, I really do enjoy managing the site. In the last picture here, you can see how I edit the site.</p>
    <p>The one thing about this that is not ideal is that the website only works when my power is on — which is a huge majority of the time, but nevertheless it will go out every once in a while and make the website inaccessible. Yet, I think the virtually unlimited storage I get (and also the ability to just drag and drop a file via Finder to have it accessible with a web link) greatly outweighs that drawback.</p>
    <p>When I first got the site up and running, it was only running on a 75mbps upload/download speed. It was fine for the site itself, but made downloading videos hosted on it quite slow. So a couple months later, we upgraded our Internet speed to Verizon's 1gbps upload/download speed (for actually $200 cheaper/mo compared to the old speed (don't even get me started about why. I may do a blog post about that in the future)) and that improved things dramatically.</p>
    <p>Overall, the whole website redesign experience was an exhausting one but a fun one nonetheless. I've taught a couple other people how to manage the website when I'm done with high school, and I can't wait to see how they take the site to the next level.</p>
    <p>Here is our old site: <a href="https://gnsrobotics.wixsite.com/2638">https://gnsrobotics.wixsite.com/2638</a></p>
    `,
        media: [
            {
                type: "image",
                src: "/projects/2638-website/1.png",
            },
            {
                type: "image",
                src: "/projects/2638-website/2.jpg",
            },
            {
                type: "image",
                src: "/projects/2638-website/3.jpg",
            },
            {
                type: "image",
                src: "/projects/2638-website/4.png",
            },
        ]
    },
    {
        id: "robotics-cad",
        longDescription: `
    <p>The top slideshow contains many of my CAD designs. These may look simple, but in reality they take tons of careful design, planning, and testing before they make it onto the final robot.</p>
    <p>The bottom slideshow contains pictures of some of these designs on the final robot. Though I was involved in CAD more than the fabrication of my designs, I have also done some of the fabrication well.</p>
    <p>Update 9/27/21: I miss roboticssssss</p>
    `,
        media: [
            {
                type: "carousel",
                slides: [
                    { src: "/projects/robotics-cad/1.png" },
                    { src: "/projects/robotics-cad/2.png" },
                    { src: "/projects/robotics-cad/3.png" },
                    { src: "/projects/robotics-cad/4.png" },
                    { src: "/projects/robotics-cad/5.png" },
                    { src: "/projects/robotics-cad/6.png" },
                ],
            },
            {
                type: "carousel",
                slides: [
                    { src: "/projects/robotics-cad/7.jpg" },
                    { src: "/projects/robotics-cad/8.jpg" },
                    { src: "/projects/robotics-cad/9.jpg" },
                    { src: "/projects/robotics-cad/10.jpg" },
                    { src: "/projects/robotics-cad/11.jpg" },
                    { src: "/projects/robotics-cad/12.jpg" },
                    { src: "/projects/robotics-cad/13.jpg" },
                ],
            },
        ]
    },
    {
        id: "videowall",
        longDescription: `
    <p>The plan was to hang them up on the middle school hallway to play content across both screens. But even more so, the challenge was getting them to sync with each other so a movie could move across both screens, or be half-and-half, or any combination of fractions. Not only that, but we wanted to schedule content to play at certain times. So it was my job how to figure out how to get all this to work.</p>
    <p>I thought it would be easy. But oh boy, far from easy it was. After hanging the monitors, I realized that I would need to connect to them within the school's network. Turns out, the school blocks all such connections. So away on the phone with IT I went.</p>
    <p>Next was installing the software for the monitors — MagicInfo. This took DAYS to do, since I needed to install Bootcamp on a few Macs before I finally found one that would work (there were no PCs there and MagicInfo is only a PC app). Then, after installing, I realized I had installed the wrong version. Uninstalling and reinstalling did the trick.</p>
    <p>After a week or so figuring all that out, it was time to figure out how to connect the screens to each other. We had numerous other firewall issues with this, and soon a licensing issue with the monitors as well, so I found myself on the phone with Samsung for hours for a few days straight. Finally though, everything was working! I then taught the other members of the TV studio how to actually work the thing.</p>
    <p>School had started, and things went really well with the monitors…Until just a month later when the monitors disconnected. Back to the studio I went, calling Samsung again, and realized that I needed to update the software once more.</p>
    <p>It was good for the year, but then broke again by the start of next summer. It didn't matter, because the studio had ordered TWO MORE huge monitors for me to add to the other two!! The installation wasn't hard, but it was extremely hard to actually make them sync. Hours on the phone with Samsung, another software update, another licensing issue later, and finally things were working again.</p>
    <p>But it didn't stop there. Numerous issues happened again when the school changed their firewall system. Now I needed to work with IT again to make it work, which ended up breaking other stuff meaning I had to do a full uninstall and reinstall AGAIN!</p>
    <p>Since then, it's been great, thankfully. Honestly, the software and hardware is pretty bad, but it did make for some very fun tinkering around. It was cool to learn all about undertaking such a project — one which looks simple but ends up having many issues.</p>
    `,
        media: [
            { type: "image", src: "/projects/videowall/1.jpg" },
            { type: "image", src: "/projects/videowall/2.jpg" },
            {
                type: "video",
                src: "/projects/videowall/3.mov",
            }
        ]
    },
    {
        id: "synology",
        longDescription: `
    <p>Up until then, I stored all my files on external hard drives. If I wanted to access something on another computer, I would have to close my work on one, unplug the hard drive, plug it into the other computer, and then resume work. This was a nightmare, and I soon realized that a NAS would be able to solve this problem for me.</p>
    <p>So I went to work researching. After days of research, I came across a YouTube video from Lon.TV reviewing the WD My Cloud NAS product. I thought it was pretty cool and also not too expensive so I went ahead and bought one.</p>
    <p>I initially liked it a lot, and found it quite useful. Yet, I soon began to come up with an idea: wouldn't it be nice to use this server for my robotics team to store our CAD files? Given that we couldn't work on them from home, I thought this was a brilliant idea.</p>
    <p>So I loaded up the WD My Cloud app on the school computers to allow connection to my device, aannndddd...I needed an administrator to install.</p>
    <p>I realized that wasn't going to work. After contacting the head of technology for the district to grant me permission and being denied, I looked for another way.</p>
    <p>I remembered that in one of Lon.TV's videos he compared the WD My Cloud to something called a Synology NAS. He kept saying that the Synology was his favorite and that it had better features. So I went back to his channel to look for Synology videos, and sure enough, there were plenty.</p>
    <p>Upon watching one of them, I discovered a feature called WebDAV. After some research, I realized that you could connect to this directly within the Windows file explorer and would be perfect for use at school since it would mean I wouldn't need to get admin permissions to install something.</p>
    <p>But before I jumped ship from WD to Synology, I wanted to test the WebDAV capability out first. I went ahead and bought myself a little Apple AirPort Express wireless router and hooked it up to an old iMac that I configured macOS Server on (thanks to Todd Olthoff's videos on YouTube for helping me out with this). After days of getting that to work, I went to school for the moment of truth…and WebDAV worked!</p>
    <p>So immediately I transferred everything on my WD to an external hard drive and set out to return it. Luckily I had bought it on Amazon during the period where they were giving extended return windows due to the holidays, so I just barely made it within 3 months by the end of February. After the return was successful, I bought my Synology DS 218j.</p>
    <p>Setting it up wasn't too bad, and when I finally saw all the features it had, I realized why Lon had liked this so much. You could just do so much with it, from hosting a website to even hosting a chat room.</p>
    <p>But here's where the hard part came — setting it up. This took weeks, and in those weeks I spent hours each day learning about domain names, SSL, HTTP protocols, DNS records, DDNS, port forwarding, IP Addresses, and so much more. But finally, in the end, I was able to connect server.reidf.net:8080 to WebDAV and get it to work on the school computers. The CAD server was finally working, and it was instantly a huge help for our team. We still use it to this day! I also began to use it for other things like hosting some websites as well as general NAS storage.</p>
    <p>Overall, this whole experience was very challenging at times but also super fun, and I learned a lot just from doing it. There were countless problems I ran into along the way, but ultimately, it works great. It's been about six years since I did this from when I'm editing this now (1/21/24), and I couldn't be happier with it. I've also helped two of my friends set up Synologys of their very own!</p>
    `,
        media: [
            { type: "image", src: "/projects/synology/1.jpg" },
        ]
    },
    {
        id: "pancreatic-cancer-project",
        longDescription: `
    <p>Sounds ambitious, right? It was for me at the time since I only had some experience with machine learning. I started by looking for a dataset to use (because hey, that’s the most important thing) and found one that was public and free for anyone to use — the IPUMS dataset. I started researching variables that were risk factors of pancreatic cancer and made sure to include them in the dataset. That was the easy part. The harder part was actually making these variables work with my model. I won’t get into the details here since they are fairly complicated, but essentially the models that I was using needed to have a clean, balanced dataset. That meant that it needed to be free of missing values and relatively balanced (an equal ratio of pancreatic cancer to non-pancreatic cancer cases). This took months of revisions, reworkings, re-codings, and developing methods to artificially up-sample the dataset, but eventually I was able to develop a somewhat perfect dataset that would be ready to feed into the models.</p>
    <p>Now, let's talk about the models. I essentially had to teach myself how to train an Artificial Neural Network and Logistic Regression model using Python in TensorFlow. Using YouTube, TowardsDataScience, StackOverflow, TensorFlow’s own tutorials, and many, many, many other websites and resources, I was finally able to run my models for the first time. Comparatively, that was the easy part. The harder part was actually getting the models to perform well. This took another month or so (it went quicker because this part occurred during the COVID-19 pandemic, so I had more time on my hands) of testing every single possible combination of batch size, activation function, pre-processing technique, feature column, number of layers, number of neurons in each layer, early-stopping method, and all other hyperparameters in order to get the best result.</p>
    <p>In the end though, after many months of work, I had a working product (if you would like to learn about every specific step in my project, you may email me and I would be more than happy to discuss) — I was finally done!</p>
    <p>…Ehhhh no I wasn’t. I really wanted to improve this project significantly during the summer entering 12th grade. The project was far from perfect, mainly in regards to my dataset, and it didn’t have a useful way for patients to actually use the model. So, to solve those problems, I had to set out on two new paths – requesting better, additional datasets and embedding the model within a mobile app.</p>
    <p>The former was the harder of the two. I had sent out 20 or so emails to professors and organizations around the country, receiving a response from only two, saying no. Yet one afternoon, I received an email back from an organization called PanCAN, saying that they would be able to send me a dataset. I had to fill out a TON of paperwork for them, but I was able to obtain a dataset from them, nonetheless. In addition, I had applied for a dataset from PLCO, in which I had succeeded. This was an overly time-consuming process (I guess I had not realized how much logistics would be involved), but I am satisfied with my progress. I think I have a pretty decent dataset now.</p>
    <p>The 2nd part was much more fun. I had created a few apps prior (see the apps/websites page on my website), and I was excited to develop the new models in CreateML and place them in an app using CoreML (I had originally planned to convert the TensorFlow models to CoreML using a tool called coremltools, but it did not work for my scenarios). I won’t go into too much detail here, but I created Decision Trees, Random Forest, Boosted Trees, Logistic Regression, and Support Vector Machine models, which weren't relatively hard to do. All I needed to do was some intuitive UI design and to work around the quirks of CreateML (for instance, I had to write a program in Python just to parse results from CreateML in order to calculate an AUC value). In addition, I investigated the effects of including depression information in the models, as well as the importance of the risk factors. As of November 2020, I have completed the project and submitted it to the Regeneron STS Competition. If you would like to see my findings, read my paper below!</p>
    `,
        media: [
            {
                type: "carousel",
                slides: [
                    { src: "/projects/pancreatic-cancer-project/1.png" },
                    { src: "/projects/pancreatic-cancer-project/2.png" },
                    { src: "/projects/pancreatic-cancer-project/3.png" },
                    { src: "/projects/pancreatic-cancer-project/4.png" },
                    { src: "/projects/pancreatic-cancer-project/5.png" },
                ],
            },
            { type: "image", src: "/projects/pancreatic-cancer-project/6.png" },
            { type: "image", src: "/projects/pancreatic-cancer-project/7.png" },
            { type: "image", src: "/projects/pancreatic-cancer-project/8.png" },
            { type: "image", src: "/projects/pancreatic-cancer-project/9.png" },
            { type: "image", src: "/projects/pancreatic-cancer-project/10.png" },
        ]
    },
    {
        id: "planarian-blue-light",
        longDescription: `
    <p>This was definitely a fun project. I had worked with someone in my class named Irene, and each day we would take care of the planarians by feeding them and changing their water. In order to track their movement, or "sleep", I came up with the idea to film them at a time during the night after being subjected to either blue or red light for 30 minutes.</p>
    <p>We each built our own separate contraption at home to conduct this project and we even took planarians home with us each week to conduct the experiment!</p>
    <p>Afterward, I took the videos we we recorded and ran them through a program called WormLab, which calculated their velocity during the time interval. It was a very time consuming process as I needed to process about 30 examples consisting of 30 minutes of footage each.</p>
    <p>We did have a few problems along the way. We actually did a trial of this during the April break; however, all of our planarians happened to die during that break! In addition, we had planned to use a software called "ptracker" to measure the velocity of the planarians at first, but unfortunately, it did not work as expected. So we kind of scrambled at the last minute and found WormLab, which worked very well.</p>
    <p>Overall, this was a simple yet fun first project for me. It will always be in my memories, and it was a great first dive into the world of research.</p>
    `,
        media: [
            { type: "image", src: "/projects/planarian-blue-light/1.jpg" },
            { type: "image", src: "/projects/planarian-blue-light/2.jpg" },
            { type: "image", src: "/projects/planarian-blue-light/3.jpg" },
            { type: "image", src: "/projects/planarian-blue-light/4.png" },
            { type: "image", src: "/projects/planarian-blue-light/5.png" },
            { type: "image", src: "/projects/planarian-blue-light/6.png" },
        ]
    },
];
