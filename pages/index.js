/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import {useSession} from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return <Layout>
    <div className="flex justify-between text-blue-900">
      <h2>
        Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className="flex gap-1 overflow-hidden text-justify text-white bg-gray-900 rounded-full">
        <img src={session?.user?.image} alt="" className="w-10 h-10 rounded-full"/>
        <span className="p-2">
          {session?.user?.name} 
        </span>
      </div>
    </div>
  </Layout>
}
