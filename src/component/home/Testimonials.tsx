import TestimonialsHeader from "./testimonials/TestimonialsHeader";
import TestimonialCard from "./testimonials/TestimonialCard";
import { testimonialColumns } from "./testimonials/testimonials";

const Testimonials = () => {
    return (
        <section id="testimonials" className="relative overflow-hidden bg-black py-[100px]">
            {/* container-custom => 60px left/right at 1440 (content = 1320px) */}
            <div className="container-custom mx-auto">
                <TestimonialsHeader />

                {/* 3 columns (424px each at 1440), gap 24px between columns and cards */}
                <div className="mt-16 flex flex-col gap-6 lg:flex-row">
                    {testimonialColumns.map((column, i) => (
                        <div key={i} className="flex flex-1 flex-col gap-6">
                            {column.map((item) => (
                                <TestimonialCard key={item.name} {...item} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;