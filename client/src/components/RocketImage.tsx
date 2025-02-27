import Image from 'next/image'

export default function RocketImage() {
    return (
        <Image
            src={'/rocket-svgrepo-com.svg'}
            alt={''}
            width={15}
            height={15}
        ></Image>
    )
}
