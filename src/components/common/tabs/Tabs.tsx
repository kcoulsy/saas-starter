import * as RdxTabs from '@radix-ui/react-tabs';
import React from 'react';

export interface TabsProps {
  defaultIndex: number;
  ariaLabel: string;
  data: {
    value: string;
    label: string;
    content: React.ReactNode;
  }[];
}

const Tabs = ({ defaultIndex, data, ariaLabel }: TabsProps) => {
  return (
    <RdxTabs.Root className="m-4 bg-white" defaultValue={data[defaultIndex]?.value}>
      <RdxTabs.List className="" aria-label={ariaLabel}>
        {data.map(({ value, label }) => (
          <RdxTabs.Trigger
            key={value}
            data-test="123"
            className="inline-block p-4 border-b-2 border-blue-400 font-medium data-[state=inactive]:border-transparent data-[test=123]:bg-red-200 rounded-t-lg hover:text-gray-600"
            value={value}
          >
            {label}
          </RdxTabs.Trigger>
        ))}
      </RdxTabs.List>
      {data.map(({ value, content }) => (
        <RdxTabs.Content key={value} className="p-4" value={value}>
          {content}
        </RdxTabs.Content>
      ))}
    </RdxTabs.Root>
  );
};

export default Tabs;
