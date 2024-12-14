import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Protected Route
      <UserButton />
    </div>
  );
}
