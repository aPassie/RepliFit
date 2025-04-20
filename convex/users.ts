import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const syncUser = mutation({
  args: {
    name: v.string(), // User's name
    email: v.string(), // User's email
    clerkId: v.string(), // Clerk ID
    image: v.optional(v.string()), // Profile image (optional)
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .first();

    if (existingUser) return; // Skip if user exists

    return await ctx.db.insert("users", args); // Add new user
  },
});

export const updateUser = mutation({
  args: {
    name: v.string(), // User's name
    email: v.string(), // User's email
    clerkId: v.string(), // Clerk ID
    image: v.optional(v.string()), // Profile image (optional)
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (!existingUser) return; // Skip if user doesn't exist

    return await ctx.db.patch(existingUser._id, args); // Update user
  },
});