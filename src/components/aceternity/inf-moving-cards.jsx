"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}) => {
    const containerRef = React.useRef(null); // Updated this line
    const scrollerRef = React.useRef(null); // Updated this line

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards",
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse",
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]",
                )}
            >
                {items.map((item, i) => (
                    <Link key={i} href={{ pathname: "/showcase", query: item.query }}>
                        <li className="w-[90vw] md:w-[550px] h-[300px] drop-shadow-xl bg-white text-black max-w-full relative rounded-2xl border flex-shrink-0 border-slate-700">
                            <div
                                aria-hidden="true"
                                className="px-4 user-select-none -z-1 pointer-events-none flex items-center justify-center h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            >
                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-1 justify-between items-start flex-1">
                                        <h1 className="text-xl lg:text-3xl font-medium">
                                            {item.heading}
                                        </h1>
                                        <p className="text-teal-600 text-lg">{"Read Story >"}</p>
                                    </div>

                                    <div className="flex-1 flex justify-end">
                                        <Image src={item.img} width={250} height={200} alt="" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};
