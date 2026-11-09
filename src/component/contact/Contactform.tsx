"use client";

import { ArrowRight } from "lucide-react";
import FormField from "./Formfield";

const ContactForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: send the form data here
    };

    return (
        // gradient border
        <div className="rounded-[40px] bg-gradient-to-br from-white/20 via-white/5 to-[#D32800]/30 p-px">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 rounded-[39px] bg-[#0A0403] p-6 sm:p-10 lg:p-[60px]"
                style={{
                    backgroundImage: `
                        radial-gradient(ellipse 19% 45% at 5% 4%, rgba(190,40,0,0.7), transparent 70%),
                        radial-gradient(ellipse 18% 45% at 96% 6%, rgba(190,40,0,0.55), transparent 70%),
                        radial-gradient(ellipse 55% 38% at 50% 100%, rgba(210,45,0,0.7), transparent 70%)
                    `,
                }}
            >
                {/* Row 1: two columns, 24px gap */}
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
                    <FormField
                        id="firstName"
                        label="First Name"
                        placeholder="Enter your first name..."
                    />
                    <FormField
                        id="lastName"
                        label="Last Name"
                        placeholder="Enter your last name..."
                    />
                </div>

                <FormField
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Enter your email address..."
                />

                <FormField
                    id="message"
                    label="How can we help you?"
                    type="textarea"
                    placeholder="Enter your message..."
                />

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex h-[60px] w-[183px] items-center justify-center gap-1 rounded-[60px] border border-white/30 bg-[radial-gradient(ellipse_at_bottom,#E9917D_0%,#D32800_75%)] px-[19px] py-4 text-lg font-normal text-white transition-all duration-200 hover:brightness-110"
                    >
                        Send Message
                        <ArrowRight size={14.58} strokeWidth={2} className="shrink-0" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;