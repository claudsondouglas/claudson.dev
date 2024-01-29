"use client";

import { Asterisk } from "lucide-react";
import { useEffect } from "react";

export default function Marquee() {
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        // If a user hasn't opted in for recuded motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller: any) => {
                // add data-animated="true" to every `.scroller` on the page
                scroller.setAttribute("data-animated", true);

                // Make an array from the elements within `.scroller-inner`
                const scrollerInner: any = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                // For each item in the array, clone it
                // add aria-hidden to it
                // add it into the `.scroller-inner`
                scrollerContent.forEach((item: any) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }

    }, [])

    return (
        <div className="bg-accent flex justify-center items-center">
            <div className="scroller" data-speed="slow">
                <ul className="tag-list scroller__inner flex justify-center items-center text-white">
                    <li>Desenvolvedor</li>
                    <Asterisk size={48}/>
                    <li>UX & UI</li>
                    <Asterisk size={48}/>
                    <li>Ciêntista de dados</li>
                    <Asterisk size={48}/>
                    <li>DevOPS</li>
                    <Asterisk size={48}/>
                    <li>Desenvolvedor</li>
                    <Asterisk size={48}/>
                    <li>UX & UI</li>
                    <Asterisk size={48}/>
                    <li>Ciência de dados</li>
                    <Asterisk size={48}/>
                    <li>DevOPS</li>
                    <Asterisk size={48}/>
                </ul>
            </div>
        </div>
    )
}