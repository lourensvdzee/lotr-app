import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

function RenderBook() {
    const router = useRouter();
    const { slug } = router.query;
    const volume = volumes.find((volume) => volume.slug === slug);

    return (
        <div>
            <Link href="/">All Volumes</Link>;
            <h1>{volume.title}</h1>
            <p>{volume.description}</p>
            <ul>
                {volume.books.map((book) => (
                    <li key={book.ordinal}>{book.title}</li>
                ))}
            </ul>
            <Image src={volume.cover} alt={volume.title} width={140} height={230} />
        </div>
    );
}

export default RenderBook;


