import Button from "@/backend/components/Button";
import Card from "@/backend/components/Card";


const socials = [
    {
        icon: "twitter",
        href: "/",
    },
    {
        icon: "facebook",
        href: "/",
    },
    {
        icon: "instagram",
        href: "/",
    },
    {
        icon: "threads",
        href: "/",
    },
];

const GetMoreCustomers = () => {
    return (
        <Card title="Transmission media information">
            <div className="mb-6 px-5 text-body-2 text-t-secondary max-lg:px-3">
            Explore comprehensive details about our advanced aluminum processing solutions. 
            Discover the technical excellence that sets our products apart.  🔥
            </div>
            <div className="flex gap-3">
                {socials.map((social, index) => (
                    <Button
                        className="flex-1 !px-0"
                        icon={social.icon}
                        key={index}
                        isStroke
                        as="a"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                ))}
            </div>
        </Card>
    );
};

export default GetMoreCustomers;
