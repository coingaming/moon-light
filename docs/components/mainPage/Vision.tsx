import VisionCard from "./VisionCard";
import testimonial_1 from "@/public/testimonial_1.png";
import testimonial_2 from "@/public/testimonial_2.png";
import testimonial_3 from "@/public/testimonial_3.png";
import vision_front_card_header_text_1 from "@/public/vision_front_card_header_text_1.png";
import vision_front_card_header_text_2 from "@/public/vision_front_card_header_text_2.png";
import vision_front_card_header_text_3 from "@/public/vision_front_card_header_text_3.png";

const Vision = () => (
  <>
    <h2 className="text-moon-56 font-medium max-w-3xl text-bulma">
      Build the best products faster
    </h2>
    <p className="text-moon-18 text-bulma max-w-3xl">
      Create a tool that will reduce the time spent on routine and provide an
      opportunity for inspiration and innovation
    </p>
    <div className="flex flex-col gap-16 text-bulma">
      <VisionCard
        headerImage={vision_front_card_header_text_1}
        altHeaderImage="Efficiency, not consistency"
        subtext="Consistency is a result of efficiency, not the other way around. When the system is intuitive and empowering, consistency becomes an automatic by-product of adoption. "
        innerCardText="A design system isn't a project. It's a product serving products."
        name="Nathan Curtis"
        company="EightShapes"
        userImage={testimonial_1}
        heading="Efficiency"
        subHeading="A Design System ensures maximum returns on time spent on code and design, with minimal wasted energy, in order to achieve the same results."
        supportingTextItems={[
          "It improves the approach, minimizing time spent creating products from scratch so it can be better spent solving problems.",
          "It improves code through iteration, which is cheaper than writing quality code from scratch on demand.",
          "It eliminates the need to repeatedly communicate design decisions that are documented and implemented.",
          "It frees teams up from maintaining their own code, which is often duplicated.",
        ]}
      />
      <VisionCard
        headerImage={vision_front_card_header_text_2}
        altHeaderImage="Dynamic capability + stability = agility"
        subtext="Agility needs two things. One is a dynamic capability, the ability to move fast—speed, nimbleness, responsiveness. And agility requires stability, a stable foundation—a platform, if you will—of things that don't change."
        innerCardText="The more decisions you put off, and the longer you delay them, the more expensive they become."
        name="Craig Villamor"
        company="Google Maps"
        userImage={testimonial_2}
        heading="Agility"
        subHeading="A Design System facilitates a product's agility by preventing stagnation on topics already discussed, agreed upon, documented and implemented."
        supportingTextItems={[
          "It shares the design and coding workload evenly between all team members.",
          "It allows us to create prototypes, and experiments and launch MVPs in less time. This makes sure elements like consistency and accessibility aren't ignored in the initial product to meet launch times.",
        ]}
      />
      <VisionCard
        headerImage={vision_front_card_header_text_3}
        altHeaderImage="Quality over quantity"
        subtext="Focus on the best solutions, quantity becomes a consolidation of Agility and Efficiency"
        innerCardText="Styles come and go. Good design is a language, not a style."
        name="Massimo Vignelli"
        company="Italian Designer"
        userImage={testimonial_3}
        heading="Quality"
        subHeading="A Design System provides a systematic approach to managing code quality and design decisions."
        supportingTextItems={[
          "Being in constant evolution through iterations means the quality of each component continues to improve over time, particularly in comparison to new components.",
          "The fact it is a modular, closed and versioned system reduces the risk of losses to both code and design.",
          "It's easily isolated to assess its quality and measure its external integration.",
        ]}
      />
    </div>
  </>
);

export default Vision;
