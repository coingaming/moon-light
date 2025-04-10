"use client";

import { Alert } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const Customization = () => (
  <>
    <Alert>
      <Alert.Message>
        <OtherFrame className="text-heading-200 text-positive" />
        Generic style with colored icon
      </Alert.Message>
      <Alert.Close />
    </Alert>
    <Alert className="bg-transparent outline outline-1 outline-offset-[-1px] outline-positive">
      <Alert.Message className="text-positive">
        <OtherFrame className="text-heading-200" />
        Outline style
      </Alert.Message>
      <Alert.Close />
    </Alert>
    <Alert className="bg-brand-subtle">
      <Alert.Message>
        <OtherFrame className="text-heading-200" />
        Colorful style
      </Alert.Message>
      <Alert.Close />
    </Alert>
  </>
);

export default Customization;
