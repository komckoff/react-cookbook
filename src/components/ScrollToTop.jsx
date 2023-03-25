import { useEffect, useState } from 'react';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => (window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false));

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return isVisible ? (
        <button className="btn scrollTop" onClick={scrollToTop}>
            ^
        </button>
    ) : null;
}

export { ScrollToTop };
