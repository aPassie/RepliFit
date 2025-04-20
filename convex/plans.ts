import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Mutation to create a new plan
export const createPlan = mutation({
  args: {
    userId: v.string(), // User ID
    name: v.string(), // Plan name
    workoutPlan: v.object({
      schedule: v.array(v.string()), // Weekly schedule
      exercises: v.array(
        v.object({
          day: v.string(), // Day of the week
          routines: v.array(
            v.object({
              name: v.string(), // Exercise name
              sets: v.number(), // Number of sets
              reps: v.number(), // Number of reps
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
  },
  handler: async (ctx, args) => {
    const activePlans = await ctx.db
      .query("plans")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();

    for (const plan of activePlans) {
      await ctx.db.patch(plan._id, { isActive: false }); // Deactivate active plans
    }

    const planId = await ctx.db.insert("plans", args); // Add new plan

    return planId; // Return new plan ID
  },
});

// Query to get all plans for a user
export const getUserPlans = query({
  args: { userId: v.string() }, // User ID
  handler: async (ctx, args) => {
    const plans = await ctx.db
      .query("plans")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();

    return plans; // Return list of plans
  },
});