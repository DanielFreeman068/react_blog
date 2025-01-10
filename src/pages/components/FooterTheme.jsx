import '../css/FooterTheme.css';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FooterTheme({ logoImage, routes = {}, socialLinks = {}, webName = "", address = "" }) {
    const iconStyle = {
        width: "25px",
        height: "25px",
        margin: "0 10px",
        cursor: 'pointer',
    };

    return (
        <div>
            <footer>
                <div className="fcont">
                    <div className="fhead">
                        {!webName ? (
                            <img
                                src="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
                                alt="logo"
                            />
                        ) : (
                            <header className='footerHeader'>{webName}</header>
                        )}
                        {address && <div className='ftxt'>{address}</div>}
                    </div>
                    <div className="links">
                        <h1>Categories</h1>
                        {routes.lifestyle && <h3><a href={routes.lifestyle}>Lifestyle</a></h3>}
                        {routes.technology && <h3><a href={routes.technology}>Technology</a></h3>}
                        {routes.testimonials && <h3><a href={routes.testimonials}>Testimonials</a></h3>}
                        {routes.contact && <h3><a href={routes.contact}>Contact Us</a></h3>}
                        {routes.faqs && <h3><a href={routes.faqs}>FAQs</a></h3>}
                    </div>
                    <div className="socials">
                        <h1 className="socialtxt">Social Media</h1>
                        <div className="social-imgs">
                            {socialLinks.github && (
                                <a
                                    href={socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <FaGithub style={{ ...iconStyle, color: "#181717" }} />
                                </a>
                            )}
                            {socialLinks.twitter && (
                                <a
                                    href={socialLinks.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <FaXTwitter style={{ ...iconStyle, color: "#1DA1F2" }} />
                                </a>
                            )}
                            {socialLinks.linkedIn && (
                                <a
                                    href={socialLinks.linkedIn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <FaLinkedin style={{ ...iconStyle, color: "#0077B5" }} />
                                </a>
                            )}
                            {socialLinks.instagram && (
                                <a
                                    href={socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <FaInstagram style={{ ...iconStyle, color: "#E4405F" }} />
                                </a>
                            )}
                            {socialLinks.facebook && (
                                <a
                                    href={socialLinks.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <FaFacebook style={{ ...iconStyle, color: "#1877F2" }} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="foot">
                    <h3 className="topPage">
                        <button onClick={() => window.scrollTo({ top: 0 })}>Top of Page</button>
                    </h3>
                    All Rights Reserved | ©2024 {webName}
                </div>
            </footer>
        </div>
    );
}

export default FooterTheme;
