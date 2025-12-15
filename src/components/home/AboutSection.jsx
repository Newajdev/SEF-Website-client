import React from "react";

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-6">
                    About SEF
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Shah Emdadia Freelancers (SEF) is a premier IT training institute dedicated to empowering individuals with expert-led skills. We bridge the gap between education and industry demands, ensuring our students are not just certified, but career-ready. With a focus on practical learning and professional mentorship, we help you unlock your full potential in the digital world.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
