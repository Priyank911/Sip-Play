import React from 'react';
import { ReactComponent as SipnPlayAbout } from '../assets/sipnplay-about.webp'; // Adjust the path to your image
import SectionTitle from './SectionTitle'; // Create a SectionTitle component if needed

const about = () => {
    return (
        <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <SectionTitle title="About Us" />
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
                        <div className="relative rounded-lg overflow-hidden">
                            <SipnPlayAbout className="object-cover w-full h-full" alt="About Us" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="text-lg leading-relaxed">
                            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                            <p className="mb-4">
                                Sip & Play NYC was founded with the vision of creating a unique blend of entertainment and education. Our mission is to provide a fun and engaging environment where people of all ages can come together to learn, play, and create lasting memories.
                            </p>
                            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                            <ul className="mb-4">
                                <li className="mb-2">
                                    <strong className="font-semibold">Inclusivity:</strong> We welcome everyone, regardless of age, background, or skill level.
                                </li>
                                <li className="mb-2">
                                    <strong className="font-semibold">Fun:</strong> We believe that learning should be fun and enjoyable.
                                </li>
                                <li className="mb-2">
                                    <strong className="font-semibold">Community:</strong> We strive to build a strong, supportive community where everyone feels at home.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
