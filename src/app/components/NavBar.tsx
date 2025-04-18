"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/app/components/ui/resizable-navbar";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";


export function CustomNavbar() {
  const { isSignedIn } = useUser()
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Generate Program",
      link: "/generate-program",
    },
    {
      name: "Profile",
      link: "/profile",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          {isSignedIn ? (
            <>
              <NavItems items={navItems}
              />
              <div className="flex items-center gap-4">
                <Link href="/generate-program" passHref>
                  <button className="group relative inline-flex h-9 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-500 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.5)]">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#0e7490_50%,#06b6d4_100%)] transition-all duration-500 group-hover:animate-[spin_1.5s_linear_infinite] group-hover:opacity-100" />
                    <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-900 group-hover:text-cyan-50 group-hover:backdrop-blur-xl">
                      Get Started
                    </span>
                    <span className="absolute inset-0 rounded-md opacity-0 transition-opacity duration-500 group-hover:opacity-20 group-hover:shadow-[inset_0_0_10px_2px_rgba(6,182,212,0.7)]" />
                  </button>
                </Link>
                <UserButton />
              </div>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <SignInButton>
                <button className="group relative inline-flex h-9 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-500 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.5)]">
                  {/* Animated gradient border (spins faster on hover) */}
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#0e7490_50%,#06b6d4_100%)] transition-all duration-500 group-hover:animate-[spin_1.5s_linear_infinite] group-hover:opacity-100" />

                  {/* Inner button with glow effect */}
                  <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-900 group-hover:text-cyan-50 group-hover:backdrop-blur-xl">
                    Sign In
                  </span>

                  {/* Hover glow effect */}
                  <span className="absolute inset-0 rounded-md opacity-0 transition-opacity duration-500 group-hover:opacity-20 group-hover:shadow-[inset_0_0_10px_2px_rgba(6,182,212,0.7)]" />
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-xl transition-all duration-700 [transform:translateZ(0)] hover:shadow-cyan-500/50 hover:brightness-110">
                  {/* Dynamic gradient shimmer */}
                  <span className="absolute inset-0 h-[200%] w-[200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_45%,rgba(255,255,255,0.1)_100%)] opacity-0 transition-all duration-700 group-hover:opacity-40"></span>

                  {/* Dual light streaks (more realistic reflections) */}
                  <span className="absolute top-0 left-0 h-[15%] w-1/3 translate-x-[-150%] rotate-[-25deg] bg-white/40 blur-[6px] transition-all duration-1000 group-hover:translate-x-[350%] group-hover:opacity-80"></span>
                  <span className="absolute bottom-0 right-0 h-[10%] w-1/4 translate-x-[150%] rotate-[15deg] bg-white/30 blur-[4px] transition-all duration-1200 group-hover:translate-x-[-350%]"></span>

                  {/* Liquid fill effect */}
                  <span className="absolute bottom-0 left-0 h-0 w-full bg-cyan-400/30 transition-all duration-500 group-hover:h-full group-hover:opacity-0"></span>

                  {/* Button content with 3D press effect */}
                  <span className="relative z-10 flex items-center gap-1.5 transition-all duration-300 group-hover:scale-[0.96] group-active:scale-[0.93]">
                    Sign Up

                  </span>
                </button>
              </SignUpButton>
            </div>
          )}

          {/* <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Sign In</NavbarButton>
            <NavbarButton variant="primary">Sign Up</NavbarButton>
          </div> */}

        </NavBody>


        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            {isSignedIn ? (
              <>
                <NavItems items={navItems}
                />
                <div className="flex items-center gap-4">
                  <Link href="/generate-program" passHref>
                    <button className="group relative inline-flex h-9 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-500 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.5)]">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#0e7490_50%,#06b6d4_100%)] transition-all duration-500 group-hover:animate-[spin_1.5s_linear_infinite] group-hover:opacity-100" />
                      <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-900 group-hover:text-cyan-50 group-hover:backdrop-blur-xl">
                        Get Started
                      </span>
                      <span className="absolute inset-0 rounded-md opacity-0 transition-opacity duration-500 group-hover:opacity-20 group-hover:shadow-[inset_0_0_10px_2px_rgba(6,182,212,0.7)]" />
                    </button>
                  </Link>
                  <UserButton />
                </div>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <SignInButton>
                  <button className="group relative inline-flex h-9 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-500 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.5)]">
                    {/* Animated gradient border (spins faster on hover) */}
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#0e7490_50%,#06b6d4_100%)] transition-all duration-500 group-hover:animate-[spin_1.5s_linear_infinite] group-hover:opacity-100" />

                    {/* Inner button with glow effect */}
                    <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-900 group-hover:text-cyan-50 group-hover:backdrop-blur-xl">
                      Sign In
                    </span>

                    {/* Hover glow effect */}
                    <span className="absolute inset-0 rounded-md opacity-0 transition-opacity duration-500 group-hover:opacity-20 group-hover:shadow-[inset_0_0_10px_2px_rgba(6,182,212,0.7)]" />
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-xl transition-all duration-700 [transform:translateZ(0)] hover:shadow-cyan-500/50 hover:brightness-110">
                    {/* Dynamic gradient shimmer */}
                    <span className="absolute inset-0 h-[200%] w-[200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_45%,rgba(255,255,255,0.1)_100%)] opacity-0 transition-all duration-700 group-hover:opacity-40"></span>

                    {/* Dual light streaks (more realistic reflections) */}
                    <span className="absolute top-0 left-0 h-[15%] w-1/3 translate-x-[-150%] rotate-[-25deg] bg-white/40 blur-[6px] transition-all duration-1000 group-hover:translate-x-[350%] group-hover:opacity-80"></span>
                    <span className="absolute bottom-0 right-0 h-[10%] w-1/4 translate-x-[150%] rotate-[15deg] bg-white/30 blur-[4px] transition-all duration-1200 group-hover:translate-x-[-350%]"></span>

                    {/* Liquid fill effect */}
                    <span className="absolute bottom-0 left-0 h-0 w-full bg-cyan-400/30 transition-all duration-500 group-hover:h-full group-hover:opacity-0"></span>

                    {/* Button content with 3D press effect */}
                    <span className="relative z-10 flex items-center gap-1.5 transition-all duration-300 group-hover:scale-[0.96] group-active:scale-[0.93]">
                      Sign Up

                    </span>
                  </button>
                </SignUpButton>
              </div>
            )}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}

