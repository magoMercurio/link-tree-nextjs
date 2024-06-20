import Image from "next/image";

export function CardLink(link) {
  const { title, image, url } = link;
  return (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="flex flex-row my-4 items-center border-2 border-black p-8 transition-colors duration-200 bg-white rounded-lg hover:bg-gray-100"
  >
    <Image src={image} alt={title} width={64} height={64} className="w-auto h-auto mr-4" />
    <h2 className="mx-auto">{title}</h2>
  </a>
  )
}
