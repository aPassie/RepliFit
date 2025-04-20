# RepliFit: Your AI-Powered Fitness Companion

## 🏋️‍♀️ Where AI Meets Your Fitness Journey (So You Don't Have To)

RepliFit is the fitness app for people who want personalized workout and diet plans without the commitment of actually having to think about them. Why spend hours researching exercises when our AI can do it while you contemplate if opening this app counts as your daily workout?

## Highlights:
* 🚀 **Tech Stack**: Next.js, React, Tailwind & Shadcn UI (because we're too fancy for Bootstrap)
* 🎨 **UI Components**: Aceternity components (for those extra animations that make you feel like you're exercising just by scrolling)
* 🎙️ **Voice AI Assistant**: Talk to our Vapi-powered AI that actually listens to you (unlike your gym buddy)
* 🧠 **LLM Integration**: Gemini AI that's smarter about fitness than you'll ever be
* 🏋️ **Personalized Workout Plans**: Exercise routines for people of all fitness levels (including "hasn't left the couch in years")
* 🥗 **Custom Diet Programs**: Meal plans that account for your preferences (and judge you less than a real nutritionist would)
* 🔒 **Authentication**: Clerk-powered login so secure even your fitness goals can't escape
* 💾 **Database**: Convex for real-time updates (because watching your progress bar move is more satisfying than actual progress)
* 🎬 **Real-time Program Generation**: Create fitness plans faster than you can come up with excuses not to use them
* 💻 **Responsive Layouts**: Looks great on all devices (even the one you hide under your pillow when you should be exercising)

## Features That Make Your Fitness Journey Less Painful

* **Smart AI Assistant**: Have deep conversations about your fitness goals while the AI secretly wonders if you're actually going to follow through this time
* **Personalized Workout Plans**: Custom routines based on your fitness level, injuries, and that one YouTube video you watched about proper squatting
* **Diet Recommendations**: Meal plans that pretend you won't replace them with takeout by Wednesday
* **User Authentication**: Sign in with GitHub, Google, or email/password (we won't tell anyone you created yet another fitness app account)
* **Program Management**: Create multiple fitness programs so you can abandon them sequentially throughout the year
* **Responsive Design**: Beautiful UI that works across all devices, giving you no technical excuse not to check your workouts

## Setup .env File (Where All the Magic Secrets Live)

```js
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Vapi Voice AI
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
NEXT_PUBLIC_VAPI_API_KEY=

# Convex Database
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
```

## Getting Started (Almost as Easy as Skipping Leg Day)

1. Clone the repository (and your motivation)
2. Install dependencies:
```shell
npm install
```
3. Set up your environment variables as shown above
4. Run the development server:
```shell
npm run dev
```
5. Open http://localhost:3000 in your browser and prepare to be motivated (results may vary)

## Deployment (For When You're Actually Committed)

This application can be easily deployed to Vercel, unlike your fitness goals:

```shell
npm run build
npm run start
```

Or connect your GitHub repository to Vercel for automatic deployments that require less effort than doing a single push-up.

## Technologies Used (The Real MVPs)

* **Next.js**: React framework that's more flexible than you'll ever be
* **Tailwind CSS & Shadcn UI**: For styling that's more consistent than your gym attendance
* **Aceternity Components**: For animations smoother than your post-workout protein shake
* **Clerk**: Authentication system that won't judge your password choices like your trainer judges your form
* **Vapi**: Voice agent that listens to your fitness woes better than your friends do
* **Convex**: Real-time database that updates faster than you can change your mind about today's workout
* **Gemini AI**: Large Language Model that knows more about proper exercise form than you ever will

## Learn More (If You Haven't Given Up Reading Already)

To learn more about the technologies used in this project:
* [Next.js Documentation](https://nextjs.org/docs) (lighter reading than your dumbbells)
* [Clerk Documentation](https://clerk.dev/docs) (more secure than your gym locker)
* [Vapi Documentation](https://vapi.ai) (more articulate than you after a heavy workout)
* [Convex Documentation](https://docs.convex.dev) (updates faster than your recovery time)
* [Gemini AI Documentation](https://ai.google.dev/) (smarter than that guy who's always giving unsolicited advice at the gym)

---

**RepliFit**: Because the only thing that should be heavy is your weights, not your fitness app.
