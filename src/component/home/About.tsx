import AboutContent from "./about/AboutContent";
import AboutStats from "./about/AboutStats";

const About = () => {
    return (
        <section id="about" className="relative overflow-hidden bg-black">
            {/* container-custom => 60px left/right at 1440 */}
            <div className="container-custom mx-auto max-w-[1440px]">
                <div className="grid grid-cols-1 gap-[403px] lg:grid-cols-2 lg:gap-6">
                    <AboutContent />
                    <AboutStats />
                </div>
            </div>
        </section>
    );
};

export default About;