import Link from 'next/link';
import logo1 from "@/assets/images/cognetz_logo.png";
import Image from 'next/image';

interface HeaderMenuProps {
    onMenuClick?: () => void;
}

const HeaderMenu = ({ onMenuClick }: HeaderMenuProps) => {
    return (
        <>
            <header className="header-menu-wrap">
                <div className="custom-container">
                    <div className="custom-row">

                        <Link href="/" className="logo">
                            <Image src={logo1} alt="logo" />
                        </Link>

                        {/* Navigation menu */}
                        <nav className="navbar">
                            <ul className="menu">
                                <li>
                                    <Link href="/">Home <span /></Link>
                                </li>
                                <li>
                                    <Link href="/about">About Us <span /></Link>
                                </li>
                                <li>
                                    <Link href="/#services">Services <span /></Link>
                                </li>
                                <li>
                                    <Link href="/projects">Projects <span /></Link>
                                </li>
                                <li>
                                    <Link href="/blog">Blog <span /></Link>
                                </li>
                                <li>
                                    <Link href="/faq">FAQ <span /></Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact <span /></Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Header right info */}
                        <div className="header-right-info">
                            <div className="header-phones">
                                <a href="tel:+971562343376" className="header-phone">
                                    Dubai: +971 562343376
                                </a>
                                <a href="tel:+917907249553" className="header-phone">
                                    Kerala: +91 7907249553
                                </a>
                            </div>
                            <button className="three-dots-btn" onClick={onMenuClick} aria-label="Toggle Menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderMenu;