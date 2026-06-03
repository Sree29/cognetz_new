import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    name?: string;
    thumb?: string;
    icon?: string;
    text?: string;
}

const SingleServicesV1 = ({ services }: { services: DataType }) => {
    const { id, icon, name, thumb, text } = services

    return (
        <>
            <div className="service-inner">
                <h4 className="title">
                    <Image src={`/assets/images/${icon}`} alt="icon" width={100} height={100} />
                    <Link href={`/service-details/${id}`}>{name}</Link>
                </h4>
                <p className="service-feature-lists" style={{ color: "var(--secondary)", opacity: 0.8, fontSize: "16px", lineHeight: "1.6", fontWeight: "400" }}>
                    {text}
                </p>
                <div className="service-img-box">
                    <Image src={`/assets/images/${thumb}`} alt="Icon" width={512} height={468} />
                </div>
            </div>
        </>
    );
};

export default SingleServicesV1;