import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(), // User's name
    email: v.string(), // User's email
    image: v.optional(v.string()), // Optional profile image
    clerkId: v.string(), // Clerk ID for authentication
  }).index("by_clerk_id", ["clerkId"]),

  plans: defineTable({
    userId: v.string(), // ID of the user
    name: v.string(), // Plan name
    workoutPlan: v.object({
      schedule: v.array(v.string()), // Weekly schedule
      exercises: v.array(
        v.object({
          day: v.string(), // Day of the week
          routines: v.array(
            v.object({
              name: v.string(), // Exercise name
              sets: v.optional(v.number()), // Optional sets
              reps: v.optional(v.number()), // Optional reps
              duration: v.optional(v.string()), // Optional duration
              description: v.optional(v.string()), // Optional description
              exercises: v.optional(v.array(v.string())), // Optional sub-exercises
            })
          ),
        })
      ),
    }),
    dietPlan: v.object({
      dailyCalories: v.number(), // Daily calorie target
      meals: v.array(
        v.object({
          name: v.string(), // Meal name
          foods: v.array(v.string()), // Foods in the meal
        })
      ),
    }),
    isActive: v.boolean(), // Whether the plan is active
  })
    .index("by_user_id", ["userId"]) // Index by user ID
    .index("by_active", ["isActive"]), // Index by active status
});