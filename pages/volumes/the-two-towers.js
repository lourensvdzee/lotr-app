import { volumes } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";

export default function VolumePage() {
    const volume = volumes.find(
        ({ slug }) => slug === "the-two-towers"
    );

    return (
        <>
            <Link href="/">All Volumes</Link>;
            <h1>The Two Towers</h1>
            <p>{volume.description}</p>
            <ul>
                {volume.books.map((book) => (
                    <li key={book.ordinal}>{book.title}</li>
                ))}
            </ul>
            <Image src={volume.cover} alt={volume.title} width={140} height={230} />
            <p>
                <Link href="/volumes/the-fellowship-of-the-ring">previous Volume</Link>;
            </p><p>
                <Link href="/volumes/the-return-of-the-king">next Volume</Link>;
            </p>
        </>
    );
}