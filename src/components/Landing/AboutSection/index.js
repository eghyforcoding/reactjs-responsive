import React from "react";
import { AboutContainer, AboutTitle, AboutLine } from "./AboutElement";

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Us</AboutTitle>
      <AboutLine>
        In Traditional Chinese Medicine, it’s believed that good health is
        maintained by the dynamic balance between Yin and Yang, Qi and Xue
        (blood), Zang and Fu (internal organs and viscera), the fundamental
        aspects of its own theory. TCM treats man as a whole person, emphasizing
        on the integrity of the human body physically and mentally , and the
        relationship between our inner body and outer environment, in which so
        called tianrenheyi 天人合一 (Harmony between human and nature) or
        tianrenxiangying 天人相应 (Correspondence between human and nature).
      </AboutLine>
      <AboutLine>
        Traditional Chinese Medicine has been practised for more than five
        thousand years, forming well-defined methodologies to preserve health
        and to diagnose, treat, and prevent illness, but its principles and
        paradigms are vastly different from those commonly followed in the West,
        and yet often underestimated as part of health care.
      </AboutLine>
      <AboutLine>
        In <b>Holistic Balance Traditional Chinese Medicine</b>, we are
        concerned to provide a holistic care of your body, mind and spirit,
        treating the symptoms of illness as well as looking for the underlying
        causes of the illness. We believe that dynamic balance of the three
        aspects achieving body healing, rather than simply treating a disease.
      </AboutLine>
    </AboutContainer>
  );
};

export default AboutSection;
