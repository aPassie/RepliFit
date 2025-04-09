import {SignInButton, SignOutButton , SignedIn, SignedOut} from "@clerk/nextjs"

const HomePage = () => {
  return (
    <div>
      HomePage
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      
    </div>
  )
}

export default HomePage
