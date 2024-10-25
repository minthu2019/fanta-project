import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questionArrays = [
  {
    question: "What is Fanta?",
    answer:
      "Fanta is a popular fruit-flavored carbonated soft drink created by The Coca-Cola Company.",
  },
  {
    question: "What flavors does Fanta offer?",
    answer:
      "Fanta offers a variety of flavors including orange, grape, pineapple, and more!",
  },
  {
    question: "Is Fanta gluten-free?",
    answer:
      "Yes, Fanta is gluten-free, making it suitable for those with gluten intolerance.",
  },
  {
    question: "How many calories are in a can of Fanta?",
    answer: "A 12 oz can of Fanta Orange contains about 160 calories.",
  },
];

const Question = () => {
  return (
    <section>
      <div className="container py-12 bg-white">
        <h1 className=" text-3xl text-center font-bold py-4">
          Frequently Asked Questions
        </h1>
        <div className=" flex items-center justify-center flex-col p-6  max-w-[775px] mx-auto space-y-10">
          {questionArrays.map((item, index) => {
            return (
              <Accordion key={index} type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className=" text-[16px] md:text-xl ">{item.question}</AccordionTrigger>
                  <AccordionContent className=" text-sm text-gray-500">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Question;
