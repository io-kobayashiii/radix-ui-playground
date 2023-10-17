'use client';

import { Card } from '@/components/Common/Card';
import { CardHeading } from '@/components/Common/CardHeading';
import * as Accordion from '@radix-ui/react-accordion';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import * as Dialog from '@radix-ui/react-dialog';
import * as Toast from '@radix-ui/react-toast';
import { useState } from 'react';

export default function Playground() {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  return (
    <>
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
      <Card className="mt-24">
        <CardHeading text={'Alert Dialog'} />
        <AlertDialog.Root
          open={isAlertDialogOpen}
          onOpenChange={setIsAlertDialogOpen}
        >
          <AlertDialog.Trigger className="mt-24 rounded-8 px-36 py-16 flex justify-center items-center bg-orange-400 text-white">
            AlertDialog.Trigger
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Overlay className="bg-black bg-opacity-30 fixed inset-0 data-[state=open]:animate-show-overlay data-[state=closed]:animate-hide-overlay" />
            <AlertDialog.Content className="w-600 bg-white rounded-12 fixed top-50p left-50p translate-x-minus-50p translate-y-minus-50p data-[state=open]:animate-show-content data-[state=closed]:animate-hide-content">
              <AlertDialog.Title className="p-24">
                AlertDialog.Title
              </AlertDialog.Title>
              <AlertDialog.Description className="p-24">
                AlertDialog.Description
              </AlertDialog.Description>
              <div className="p-24 flex gap-[24px]">
                <AlertDialog.Cancel className="bg-gray-200 text-gray-600 p-16 rounded-8 grow">
                  AlertDialog.Cancel
                </AlertDialog.Cancel>
                <AlertDialog.Action className="bg-orange-400 text-white p-16 rounded-8 grow">
                  AlertDialog.Action
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </Card>
      <Card className="mt-24">
        <CardHeading text={'Dialog'} />
        <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Dialog.Trigger className="mt-24 rounded-8 px-36 py-16 flex justify-center items-center bg-orange-400 text-white">
            Dialog.Trigger
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black bg-opacity-30 fixed inset-0 data-[state=open]:animate-show-overlay data-[state=closed]:animate-hide-overlay" />
            <Dialog.Content className="w-600 bg-white rounded-12 fixed top-50p left-50p translate-x-minus-50p translate-y-minus-50p data-[state=open]:animate-show-content data-[state=closed]:animate-hide-content">
              <Dialog.Title className="p-24">Dialog.Title</Dialog.Title>
              <Dialog.Description className="p-24">
                Dialog.Description
              </Dialog.Description>
              <div className="p-24 flex">
                <Dialog.Close className="bg-gray-200 text-gray-600 p-16 rounded-8 grow">
                  Dialog.Close
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Card>
      <Card className="mt-24">
        <CardHeading text={'Toast'} />
        <Toast.Provider duration={3000}>
          <button
            className="mt-24 rounded-8 px-36 py-16 flex justify-center items-center bg-orange-400 text-white"
            onClick={() => setIsToastOpen(true)}
          >
            BUTTON
          </button>
          <Toast.Root
            open={isToastOpen}
            onOpenChange={setIsToastOpen}
            className="shadow-md bg-white rounded-8 p-24 data-[state=open]:animate-slide-toast-in data-[state=closed]:animate-slide-toast-out"
          >
            <Toast.Title>Toast.Title</Toast.Title>
            <Toast.Description className="mt-24">
              Toast.Description
            </Toast.Description>
            <div className="mt-24 flex gap-[24px]">
              <Toast.Close className="bg-gray-200 text-gray-600 p-16 rounded-8 grow">
                Toast.Close
              </Toast.Close>
              <Toast.Action
                altText="alt-text"
                className="bg-orange-400 text-white p-16 rounded-8 grow"
              >
                Toast.Action
              </Toast.Action>
            </div>
          </Toast.Root>
          <Toast.Viewport className="fixed right-24 bottom-24" />
        </Toast.Provider>
      </Card>
    </>
  );
}
