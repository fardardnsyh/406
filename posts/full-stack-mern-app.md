---
title: "Creating a Twitter Clone MERN App"
excerpt: "The desire for Football data has never been bigger and Twitter is a great social media app for having conversations with anyone. By combining a great source of Football data and a platform for Football fans to have discussions, chat and share ideas, a great niche social media app can be created to fulfill this."
coverImage: "/assets/blog/mern-app/cover.jpg"
date: "2024-05-27T05:35:07.322Z"
---

### **Introduction**

The desire for Football data has never been bigger and Twitter is a great social media app for having conversations with anyone. By combining a great source of Football data and a platform for fans of Football to have discussions, chat and share ideas, a great niche social media app can be created to fulfill this.

### **Setting up the Project**

The project is structured into two distinct apps;

- **Client**: Front-End application for that handles the User Interface and sends requests to the Server.
- **Server**: Back-End application that receives requests, performs actions and returns appropriate data back to the client.

### **Crafting the User Interface**

To create the UI, I opted for TailwindCSS as I love the usability that in-line styling provides as well as the built in utilities for responsive design.

Given that this application is intended to be a niched Twitter clone, I wanted to create the UI in the same style as Twitter.

One of the key features is the clear and concise layout. The central feed displays the most important content, i.e user posts or the contents of the page, with a consistent navigation bar down the left side. This design ensures that users can easily navigate through the site and find what they are looking for.

Another key feature is interactivity. I incorporated this through the use of one-click actions enabling users to like, retweet and reply in a single tap which encourages them to engage more frequently. As well as this, the use of threaded conversations, with each reply appearing below each other allows users to have discussions in a structured manner.

### **Dealing with a lot of data**

A source of quality Football data was a top priority for this project. I determined that the [APIFootball](https://www.api-football.com "Great source of Football data") would be a good choice given that it contains a vast amount of data for many leagues, players and teams as well as real-time updates which would enable me to serve data that was accurate to the user at all times.

APIFootball has a free tier which limits users to 100 requests per day and the next best tier offering 7500 requests per day, albeit at a cost of $19 per month.

## **Making it scalable**

While planning this project, the importance of caching data became apparent very quickly. If the site was to have a couple hundred or thousands users, the requests to the data API would very quickly add up and once past the threshold of requests available, the site would be unable to retreive any data once requested, effectively rendering the site useless.

Given that the third party API has rate limiting in place, it was necessary to structure the project in a way that would store the results of requests to the API so that they could be re-used. This is where the power of caching can be seen. Instead of sending a request every time a user needs it, the data can be fetched from cache memory which enables one request to the API to serve the data as many times as possible, thus reducing the amount of requests sent to the API.

I opted to use Redis to store the data requests as there is clear documentation and it is a popular choice amongst developers. After creating an account, a redis store was set up and could be accessed via a HTTP request.

After setting up a cache storage and a hook to fetch data from the API, I developed a method of automating this process. To achieve full functionality, data is required to be accurate at all times in order to provide a useful experience.

For example, the league standings would need to be updated every day and the data for live fixtures, every minute perhaps.

I implemented this by using node-schedule, a library for scheduling events (functions) to be executed at specific dates or recurring intervals. The event scheduler runs whilst the app is live, meaning it never goes down unless the application does itself. For each event, a time interval was specified, be it 1 minute or 24 hours.

The event would trigger once the interval was realised and the hook previously mentioned before would fire a request to the API. The response would then be parsed into an applicable format before finally being stored in Redis. When the data is needed by the user, the client fires a request to the appropriate endpoint within the server API, where the data is fetched from the Redis cache and sent back to the client.


### **Conclusion**

The development of KickTalk was a fun and rewarding experience for me. I discovered new libraries such as node-schedule, dealt with particularly tricky aspects of the frontend including image uploading and resizing as well as improving my skills with TailwindCSS.

I was particularly pleased with the event scheduling framework I developed. This framework was pivotol part of the project as it enabled the app to display data in real-time, which ensured that the data was always fresh.

Unfortunately, although the seamless Chat functionality works great in development, it came to my attention that Vercel does not support Websockets after deployment. To fix this in the future, it would be necessary to use a supported library named 'TalkChat.js' to ensure that it works on Vercel.