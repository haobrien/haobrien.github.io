import React from "react";
import './styles/FadeInSection.css'

export default function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    const { direction } = props

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(domRef.current);
        const updatedRef = domRef.current
        return () => observer.unobserve(updatedRef);
    }, []);

    return (
        <div
            className={`fade-in-${direction} ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}