---
title: "Creating a Serverless Blogging App"
excerpt: "BlogAbout is a serverless web app created using modern web technologies such as Next.js 14, TailwindCSS and Vercel. The aim of the project was to develop a scalable web app that harness the power of serverless architecture for development of modern web apps."
coverImage: "/assets/blog/blogabout/blogabout.png"
date: "2024-06-11"
---

### **Introduction**

In recent years, serverless web applications are becoming more and more popular due to their scalability, affordability and ease of deployment. The purpose of this project was to create a blogging site that harnesses the power of serverless to create a web app that enables anyone to create fully formatted blog posts easily and efficiently.

### **Tech Stack**

- **Frontend and Backend**: Next.js 14 for unified development of frontend and backend
- **Styling**: TailwindCSS for in-line styling
- **Authentication**: NextAuth for flexible user authentication
- **Database**: MongoDB for a scalable and flexible database
- **Deployment**: GitHub for a repository and Vercel for easy deployment with CI/CD

### **Project Setup**

## **Frontend**

Setting up pages was easy through the use of the built-in app router. I created multiple pages including the landing page to introduce users to the site, the posts page to display all of the posts, a separate page for blog posts to be read and a user profile page for users who create an account.

I split the development of these pages into React components. This decomposed the process of developing and styling the frontend and enabled me to develop it in a structured manner. These components were divided based on the functionality and their persistence across the pages.

## **Backend**

I used Next.js API routes to handle the server-side logic in this application. Requests sent to these routes would then interact with the database. Through the use of these serverless functions, I was able to develop a backend that can scale in line with the potential demand which reduces the need for manual server management.

## **Integrating the Database**

I connected to the database through a connection string gathered from the Atlas. After that, I defined two models for Users and Posts through mongoose. 

## **Implementing NextAuth**

NextAuth is a library for authentication on Next.js. It enabled me to easily integrate authentication for multiple providers which simplified the process of creating a secure solution to sign up users and log them in. Users who are logged in are able to view and delete posts.

## **Deployment**

To deploy the project, it was simply a matter of pushing it to GitHub. From that point I used Vercel to create a project and hooked it up to my GitHub repository. After making sure to set the environment variables in Vercel, that was that.

### **Conclusion**

Building BlogAbout allowed me to get a first hand experience of the power and flexibility of modern web development technologies. The development and deployment process was exteremely simplified through the use of authentication libraries and built-in API routes which meant there was no need to use the traditional client/server architecture.

Deployment was also a breeze with Vercel. The UI was clear, easy to follow and cuts out all the configuration obstacles that can be found with other cloud providers such as AWS and Google Cloud. Not only this, but the integration with GitHub is also a nifty feature as a built-in CI/CD pipeline can be achieved with every push to the production branch.