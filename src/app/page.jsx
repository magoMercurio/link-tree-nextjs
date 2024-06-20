import Image from "next/image";
import data from "@/data";

import { CardLink } from "@/components/CardLink";


export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center">
      <Image
        src={data.image}
        alt="avatar"
        width={150}
        height={150}
        priority={true}
        className="flex justify-center items-center mx-auto mt-16 w-24 h-24 rounded-full"
      />
      <h1 className="mt-4 mx-auto">{data.name}</h1>
      <p className=" text-pretty text-center">{data.bio}</p>
      <article className="min-w-0  w-80 sm:w-[600px] md:w-[700px] lg:w-[900px]">
        {
          data.links.map((link, index) => (
            <CardLink key={index} {...link} />
          ))
        }
        
      </article>
    </main>
  );
}
