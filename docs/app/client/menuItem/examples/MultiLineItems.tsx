"use client";

import { MenuItem } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const MultiLineItems = () => {
  return (
    <div className="w-94 bg-tertiary flex flex-col gap-space-12 rounded-16 p-space-24">
      <MenuItem isActive>
        <span className="bg-brand-subtle rounded-8 size-space-40 flex justify-center items-center">
          <OtherFrame className="text-heading-200 icon-brand" />
        </span>
        <MenuItem.MultiTitle
          title="Job Board"
          text={<span>find your dream design job</span>}
        />
      </MenuItem>
      <MenuItem>
        <span className="bg-brand-subtle rounded-8 size-space-40 flex justify-center items-center">
          <OtherFrame className="text-heading-200 icon-brand" />
        </span>
        <MenuItem.MultiTitle
          title="Freelance Projects"
          text={<span>An exclusive list for contract work</span>}
        />
      </MenuItem>
      <hr className="border-top border-primary" />
      <MenuItem>
        <span className="bg-discovery-subtle rounded-8 size-space-40 flex justify-center items-center">
          <OtherFrame className="text-heading-200 icon-discovery" />
        </span>
        <MenuItem.MultiTitle
          title="Want freelance design projects?"
          text={<span>Get new leads in your inbox every day</span>}
        />
      </MenuItem>
      <MenuItem>
        <span className="bg-negative-subtle rounded-8 size-space-40 flex justify-center items-center">
          <OtherFrame className="text-heading-200 text-negative" />
        </span>
        <MenuItem.MultiTitle
          title="Personalized your profile with video"
          text={<span>Introduce yourself to new clients with Pitch</span>}
        />
      </MenuItem>
    </div>
  );
};

export default MultiLineItems;
