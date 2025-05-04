import { Link } from '@inertiajs/react';
import Image from '../Image';

type LogoProps = {
    className?: string;
};

const Logo = ({ className }: LogoProps) => {
    return (
        <Link className={`block h-12 w-12 ${className || ''}`} href="/">
            <Image className="size-full opacity-100 dark:!hidden" src="backend/images/logo-light.png" alt="logo" width={48} height={48} />
            <Image className="!hidden size-full opacity-100 dark:!block" src="backend/images/logo-light.png" alt="logo" width={48} height={48} />
        </Link>
    );
};

export default Logo;
