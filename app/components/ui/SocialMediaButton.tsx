import Image, { StaticImageData } from "next/image";
import LinkButton from "./LinkButton";

export default function SocialMediaButton ({src, href}:{src: StaticImageData, href: string}) {
  return (
		<LinkButton href={href} className='bg-transparent'>
			<Image alt="Social Media Icon" src={src} width={24} height={24}/>
		</LinkButton>
	)
}