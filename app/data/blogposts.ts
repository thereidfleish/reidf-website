export type BlogBlock =
    | { type: "paragraph"; html: string }
    | { type: "header"; text: string }
    | { type: "image"; src: string; caption?: string }
    | { type: "video"; src: string; caption?: string }
    | { type: "youtube"; youtubeId: string; caption?: string };

export interface BlogPost {
    id: string;
    blocks: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
    {
        id: "reflecting-on-my-first-semester-at-cornell",
        blocks: [
            {
                type: "paragraph",
                html: `<p>Hello all! Long time no see…I just wanted to write a little post reflecting on my first semester at Cornell University because, well, I'm in a reflecting mood. Through writing this post, I want to figure out for myself what went well and what could have went better, and I hope you enjoy this glimpse into my thoughts. I'm not exactly sure the best way to organize this post, so I'll begin chronologically and see how it goes…</p>`,
            },
            { type: "header", text: "Part 1: A Little Night Music" },
            {
                type: "paragraph",
                html: `<p>So I guess it makes sense to start with the first day. Actually, I'll take it back a day. The day before I left for Ithaca, August 18th, 2021, was the 7-month mensiversary (yes, I looked that one up) of my girlfriend Eden and I. To celebrate that and culminate the last in-person date for a while, I made her a scavenger hunt that involved searching for post-its with clues around our hometown of Great Neck. I placed each of these post-its in a special spot where something significant happened during our 7 months together, and it was a really nice activity. We both had a lot of fun. I mention this because while it was sad to leave Eden behind, we both felt happy that our last day together for a while was such a great day; therefore, I could focus on the excitement of going to college.</p>
<p>I won't get into specifics about the first few days, but they were…fine. Nothing in Orientation Week was very interesting, although I was starting to get nervous about making friends. My parents stayed for a day or two after we got there, and I will never forget our dinner conversation sitting on the balcony of North Star Dining Room at Appel Commons the night before they left. Watching the beautiful Ithaca sunset, my mom started to get nervous about me making friends, and I started to get nervous too. Everywhere I looked in the dining hall, students were sitting with their new friends. Cornell is a big place, and I suddenly grew worried. But I assured myself that I would figure it out one way or another.</p>
<p>And so I did. I made my first real friend towards the end of Orientation Week at a carnival activity in Barton Hall. His name was Chris, and I can't remember exactly how I met him at that carnival with 1000 people, but somehow I did. Well, I had actually met him at an engineering meet and greet activity a few day ago, but it was one of those things where you introduce yourself to someone for two minutes, get their Snapchat, and move on, so I figured I would never see him again. But I did! I remember walking back with him to North Campus after the carnival, and he was telling me how he was nervous about making friends, too.</p>
<p>The next day, I invited him to participate in the Cornell Amazing Race, which was a scavenger hunt around campus. He joined, and that's where we met Pablo and Joaquin. We had dinner with them that night and all had fun together. And my friend group grew to 4. Very soon after, we had Convocation. Somehow in the swarm of 3000 kids heading to Convocation I bumped into a random kid named Carter. We were both walking alone so we introduced ourselves to each other and bonded over our Apple Watches. He seemed like a nice kid, so I kinda forced him to come to dinner with Chris, Pablo, Joaquin, and I. He reluctantly accepted, but realized he liked our group and became #5. And my biggest fear — making friends — had vanished.</p>`,
            },
            {
                type: "image",
                src: "/blog/12-27-21/2.jpg",
                caption: "Me, Pablo, and Chris",
            },
            {
                type: "image",
                src: "/blog/12-27-21/3.jpg",
                caption: "Me, Chris, Joaquin, and Carter",
            },
            {
                type: "paragraph",
                html: `<p>But of course, college can't be all that easy. I soon realized my second biggest fear was becoming a reality: sleep. For those who don't know me, I am a very light sleeper; I wake up from the quietest of sounds or the slightest speck of light. So obviously, living in a dorm is probably one of the worst things for me. I had purposely picked a single room for this reason and had hoped that it would allow me to control the room how I wanted — the temperature, the noise, and light, the time I went to sleep, etc. However, I soon realized that I would be unable to fully control any of these things.</p>
<p>The first came with some weird tones and vibrations I began hearing from one of the double rooms next to mine. It didn't take long to realize that one of the occupants owned an electric guitar (and that the walls in Mews Hall were incredibly thin). He played his instrument past 10:30 PM, which was when I wanted to go to sleep, so I tried to fall asleep. It was impossible. Not only did I hear those loud noises but the room also vibrated from them. I know I could have asked him to stop playing during quiet hours (which start at 11 PM), but I didn't want to be rude. I also have a sound machine, but it barely helped. So I stayed up through this little night music till around midnight.</p>
<p>This continued for the next couple of days, but luckily, someone (it was not me) must have told him not to play during quiet hours because he began stopping around 11 PM. Thank goodness, I thought, now I can get the sleep I deserve! Well…not quite. I soon noticed that I began feeling hot and cold throughout the night, even though the air conditioning (which we cannot control) appeared to be set to a certain temperature. After some discovery, I realized that the room's heater, which ran the width of the room above my bed, was on full-blast. Why is the heater on during the summer??? Luckily, we have a thermostat to control the heater, so that would turn it off, right? Wrong. It was down to the lowest setting. I Googled information about Cornell's heaters, and Cornell said that they aren't even supposed to be on until the winter. Confused, I put in a service request to fix the heater.</p>
<p>Unfortunately, after a week went by, no one came to fix it. There were many nights where I would get hot at 3 AM and try to fix the heater. One night I would bang at it, another I would rapidly change the temperature on the thermostat, another I would completely re-arrange my room, another I tried to disassemble the thermostat from the wall, another I opened the window, and another I bought a fan to blow outside air from the window (funny enough, this completely failed, as the air pressure inside the room was so great that the fan could not blow any air into the room). After countless sleepless nights, I realized there was nothing I could do to fix this issue. I called the service request office again, and they had no idea when it would be fixed. In the meantime, now that I was going to sleep later, I began to wake up later. Of course, the sun woke me up and prevented me from sleeping in. Not only that, but I began waking up from banging doors in the hallway. I attempted some things to mitigate that, such as putting a sheet around my door, a chair in front of my door, earplugs, and adding two more sound machines, but nothing really helped. However, I did find something called "Brown Noise" which was a certain sound that mitigated low-frequency noises like door banging. I had a friend who was visiting Cornell bring me up a speaker that I used for this purpose, and it actually worked well.</p>`,
            },
            {
                type: "image",
                src: "/blog/12-27-21/4.jpg",
                caption: "The infamous heater in Mews Hall room 211B",
            },
            {
                type: "paragraph",
                html: `<p>Finally, after a month of dealing with all these things, I had enough. I needed to solve the heater issue once and for all (as that was probably the most annoying issue since it began to also make clicking noises). On the morning of September 30th, I called up the service people again. The person who answered the phone was actually really nice and promised that she would send someone to fix it. To my surprise, a worker was sent to my room that day!! The heater was now fixed and I finally began to sleep better.</p>
<p>Alright, enough of the bad stuff. Let's get to the good! I would be remiss if I failed to mention the academics in one of the best engineering schools at one of the hardest and most infamously depressing colleges in the entire world. And I must say…it's not as hard as high school. For those who went to/go to Great Neck South High School, you know what I mean. For those who don't know, my high school was extremely competitive — as my 9th grade math teacher would say, people would "kill for a point." While this sounds like a toxic atmosphere, it was also incredibly rewarding in my opinion. I was involved in so many things, from robotics to science research to film/TV production. Anyway, this <a href="/blog/12-27-21/5.jpg" target="_blank" rel="noopener noreferrer">meme</a>, created by one of my friends, probably sums my high school up best.</p>
<p>So yeah, academics at Cornell Engineering actually weren't that bad. I think there are two reasons for this. One, obviously, is my preparedness from high school. And two, is my abundance of AP credit from high school which allowed me to take fewer college credits to lighten my workload. Lectures originally were difficult and uncomfortable, mainly due to the new format of 500+-person classes, hot and stuffy rooms (especially with masks!), and the abundance of material covered, but I got used to it. Homework, while sometimes difficult, reinforced the material very well. One thing I noticed and like is the lack of busy work in college. Honestly, most of the work I got in high school was busy work, whereas most of the college work really helps you deeply understand the subject and prepare for the exams. Speaking of exams, I did fairly well on my first set of prelims (these are essentially midterms), as the study skills I developed in high school payed off.</p>
<p>Now let's talk about extracurriculars. Honestly, I had much less free time in college than I had expected. As such, I needed to be careful with how many extra activities I added. I didn't really join any clubs at the club fair, but for a while I was eyeing the Engineering Project Teams. These, if you don't know, are student-run teams affiliated with the College of Engineering that work on many interesting real-world projects. Some of these projects include vehicle building/racing, app development, website development, data science, sustainability, biomedical and health engineering, robotics, concrete-canoe building (yes, it can float!) and so much more. I really wanted to join a Project Team not just to gain hands-one experience in an interesting field but to also be on a close-knit, special team. I discovered that I loved being on a team from high school robotics and I wanted to have a similar experience in college.</p>
<p>At first I sought two teams: AppDev and DTI. The former, hence the name, worked on developing campus-wide mobile apps, whereas the latter focused on developing campus-wide web apps. AppDev didn't allow first-semester freshmen to apply, so I decided to go for DTI — except I knew nothing about web development. So I decided to enroll in DTI's Trends in Web Dev class, which was essentially a two-credit S/U class that taught web development using React. I know I'm skipping ahead here, but I'm really glad I took that class because I not only learned a lot but also made connections with two really awesome students, one of which I am developing a mobile app with now. Anyway, back to the story. After going to the Project Team Fest, which was about one week before all the project team applications were due, I discovered two other teams that looked interesting to me: Cornell Electric Vehicles (CEV) and Engineering World Health (EWH). Over the past year, I had developed an interest in electric vehicles and also worked on a research project to predict one's risk of developing pancreatic cancer (you can read more about that in the tabs at the top of this website!), which was why both of these appealed to me as well. I decided not to apply for DTI just yet, as by this time (late September) I had barely started Trends in Web Dev and I did not think I could put my best foot forward in my application. So, on October 1st, I submitted my applications to CEV and EWH. Now it was just time to wait and see.</p>`,
            },
            {
                type: "image",
                src: "/blog/12-27-21/6.jpg",
            },
            {
                type: "image",
                src: "/blog/12-27-21/7.jpg",
            },
            {
                type: "image",
                src: "/blog/12-27-21/8.jpg",
                caption: "Some of the project teams at the Project Team Fest",
            },
            {
                type: "paragraph",
                html: `<p>As I finished the final week before fall break in early October, I realized how much I had accomplished in only a month and a half. I was able to make friends, succeed academically, and apply for two project teams. While sleeping was often frustrating, I learned a lot about adaptation and resilience from that experience. Also, I forgot to mention my girlfriend. Eden and I had a few tough moments, but we made long-distance work as best as we could. While I was sad to leave Cornell for fall break, I was ready to visit my family and Eden.</p>`,
            },
            { type: "header", text: "Part 2: Defy Gravity" },
            {
                type: "paragraph",
                html: `<p>Over the fall break, I had the pleasant surprises of getting interviews for both the CEV and EWH project teams! This was really exciting but also really nerve-wracking because I had not done many interviews prior to this. Upon returning back to Cornell, I spent many hours over the next week preparing for both interviews — thinking of potential questions, answering them in the mirror, and building confidence. I had both interviews on a rainy Saturday, and while I thought that both went well, I was nervous because I had no idea how I actually performed compared to others. But I guess good preparation payed off because I got onto both project teams!</p>
<p>Now, honestly, the hardest part of all this was choosing between the two. One one hand, CEV felt like a closer-knit team which had many projects I could work on using my various interests; on the other hand, EWH worked on more meaningful projects that closely aligned with my long-term goal of helping the world in some significant health-related way. I really wanted to go for EWH, but after talking with my parents, I realized that EWH might not always be working on projects I'm interested in. Besides, it might be better for me to get similar experience working on health-related projects through research with faculty. CEV had more of the team vibe that I wanted and allowed me to work on both software and operations projects (which I wanted). So after much deliberation, doubting, and flipping Siri coins (all of which were in EWH's favor, by the way), I chose CEV. It was extremely difficult to write my rejection email to EWH.</p>
<p>During the remaining month of October, nothing interesting happened. I continued to go about my business, but I noticed that I was happier than before. I had gotten onto a project team, I had continued to succeed in other ways, and I kept adapting to my new living situation. Parents weekend came, and I had fun showing my parents around campus. I also had my first CEV onboarding, where I felt very welcomed. I felt like I was doing pretty well. I was defying gravity.</p>`,
            },
            {
                type: "image",
                src: "/blog/12-27-21/9.jpg",
                caption: "First CEV Meeting",
            },
            {
                type: "paragraph",
                html: `<p>But not for long. Towards the middle of November, once prelim 2 season began, I started to feel sad. During the past week Cornell had two scary incidents on campus: a bomb threat and a gunman at large. While I knew we would be safe, it was scary to witness these events. The campus also had a sullen tone to it for a while. I was also getting a little stressed academically, I missed Eden, and we weren't doing much in CEV. But I pushed through the grind and made it out to the other side, looking forward to a nice Thanksgiving break!</p>`,
            },
            { type: "header", text: "Part 3: Too Darn Hot" },
            {
                type: "paragraph",
                html: `<p>Thanksgiving break actually wasn't that good honestly. A few things happened that made me sad, and the day I got back to campus was actually pretty bad (I became very nauseous on the bus ride back, people kept taking my laundry out of the dryer, etc.).</p>
<p>The next few weeks were pretty boring and I felt a little depressed. I had begun my real work for CEV, and while some of it was interesting, I was not 100% sure that I wanted to work on the software-related stuff. I was tasked to work on car simulation, and while cool, I didn't really have much motivation for doing it. I was still regretting my project team decision a little, but then as soon as I would regret it, I would regret not joining CEV if I had hypothetically joined EWH in my mind (if that makes any sense?). So it was kind of an endless cycle. For whatever reason my room started to become too darn hot again, so I had to make some more adjustments (OK, lol, I know I mention this heating thing so much. But it's actually really interesting. For whatever reason, when the temperature outside is between 40°-90°, my room remains a nice, cool temperature. My heater turns on a lot, but the A/C compensates. But as soon as the temperature dips below 40°, it gets hot in my room. But plot twist — the heater never turns on! And the A/C still seems to blow cool air. But it's hot in there…so weird…) In the meantime, I worked on my final project for Trends in Web Dev, which was pretty cool (my group made <a href="https://cudormreviews.herokuapp.com/" target="_blank" rel="noopener noreferrer">CUDormReviews</a>, which is a website where students can review Cornell dorms), and studied for finals. Finals became kinda weird, as they moved online at the last second due to us going into COVID Red Level (and my CS one became optional!) but my Chem one was alright. During Finals Week I went for a few walks around Beebe Lake to calm myself down when I became stressed, which was nice. On the last day before I left for Winter Break, I filmed a video about Cornell North Campus architecture (I became interested in that throughout the semester), took a long walk around campus, and enjoyed not having any more stress. And with that, my semester came to a close.</p>`,
            },
            { type: "header", text: "Part 4: Reflection" },
            {
                type: "paragraph",
                html: `<p>Ok, I don't think this post went exactly how I intended it. I gave much more of a summary of my semester than a reflection of it, but I really intended to only do the latter. So I shall do the latter now!</p>
<p>Overall, I think it was a pretty good semester. While I had thought I would become involved in more things and be happier overall, I learned a lot about myself as a student, friend, boyfriend, and person. I learned about adapting to uncomfortable and new environments and making the most of situations — I now feel like I can handle any sort of sleep situation! I learned how to interview effectively for a position and how to make tough decisions regarding it. I learned that I can handle Cornell Engineering and still have time to do other things. I also haven't really talked about my specific classes yet. Besides Chem, I truly enjoyed most of my classes, especially Object-Oriented programming and Data Structures, my first-year writing seminar on the ethics of artificial intelligence, and Trends in Web Dev. Although I am not thrilled about my course selection next semester, I know that there are many more interesting classes down the line that will teach me so much. I realized that Cornell Engineering is a great place to be, especially for an intended CS/InfoSci major.</p>
<p>Oh yeah, about that. So I think this semester definitely made me more interested in CS, although I am also debating majoring in InfoSci instead, since that was my original intended major. I like things from both, but I'll figure it out. I know I am in good hands either way, though.</p>
<p>But here are some things I want to improve on. The semester was far from perfect, and I want to set the following goals for myself going forward:</p>
<ol>
  <li><strong>Have more fun!</strong> You may have noticed that I failed to mention "fun" things. While I am not into partying, I did have some opportunities to do some fun stuff, like climbing the clock tower, going to a football game, walking around campus with friends, attending some random events on campus, and even simply having meals with friends. But that's not enough. I want to push myself to do more fun things because, well, that's what you do in college. These four years will fly by quickly, and I want to make the most of them.</li>
  <li><strong>Figure out the project team stuff!</strong> I really want to give CEV a full semester to see if I truly love it. I think that will tell me if it's something I want to continue doing or if I want to pursue a different project team. It will also let me know if, say, I only want to be on the operations subteam rather than both operations and software.</li>
  <li><strong>Be happier!</strong> I am usually always a glass-half-full kind of person, but I found myself being a glass-half-empty person sometimes at Cornell. I'm not sure if it's the nature of the large, hilly, and cold campus, but whatever it is, I want to fix it. Now that I know what to expect, I think I can become my happier self again.</li>
</ol>
<p>So that's about it! I hope you have enjoyed reading this post as much as I have enjoyed writing it. I've been wanting to write this since around mid-October, as there has been a lot on my mind during the semester. I am really excited to see what comes of the next semester, and I'll catch you guys back here at the end of that!</p>
<p>- Reid</p>`,
            },
        ],
    },
    {
        id: "how-life-can-change-in-a-moment",
        blocks: [
            {
                type: "paragraph",
                html: `<p>This will be a quick post, but I really wanted to get it out there, so here ya go:</p>
<p>Today something happened to me. Something really great and special. This blog is not the place to go into detail about it, but if you know, then…well…you know. So just remember this — if you're feeling down, confused, or upset, just know that, more often than not, life will throw you a surprise sooner than you think.</p>
<p>The best things in life seem to occur at the weirdest times, in the weirdest places, and under the weirdest circumstances. January 18th, 2021 will be one of those days forever engrained in my memory :)</p>`,
            },
            {
                type: "paragraph",
                html: `<div class="flex flex-col gap-3"><a href="/blog/how-life-can-change-in-a-moment-part-2" class="hidden-link transition-colors">Click here for an update…</a><a href="/eden9months" class="hidden-link transition-colors">Eden 9 Months</a><a href="/reiden" class="hidden-link transition-colors">Reid's College Days with Eden</a></div>`,
            },
        ],
    },
    {
        id: "thank-a-teacher",
        blocks: [
            {
                type: "paragraph",
                html: `<p>I'll start of by saying: yes, I am a little late with this post, based off of my original intention to post something every two months. But I have been rethinking that. While sticking to a rigid schedule will ensure that I post something every two months, I'm not sure how sustainable that is in the long term. In fact, it seems better to only write stuff when I'm in the mood to write it, not in order to meet my personal blog post quota. And with that, I am officially announcing that this blog is moving away from the "one post every two months" model and towards the "posts will be here when I am in the mood to bring them here" model.</p>
<p>So with that out of the way, I'll begin today's actual post.</p>
<p>Well, this has been a crazy school year for literally everyone. For many reasons.</p>
<p>But what made the 2019-2020 school year define crazy was COVID-19. One day we were at school, the next day we were not. And the rest, well, is history at this point. This is not the post where I discuss the whole virus and its impacts, but what I will discuss here is remote learning.</p>
<p>You see, after the virus spread like wildfire and killed so many in its path, we just simply couldn't go to school anymore. And just like that, we were out of school. And the entire world shutdown. And we still needed an education.</p>
<p>So what does the school do? Begin remote learning! Now, while it was honestly not the best it could have been (not once did I have an actual live learning session; lessons were all prerecorded videos), it was still an incredible feat for each and every teacher. While some might have found it easy, others had to spend hours upon hours adjusting to this new norm, putting their own children behind, scrambling to teach all of their students. It must have been a nightmare.</p>
<p>I was on a Zoom call for English class one day when my English teacher was screen sharing and accidentally showed an email she'd written to a student. It was only there for about five seconds before she quickly closed the Chrome tab, but it was enough to read the subject line of "are you okay?" and spot a fragment of the body paragraph reading "your teachers are worried about you." Clearly, that student had trouble adjusting to remote learning. Now, if I were a teacher, dealing with that one kid alone would be extremely stressful and saddening. But in a school of 1500 kids, there's a good chance that many more were like that, leaving teachers to likely have to deal with multiple. I could only imagine the mental toll that must take on teachers.</p>
<p>And besides — who knows what teachers have been going through themselves? Perhaps their parents or other close family member got COVID-19, or even they themselves. Regardless, it must have been a scary experience.</p>
<p>I've always been a firm believer in thanking your teachers. I have written thank you emails to some of my favorites over the years on the last day of school, and have thanked each and every one in person at some point. I urge you to do the same each and every year, but especially this year — a year where a pandemic is hindering them from simply doing what they love to do. We need more positivity in this world, especially now, and it all starts with going to your favorite email client and sending your teachers a simple "Thank You." Will that put a smile on their face? Of course! And you'll also notice a smile on yours, too.</p>`,
            },
        ],
    },
    {
        id: "mac-vs-pc",
        blocks: [
            {
                type: "paragraph",
                html: `<p>In life, there are many age-old questions that have yet to be answered. Some may be as simple as Red v.s. Blue or Vanilla v.s. Chocolate (vanilla is superior to chocolate; I'm looking at you, Sarah), or some might be even more complex and life-changing like Toilet Paper Over v.s. Toilet Paper Under (totally life changing am I right!?). But perhaps the most famous (or infamous?) age-old question in the entire tech industry comes down to whether you'd like to take a byte into the Apple or stick with good ol' Clippy. Oh wait — we don't speak of Clippy. Sorry.</p>
<p>What prompted me to write this blog post now was a mutual argument I entered with someone at robotics about Mac v.s. PC. We weren't actually fighting about it or anything; it was just some friendly argument from two people interested in tech. We both brought up some good points for our respective sides (mine being Apple, of course) and I'd like to discuss some of them here.</p>
<p>In the effort of full disclosure, I am most certainly an Apple fanboy who owns and uses many Apple products on a daily basis. Yet at the same time I have a PC that I also use on a daily basis. So while I may be slightly biased towards Apple, I will try to offer fair discussion on both sides.</p>
<p>So what are we waiting for? Let the battle begin!</p>`,
            },
            { type: "header", text: "Functionality" },
            {
                type: "paragraph",
                html: `<p>I think functionality is a good place to start since this is probably one of the most important things in this debate. Does your computer do what you want it to do? Does it go above and beyond? Or are there annoying limitations that hinder your ability to do certain things? These are the essential questions that I will be exploring in this section.</p>
<p>Ask anyone the following question, "What can do more? A Mac or a PC?" and they will most likely side with the PC on this one. And, in many ways, I think that answer has a lot of merit. Not only can you pretty much build whatever PC you want with whatever components you want, but you can also do many, many, many things with Windows. I built my PC that I use on a daily basis, and not only was it a really fun experience, but it was also a super practical one. Since the initial build about 3.5 years ago, I have swapped out the hard drive, case fans, and CPU cooler, and I plan on upgrading the CPU soon. It is a really nice benefit to be able to upgrade everything so easily — and not to mention it being backed up by a strong community like Linus Tech Tips and many, many others. This level of customizability is simply not present on any of Apple's Macs (except the 2019 Mac Pro but it is still very new). Now, of course you can upgrade your Mac when buying it, but then upgrading/replacing parts down the road is a huge, if not impossible, pain in the neck. <strong>So when it comes to hardware upgradeability, the PC definitely scores a point.</strong></p>
<p>Now let's shift gears from hardware to software. Both macOS and Windows have come a long, long way over the years, and both have gotten much better than their original versions. Both OS's offer much of the same core functionality but definitely do have major functionality differences. Windows can run much more software than macOS can, and many professional software suites (such as my robotics CAD program Autodesk Inventor) as well as games can only be run on Windows. Now why is this the case? While some of it does come down to the fact that Windows is much more popular than macOS, much of it comes down to the development side. Simply put, Windows is just much easier to develop for. And while you can certainly make the case that Apple has been making macOS development easier recently with advances to Xcode and Catalyst, Windows simply has much less restrictions than Apple and meets developer's needs in an easier way. However, this does not always lead to better apps. There are a good handful of beloved Apple exclusives — Final Cut Pro, Logic Pro, Keynote, and even simple apps like iMessage and FaceTime — but if you try to think of any beloved Windows exclusive, nothing comes to mind besides maybe Minesweeper and 3D Pinball. And besides Mac exclusives, many cross-platform apps (besides games) just run much better on macOS than they do on Windows due to special optimizations developers can take advantage of on the Mac.</p>
<p>Not only that, but macOS has some really powerful tools that come right out of the box that you simply can't get on Windows. Take Preview for example. Not only can it view pretty much any type of image or PDF in existence, but it can also edit them with remarkable functionality such as instant alpha, color correction, resize, rotate, reorder, edit GIF, add shapes/text, and so much more. You can't get that on a PC without paying for Photoshop and Adobe Acrobat. So while many may say that Windows has more functionality than macOS, and while that is certainly true in some ways, Apple literally makes and pre-installs their own application called Bootcamp which allows you to run Windows natively on your Mac. Apple provides drivers which make the computer feel like a real PC (and frankly, better than some real PCs). So if there's something you can't run on macOS, you still got Windows on the same machine if you so choose. But good luck Hackintoshing. <strong>So when it comes down to functionality within the OS, I'm giving a point to both. I think they both have their own place when it comes to this.</strong></p>`,
            },
            {
                type: "image",
                src: "/blog/3-1-20/2.png",
                caption: "CADding our 2020 FRC robot on my PC using Autodesk Inventor — a Windows exclusive",
            },
            { type: "header", text: "User Experience" },
            {
                type: "paragraph",
                html: `<p>Oh boy. I bet you see where this is going given that I am an Apple fanboy…</p>
<p>I'll say it right off the bat: user experience on PC's and Windows absolutely SUCK!!!! For someone like me who one might call "tech savvy," I know how to use both platforms at an equally advanced level. However, for new users to computers, Windows can be a hell of a nightmare. Just imagine someone who has never used a computer attempting to buy/set up/use a PC. There are literally thousands of options across probably 50 different manufacturers. They will get so overwhelmed. Meanwhile buying a Mac and setting it up and using it is a piece of cake.</p>
<p>Just open up your Mac for the first time. Much of what you need is already there. Need to surf the web? Safari will do. Need to text someone? iMessage is already preloaded. Need to open a PDF? Preview's got you covered. Want to take notes, view your iCloud photos, find your iPhone, write a diary entry, make a presentation, create a spreadsheet, listen to music, watch live TV, or even edit a 4K video? It's all there, and as Steve Jobs would put it — it's magical. Hands down you simply couldn't do all of that right out of the box in Windows. On a PC, everything I just mentioned (besides web browsing on Edge) you have to download a third-party app for, if one is even available. You can't even view a freakin PDF without downloading Adobe Acrobat or view any slightly uncommon video format without VLC. It sucks. Oh, and if you don't believe me on any of this, then watch Apple's iconic "Get a Mac" ad campaign. Those ads speak for themselves.</p>
<p>But let me dive deeper into the user experience aspect. I am someone who knows the ins and outs of both operating systems and uses them on a daily basis from things ranging from homework to watching YouTube to editing videos to creating neural networks. Trust me, I know how to use my stuff and I know what I'm doing. And with that I can firmly say that the user experience on a Mac is so much infinitely better than that of a PC. I think a lot of it comes down to the fact that Apple owns and controls both the hardware and software of everything they put out, and this leads to a beautiful experience. I know a lot of people say that, but as a professional Mac user, is has some real practical benefits. When creating a presentation in Keynote (or PowerPoint) on a Mac, for example, you can really nicely zoom in and scroll around with your trackpad to quickly and seamlessly adjust things. In Final Cut Pro X, as another example, not only is the entire piece of software fully optimized for Mac (it has insane render times) but the experience editing is top-notch with a trackpad or Magic Mouse. I've learned to develop crazy hand gestures combined with keyboard shortcuts that significantly increase my productivity. Even just the basic mechanics of macOS just work really well, something you don't see on Windows.</p>
<p>And where Macs really shine is with the Apple ecosystem. Ohhh boy, do I LOVE this so much!!!! Let's just say that I am editing a video and want to insert a few pictures that I took on my iPhone. All I have to do is AirDrop them to my Mac and then drag them into the timeline. Done in all of about 10 seconds. On a PC, that would require me to transfer the files to the computer with something like email or Google Drive on my iPhone, then open that up on my PC, download them, unZIP them, and then finally import it into the timeline. Done in all of about 2 minutes. Or what if someone texted me a description to put into that video? On a Mac I would just open iMessage and copy-paste away in all of about 5 seconds. On a PC...well...you'd have to email the text to yourself and then open it up on the PC and then the person sends you an updated one and you have to do all that again and it's just a yucky extra 2 minutes you have to waste. When Steve Jobs once said that Apple products just "work," he really did mean that. Like really. They really just work how you want them to. It's why I use them everyday.</p>
<p>And let's not forget the design of the Mac. It is just gorgeous and no one can deny that. Even designs dating back to the early 2010's still look better than top-of-the-line PCs that come out in 2020. There's a certain special feeling you get when using a Mac that you don't get when using a PC. Maybe it's just me, idk. <strong>But what I can safely say is that the User Experience point clearly goes to the Mac.</strong></p>`,
            },
            {
                type: "image",
                src: "/blog/3-1-20/3.png",
                caption: "Editing a video on my iMac using Final Cut Pro X — a simple, seamless, and powerful Mac exclusive",
            },
            { type: "header", text: "Price/Value" },
            {
                type: "paragraph",
                html: `<p>Now this one's tricky. I will say right off the bat that there is no argument against the fact that most Macs are significantly more expensive than their PC counterparts with similar specs. It's just plain math that supports that. But when you are buying a Mac, you are not buying for the specs — you are buying for the Apple experience. And people really have to understand that. So many people criticize Macs (and Apple in general) for charging too much for "inferior" products. But if you say that, here's what I will say back: a) clearly you have never spent much time using a Mac and b) IF YOU CAN'T AFFORD ONE, THEN DON'T BUY ONE!!!! It's that simple. There's a reason why both the Tesla and Toyota Camry exist — people are in different financial positions and can only afford certain things. So if you can't afford a Mac, then don't get one and buy a PC instead! I don't understand why so many people fail to understand this. OK now this is turning into a rant (I did warn you guys in my first blog post that I have no rules with my writing style and I can get crazy here) so I will stop now and move onto something else. Actually wait one more thing: some Macs are actually pretty cheap if you think about it, especially the 5K base model. You get pretty nice specs plus a gorgeous 5K screen for only $1799, a price that you can approach with a similarly specced PC plus an external 5K screen. Anyway enough with that. Let's move on.</p>
<p>When it comes to value, this one's even tricker. Macs last a really really really long time. Certainly longer than most PCs. However, in terms of specs Macs can get outdated pretty quickly, leaving you with a large, heavy alooomineum paperweight. And while you can get a decent price by trading it into Apple, it's not really worth it. However, with PCs, all you do is just swap out your CPU, GPU, RAM stick, hard drive, and pretty much anything else once it gets old without buying a whole new machine.</p>
<p><strong>Some people will hate me for this, but I am going to award a point to both since I feel that they each have their own place in the market.</strong></p>`,
            },
            { type: "header", text: "Final Verdict" },
            {
                type: "paragraph",
                html: `<p>So, according to my calculations, the Mac and PC are tied in terms of the point system I made for this blog post. And, to be honest, I wasn't even really trying to make it that way. Yet I think this really is representative of what I believe regarding both the Mac and the PC. I don't think that one is necessarily "superior" or "better" than the other as a whole; I think it truly comes down to each user's specific wants, needs, and use cases.</p>
<p>Now here's where I offer some advice to y'all. Next time you're watching a YouTube video and see a nasty comment about Apple or Microsoft, or next time you argue over this topic with your very opinionated friend, try to stay out of it by not adding another nasty comment to the YouTube video or by not getting into the argument with your friend. Ultimately, we should all learn to love both Macs and PC's for what they are and embrace rather than trash their differences. After all, tech is tech, and it's all pretty damn cool if you ask me.</p>`,
            },
        ],
    },
    {
        id: "why-i-love-robotics",
        blocks: [
            {
                type: "paragraph",
                html: `<p>You only have six weeks. Time is running out. It is week 4, and you still don't have a robot built, let alone even a somewhat working mechanism. It's 10:00 PM on a Thursday night and you want to go to sleep. Your research paper is due tomorrow and your Algebra II teacher is not going to postpone tomorrow's test for you. Someone asks you to fix something — no, two people do. Now three. Fix this, fix that, help with this, help with that. Do this, do that, change this, change that.</p>
<p>No, no, NO! The CAD software crashed. Time to wait 20 mins for the software to reboot. Meanwhile your friend texts you boasting that they are going to sleep at 10:30 PM. Ha.</p>
<p>From the other room, comes the voice of two. One says, "we are Rebel Robotics Team 2638 from Great Neck South High School in Great Neck, New York, and we are going to present to you the Chairman's Awa—". "Wait a sec…don't the judges already know we're here to present the Chairman's Award, so why do we need to tell them that," says the second. Mild laughter.</p>
<p>Still waiting. Why can't they get us better computers???</p>
<p>Let's see how the arm mechanism is doing in the woodshop. You go into the woodshop only to find exhaustion on people's faces. You've been working on that mechanism for weeks, and the gearbox just simply doesn't have enough torque to lift the arm. Gear ratio after gear ratio, new design after new design. Hour after hour, day after day. No luck.</p>
<p>OH! Autodesk Inventor loaded! Time to change those things…oh wait…what did you need to do again? "Saaaiifffff!!!!"</p>
<p>"We are Rebel Robotics Team 2638 from Great Neck South High School in Great Neck, New York, and we are going to—"</p>
<p>The sound of the chop saw fills the room. It still fills the room. It still—ahhhh, it's done. Peace and quiet. No, you don't like the quiet. Time to stick your EarPods in and play some Spotify. High Hopes begins playing.</p>
<p>But suddenly, you hear a "YEEEESSSSSSSSSSS!!!!!!!!" coming from the woodshop. You stop what you're doing. No more CAD. No more High Hopes. Screw that research paper due tomorrow. While no one confirmed it yet, you knew what just happened: the arm mechanism finally worked.</p>
<p>You file into the woodshop with the remaining folks at 10:30 PM. The mentors come rushing in. We all see it in front of our very own eyes. The arm goes up and down, up and down, up and........it cracks.</p>
<p>That's it. You just want to go home. Everyone just wants to go home. But you and everyone else more than anything want to fix it once and for all. No, you and everyone else more than anything <em>need</em> to fix it ONCE AND FOR ALL!</p>
<p>And so an hour later, when the clock strikes 11:30 PM, we do. The arm goes up and down, up and down, up and down. Swiftly.</p>`,
            },
            {
                type: "video",
                src: "/blog/1-1-20/arm.mov",
                caption: "The arm mechanism finally working",
            },
            {
                type: "paragraph",
                html: `<p>And then a few weeks later you find yourself on a bus to Finger Lakes with 45 other kids on your team. We're all going up with the same goal in mind: to make World Championships.</p>
<p>The robot struggles at first, but we soon improve. After 70 matches, it's time for playoffs. And we make it. But then we get eliminated right away by the #1 alliance. Oh well.</p>
<p>Award ceremony comes. An hour goes by. Nothing. It's now onto the final award, the most prestigious award in FIRST: the Chairman's Award. You hear the emcee:</p>
<blockquote><em>"Now judges did you hear about this one / Their outreach is out of this world / China Costa Rica and Turkey / Hey Gold Coast are you having fun / If you believed they put the man on the moon / If you believe they'll do it safer than you / Then this team is cool</em>
<p><strong>Congratulations, team 2638.</strong>"</p></blockquote>
<p>Before you know it, you're up on your feet walking across the field. Judges are high-fiving you. Your video comes up on the screen. You're taking a group photo. You hug someone. Someone hugs you. 45 of us hug each other at once.</p>
<p>Wait, what just happened??? Did we just win the highest award in FRC? And we are going to World Championships?</p>
<p>Yes. Yes we are.</p>`,
            },
            {
                type: "image",
                src: "/blog/1-1-20/2.jpg",
            },
            {
                type: "image",
                src: "/blog/1-1-20/3.jpg",
            },
            {
                type: "youtube",
                youtubeId: "zqkPoFUvvhM",
                caption: "Winning the Chairman's Award at the 2019 Finger Lakes Regional",

            },
            {
                type: "paragraph",
                html: `<p>The 2nd regional comes around, this time locally at Hofstra University. As the first day of qualification matches rolls around, we're in the top 5. By the end of the 2nd day, we're ranked #2. Now it's time to pull out the 600 scouting sheets and make a decision. J-Birds and SO BOTZ, we welcome you.</p>
<p>We make it to the final match. Just one more win to win the entire thing. You are sitting in your chair nervously. We miss a cargo ball. Two. A hatch falls off. Now it's time for the climb. We make it. The other team — not so much. The match ends. The other team was in the lead. It's anybody's game.</p>
<p>Match review lasts a good 10 minutes. But finally, Don't Stop Believin' comes on: "Just a city boy. Born and raised in South Detroit." And that was our answer. We were going to Detroit for the World Championships. Again.</p>
<p>Before you know it, you're in the pit. Everyone's crying with joy. We're all jumping on each other. We did it. We won the entire regional.</p>
<p>The arm mechanism worked!</p>`,
            },
            {
                type: "image",
                src: "/blog/1-1-20/4.jpg",
                caption: "Winning the 2019 SBPLI Regional",
            },
            {
                type: "paragraph",
                html: `<p>And as World Championships comes and goes, and you're on the bus ride home, you begin to reflect on your robotics season. All the late nights, all the countless times the CAD program crashed, all the pain and agony in getting the arm mechanism to work — it was all worth it. No, let me rephrase that — it was all <em>totally</em> worth it. You realize that you're truly part of a family — a really special one. It's why you come back every single day.</p>
<p>And that's why I love robotics.</p>`,
            },
        ],
    },
    {
        id: "why-i-started-this-blog",
        blocks: [
            {
                type: "paragraph",
                html: `<p>Why did I start this blog, you ask? Well…I don't really know.</p>
<p>But let me try to figure that out with you. For a while now, I've always been toying with the idea of starting a blog. I've occasionally read other people's blogs, and I always thought they were a cool way of expressing one's thoughts and feelings about anything and everything. I as a person am always thinking about anything and everything — during a boring class, in the shower, or while I'm trying to fall asleep — and I've found that one of the best ways of expressing my thoughts is through writing. I keep a bunch of journals or diaries or whatever-you-want-to-call-thems where I often express my thoughts and feelings on a variety of subjects. If I want to rant about something that a girl did that just makes no sense to me, that goes into Chapter 4 of a locked Notability note on my iPad called "Top Secret Note. If you aren't Reid then don't open this note without permission from Reid." (that was part of my very original 7th grade naming skills. Don't ask). If I want to write a poem about something, that will make it's way on a Pages document into the "Personal Poems" folder stored locally on my iPad Pro. Or, if I just want to write about my life right now, into the Pages file called "The Subjunctive Book" that will go (again, please don't ask about the naming). All in all, these are (and have been) great ways of expressing my happiness, excitement, sadness, depression, or whatever whacky feeling I might possess at the time. Yet, there's something missing about these. All of these are locked in my iPad Pro and, as of now, will stay that way. But I felt it was time that I share some of my other writing with others — and that, my friends, comprises about two-thirds of the reason why I wanted to start a blog, I guess.</p>
<p>My other motivation for starting a blog came 6th period in the courtyard of Great Neck South High School sometime in early June. I was having lunch with my best friend, Nate, and somehow in our sea of conversation of the most random things in the world (seriously, try watching Nate and I have a conversation at some point. You'll come out of it thinking we're the weirdest people on earth), the topic of starting a blog came up. We both sympathized with the fact that we've always wanted to start a blog and said how we should both work on our own over the summer. We got so excited about it and then five minutes later moved on to joke around about that funny video we watched in our Spanish class or something.</p>
<p>So a few weeks later, on June 18th, 2019, I began creating the website that you are on right now. I started from a blank template on my website creator of choice, RapidWeaver, a Mac exclusive. From the start, I wanted the website to have a very minimalistic design, like something out of Steve Jobs or Jony Ive's mind. Speaking of Apple, I decided to go with using Avenir Next as my font of choice (a long-time font used by Apple themselves). With this in mind, I began creating the very Apple-like thingy that you can see on the top of this website. The all-lowercase looks like something that Apple would make and the saying on the bottom was inspired by something that Apple would say. Oh, and if you haven't figured it out already, I am obsessed with Apple. Just come up to my bedroom and look at how I wrote "REID" on the wall using only Apple stickers.</p>`,
            },
            {
                type: "image",
                src: "/blog/11-1-19/2.png",
                caption: "Editing this website in 2019.  Note that as of 2026, I have since switched to using a custom site made with React, Next.js, HTML, CSS, TS.",
            },
            {
                type: "paragraph",
                html: `<p>So anyway, back to the blog. After that day, I really didn't touch the blog until another day in the courtyard of Great Neck South High School in mid September. In the midst of our conversations, I randomly said to Nate, "Hey, what ever happened to the blogs that we were gonna make?" To that he responded, "Oh yeah!" We then started discussing our visions for the blog. After I explained to him in detail how the blog was going to look so nice, be representing of Apple, and how I was going to host it on my own server, Nate was like "yeah I'm just gonna use an old Weebly site I had laying around." It's funny how our viewpoints differed on this thing.</p>
<p>Ok, so now I have to mention something important. As you start reading all of my posts, you're going to realize very quickly that this is not your average blog. I am a very quirky writer, and you will see me break the most elementary writing rules by going off topic (like this), changing my structure midway through, or talking to myself in my writing (yes, I am doing that right now. Like right now. You are literally reading me talk to myself). Since I break these rules on purpose, I think it's ok; it's part of my style. I'll admit, everything that you will read has not been edited at all, as I take pride in creating these works in only one draft. So just be aware of all this. If you find my writing entertaining, go ahead and stick around here. If not, well, the red x on the top left of your browser (or top right if you are on an inferior operating system) works OK too.</p>
<p>Anyway, back to the blog. So that weekend, on September 22nd, 2019, I did some more work on this website and really started to figure this whole thing out. Since I am quite busy, I decided to limit myself to writing one blog post a month. That way, this doesn't become a hassle and I can still get good grades and get some sleep, as remember, I am still a high school student. That same day I also decided to plan out the next few blog posts so that this website still is a thing after this post. While my original intention was to only plan a few months in advance, I ended up planning a whole year's worth of posts, which is not necessarily a bad thing. Once I had this blog sort of figured out, I finally made use of <a href="https://reidf.net/" target="_blank" rel="noopener noreferrer">reidf.net</a> and published the website that night. And sure enough, one week later, Nate published his first post on <a href="http://thecohenblogs.weebly.com/about.html" target="_blank" rel="noopener noreferrer">http://thecohenblogs.weebly.com/about.html</a>.</p>
<p>So here I am, on October 6th, 2019, writing my first post. After scrolling up on this Pages document that I am writing with my iPad Pro's Smart Keyboard (it's such a great keyboard btw), I realized that my original question was to figure out why I decided to write a blog. To be honest, I'm not sure if I really answered that question so clearly, but the real reason why I am writing this blog really comes down to this:</p>
<p><strong>Why not?</strong></p>
<p>Ok, right now, I should probably be studying for AP Physics I, so I should end this. I really enjoyed writing this post and I hope you were informed (and entertained) by it too. I hope you enjoy everything that I will write in the future, and I'll catch you in the next post.</p>
<p>- Reid</p>`,
            },
            {
                type: "image",
                src: "/blog/11-1-19/3.png",
                caption: "Typing this blog post",
            },
        ],
    },
    {
        id: "how-life-can-change-in-a-moment-part-2",
        blocks: [
            {
                type: "paragraph",
                html: `<p>Sometimes, amazing things must come to an end. And that is exactly what happened today. This blog is not the place to go into detail about it, but if you know, then…well…you know. Actually…you know what…I'll go into some detail. After a year and 12 days of pure happiness and love, my girlfriend and I broke up for various reasons.</p>`,
            },
            {
                type: "paragraph",
                html: `<p>I edit this post almost two months later because, well…some things have happened that have turned this mutual breakup into a heartbreak. But while it has been tremendously difficult for me, I am working towards finding new happiness.</p>
<p>So just remember two things: One, while you may be devastated to reach the end of something special, it's actually much more of a new beginning than you think. And two, people do change, will do things you don't understand, and will unintentionally break your heart. The key is to do whatever you can to move on.</p>
<p>The biggest changes in life seem to occur at the busiest of times, in the strangest of ways, and under the most interesting of circumstances. January 30th, 2022 will be one of those days forever engrained in my memory :)</p>
<p>~~~</p>`,
            },
            {
                type: "paragraph",
                html: `<p>I update this post again, in August 2022, to say that I am doing so much better now. The past 7 months have really, really, really been difficult for me, but each and every day I work on moving past this heartbreak. I am so grateful for all my true friends and family for helping me along the way.</p>
<p>I do not want to go into the details about what happened publicly, but I can talk a little bit about how I am learning to move on. Here's the secret: it's all about changing your perception. Do you constantly think, "I'll never forgive her, yet I still love her, yet she broke my heart, and I'm so depressed and I can't figure out why she did that, and I just wish I could talk to her and fix things and be friends and ahhhhh!" Or, do you say, "You know, we once loved each other, but she's a different person now and that's okay. I'm going to wake up each day and say, 'today's a new day where I can find happiness,' and eventually I'll get there." Changing your perception this way does not come easy, and you can't decide to do it overnight, but it definitely comes with time and patience.</p>
<p>This is just the beginning of my journey. By no means am I over this yet, nor do I think I ever will be, but I am a heck of a lot better than I was even just a few months ago.</p>
<p>Anywho, I guess I'll see ya in the next blog post.</p>
<p><em>If you're lost and alone, or you're sinkin' like a stone<br />Carry on<br />May your past be the sound of your feet upon the ground<br />Carry on</em></p>`,
            },
        ],
    },
];

