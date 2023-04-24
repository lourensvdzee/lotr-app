import { introduction, volumes } from "../lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

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
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <button onClick={handleRandomVolumeClick}>Random Volume</button>
      <ul>
        {volumes?.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`} onClick={() => handleClick(volume.slug)}>
              {volume.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
