"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import college from "../public/college.png";
import school from "../public/EDkQGdeXkAIiM0q.svg";
import play from "../public/playground.jpg";
import Image from "next/image";

export const education = [
    {
        institute: "Chandigarh University",
        title: "Bachelor of Technology in Computer Science",
        session: "2021 - 2025",
        description: "Focused on learning advanced concepts in software development, algorithms, data structures, and computer networks. Participated in various tech events and projects, honing skills in coding and problem-solving.",
        image: college,
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src= {college}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        institute: "Vivekanad Global School",
        title: "Intermediate (CBSE)",
        session: "2020 - 2021",
        description: "Specialized in Science with a focus on Mathematics, Physics, and Chemistry. Developed a strong foundation in analytical thinking and problem-solving, which paved the way for a career in technology.",
        image: school,
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src= {school}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        institute: "Vivekanad Global School",
        title: "Matriculation (CBSE)",
        session: "2018 - 2019",
        description: "Completed secondary education with a focus on core subjects. Built a strong academic foundation, excelling in subjects like Mathematics and Science, which fueled an interest in pursuing a career in technology.",
        image: play,
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src= {play}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];

const Education = () => {
    return (
        <div id="education" className="py-20 w-full">
            <h1 className="heading py-20 w-full">
                My <span className="text-purple">Education</span>
            </h1>
            <div>
                <StickyScroll content={education} />
            </div>
        </div>
    );
}

export default Education;
