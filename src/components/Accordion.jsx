import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { accordionContent } from "../constants";
import plusIcon from '../assets/images/icon-plus.svg';
import minusIcon from '../assets/images/icon-minus.svg';

const Accordion = () => {
    const [expand, setExpand] = useState(null);

    return (
        <div className="accordion mt-4 flex flex-col">
            {
                accordionContent.map((item, index) => (
                    <div key={index} className='accordion-item py-4 [&:not(:first-child)]:border-t cursor-pointer'>
                        <div className='flex items-center gap-2 justify-between' onClick={() => expand === index ? setExpand(null) : setExpand(index)}>
                            <h2 className='text-dark-purple font-semibold text-lg transition-all ease-in-out hover:text-light-purple'>{item.header}</h2>
                            <img src={expand === index ? minusIcon : plusIcon} className={`transition-all ease-in-out duration-300 ${expand === index ? "rotate-180" : "rotate-0"}`} alt="Plus" />
                        </div>
                        <AnimatePresence>
                            {
                                expand === index &&
                                <motion.div
                                    key={index}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className='accordion-content overflow-hidden'
                                >
                                    <p className='text-grayish-purple font-medium leading-6 py-4'>{item.paragraph}</p>
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>
                ))
            }
        </div>
    );
};

export default Accordion;
