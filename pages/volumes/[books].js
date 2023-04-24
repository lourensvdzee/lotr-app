import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

function RenderBook() {
    const router = useRouter();
    const { books } = router.query;
    const volumeIndex = volumes.findIndex((volume) => volume.slug === books);
    const volume = volumes[volumeIndex];
    const prevVolume = volumes[volumeIndex - 1];
    const nextVolume = volumes[volumeIndex + 1];

    return (
        <div>
            <h1>{volume.title}</h1>
            <p>{volume.description}</p>
            <ul>
                {volume.books.map((book) => (
                    <li key={book.ordinal}>{book.title}</li>
                ))}
            </ul>
            <Image src={volume.cover} alt={volume.title} width={140} height={230} />
            <p>
                <Link href="/">All Volumes</Link>;
            </p><p>
                {prevVolume && (
                    <Link href={`/volumes/${prevVolume.slug}`}>Previous volume: {prevVolume.title}</Link>
                )}
            </p>
        </div>
    );
}

export default RenderBook;
