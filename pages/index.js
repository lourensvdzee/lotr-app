import { introduction, volumes } from "../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import GlobalStyles from "../styles";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function HomePage() {
  const router = useRouter();

  const handleClick = (slug) => {
    router.push(`/volumes/${slug}`);
  };

  function handleRandomVolumeClick() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <div>
      <GlobalStyles />
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes?.map((volume) => (
          <li key={volume.slug}>
            <div>
              <Image src={volume.cover} alt={volume.title} width={93} height={153} />
            </div>
            <Link href={`/volumes/${volume.slug}`} onClick={() => handleClick(volume.slug)}>
              {volume.title}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolumeClick}>Random Volume</button>
    </div>
  );
}
