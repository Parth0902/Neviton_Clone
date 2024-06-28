import "./contentWrapper.css";
import Image from "next/image";
import Link from "next/link";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const contentWrapper = ({ data, textAlign, isRight = false }) => {
    return (
        <>
            <div className={isRight ?"section2--part1 lg:items-end":"section2--part1 items-start"}>
                <h4 className={`${textAlign}`}>{data.heading}</h4>
                <p className={`${textAlign}`}>{data.subheading}</p>
            </div>
            <Accordion type="single" collapsible>
                {data.services.map((service, i) => {
                    return (
                        <AccordionItem value={i + 1} key={i + 1}>
                            <AccordionTrigger
                                className={isRight ? "flex items-start lg:items-end lg:justify-end" : ""}
                            >
                                <div className="section2--part2">
                                    <h1 className="lightText">{service.heading}</h1>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className={`xl:${textAlign} section2--part3`}>
                                    <div className="section2--part3--ImageContainer">
                                        <Image
                                            src={service.img}
                                            alt=""
                                            className="section2--part3--Image"
                                            width={539}
                                            height={278}
                                        />
                                    </div>

                                    <ul>
                                        {service.text.map((d, index) => (
                                            <li key={index} >{d}</li>
                                        ))}

                                        <button className="px-4">
                                            <Link href={{ pathname: service.link, query: service.query }} >
                                                LEARN MORE
                                            </Link>
                                        </button>
                                    </ul>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </>
    );
};

export default contentWrapper;
