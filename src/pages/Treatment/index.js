import React from "react";
import {
  TreatmentContainer,
  SectionWrap,
  SectionTitle,
  SectionTopLine,
} from "./treatmentElement";

import { treatments, details } from "./Data";

const Treatment = () => {
  console.log("--checking treatment---", treatments);
  return (
    <TreatmentContainer>
      <SectionWrap>
        <SectionTitle>Section under contruction.....</SectionTitle>
        <SectionTopLine>Coming back soon!</SectionTopLine>
      </SectionWrap>
    </TreatmentContainer>
    // <>
    //   <TreatmentContainer>
    //     {treatments.map((item) => {
    //       <TreatmentCard>{item.id}</TreatmentCard>;
    //     })}
    //   </TreatmentContainer>
    // </>
  );
};

export default Treatment;
