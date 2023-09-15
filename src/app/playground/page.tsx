'use client';

import { Card } from '@/components/Common/Card';
import { CardHeading } from '@/components/Common/CardHeading';
import * as Accordion from '@radix-ui/react-accordion';

export default function Playground() {
  return (
    <Card>
      <CardHeading text={'Accordion'} />
      <Accordion.Root type="multiple" className="mt-24">
        <Accordion.Item value="1" className="rounded-8 overflow-hidden">
          <Accordion.Header className="bg-gray-100">
            <Accordion.Trigger className="w-100p p-24 text-left">
              <p>Accordion.Item / value:1 / Accordion.Trigger</p>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
            <div className="bg-gray-200 p-24">
              <p>Accordion.Item / value:1 / Accordion.Content</p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Card>
  );
}
