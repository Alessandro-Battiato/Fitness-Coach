"use client";

import * as RadixDialog from "@radix-ui/react-dialog";
import { Loader, X } from "lucide-react";
import { useExercise } from "../../hooks/useExercise";
import { DialogProps } from "./types";
import { useEffect, useState } from "react";

const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, muscleZone }) => {
    const [randomId, setRandomId] = useState(0);

    useEffect(() => {
        if (open) {
            setRandomId(Date.now());
        }
    }, [open]);

    const { data, isLoading, error } = useExercise(muscleZone, randomId, open);

    return (
        <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
            <RadixDialog.Portal>
                <RadixDialog.Overlay className="fixed inset-0 bg-black/60" />
                <RadixDialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-md max-h-[85vh] -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg overflow-auto shadow-lg outline-none">
                    <RadixDialog.Title className="text-xl font-medium mb-2 capitalize">
                        {muscleZone} {data ? `- ${data.equipment}` : ""}
                    </RadixDialog.Title>

                    {isLoading && (
                        <div className="flex justify-center items-center h-32">
                            <Loader className="animate-spin w-10 h-10 text-forestGreen" />
                        </div>
                    )}

                    {error && (
                        <p className="text-red-500 text-sm mb-4">
                            Something went wrong...
                        </p>
                    )}

                    {data && (
                        <div className="space-y-4">
                            <img
                                src={data.gifUrl}
                                alt={`${muscleZone} exercise`}
                                className="w-full rounded"
                            />
                            <p className="text-gray-700">{data.instructions}</p>
                        </div>
                    )}

                    <div className="mt-6 flex justify-end">
                        <RadixDialog.Close asChild>
                            <button className="px-4 py-2 bg-forestGreen text-white rounded">
                                Close
                            </button>
                        </RadixDialog.Close>
                    </div>

                    <RadixDialog.Close asChild>
                        <button
                            className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full hover:bg-gray-200 focus:outline-none"
                            aria-label="Close"
                        >
                            <X />
                        </button>
                    </RadixDialog.Close>
                </RadixDialog.Content>
            </RadixDialog.Portal>
        </RadixDialog.Root>
    );
};

export default Dialog;
