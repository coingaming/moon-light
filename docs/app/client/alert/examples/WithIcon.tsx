"use client";

import { Alert } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const WithIcon = () => (
  <>
    <Alert>
      <Alert.Message>
        <OtherFrame className="text-heading-200" />
        Alert with icon
      </Alert.Message>
    </Alert>
    <Alert>
      <Alert.Title>
        <OtherFrame className="text-heading-200" />
        Alert with title and icon
      </Alert.Title>
      <Alert.Message>Alert message</Alert.Message>
    </Alert>
  </>
);

export default WithIcon;
