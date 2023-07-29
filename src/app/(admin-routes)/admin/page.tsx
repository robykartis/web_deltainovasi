import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ButtonLogout from "@/components/ButtonLogout";
import { getServerSession } from "next-auth";

export default async function Admin() {
  const session = await getServerSession(nextAuthOptions);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="p-5"> {JSON.stringify(session)}</div>
      <h1 className="text-2xl mb-8">Hay, {session?.user.email}</h1>
      <ButtonLogout />
    </div>
  );
}
