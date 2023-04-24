import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

function RenderBook() {
    const router = useRouter();
    const { books } = router.query;
    const volumeIndex = volumes.findIndex((volume) => volume.slug === books);
    const volume = volumes[volumeIndex];
    const prevVolume = volumes[volumeIndex - 1];
    const nextVolume = volumes[volumeIndex + 1];

    const BackgroundContainer = styled.div`
    background-color: ${volume.color};
  `;

    return (
        <div>
            <p>
                <Link href="/">All Volumes</Link>;
            </p>
            <p>
                <h1>{volume.title}</h1>
                <p>{volume.description}</p>
                <BackgroundContainer>
                    <ul>
                        {volume.books.map((book) => (
                            <li key={book.ordinal}>{book.title}</li>
                        ))}
                    </ul>
                    <Image src={volume.cover} alt={volume.title} width={140} height={230} />
                </BackgroundContainer>
            </p>
            {
                prevVolume && (
                    <div>
                        <h5>Previous Volume</h5>
                        <Link href={`/volumes/${prevVolume.slug}`}>{prevVolume.title}</Link>
                    </div>
                )
            }
            {
                nextVolume && (
                    <div>
                        <h5>Next Volume</h5>
                        <Link href={`/volumes/${nextVolume.slug}`}>{nextVolume.title}</Link>
                    </div>
                )
            }
        </div >
    );
}

export default RenderBook;
