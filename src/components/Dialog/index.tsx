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
                <RadixDialog.Overlay className="fixed inset-0 bg-black/60 bg-blur backdrop-blur-sm" />

                <RadixDialog.Content
                    aria-describedby={undefined}
                    className="
                        fixed inset-0
                        w-screen h-screen
                        bg-gradient-to-br from-slate-800 to-slate-900
                        p-4
                        overflow-auto
                        shadow-none
                        rounded-none
                        border-none

                        sm:left-1/2 sm:top-1/2
                        sm:w-[90vw] sm:max-w-md sm:h-fit sm:max-h-[90vh]
                        sm:-translate-x-1/2 sm:-translate-y-1/2
                        sm:p-6
                        sm:rounded-2xl
                        sm:shadow-2xl
                        sm:border sm:border-gray-700

                        outline-none
                    "
                >
                    <RadixDialog.Title className="text-2xl font-semibold mb-4 text-white capitalize">
                        {muscleZone} {data ? `- ${data.equipment}` : ""}
                    </RadixDialog.Title>

                    {isLoading && (
                        <div className="flex justify-center items-center h-32">
                            <Loader className="animate-spin w-10 h-10 text-lime-400" />
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
                                className="w-full rounded-lg"
                            />
                            <p className="text-gray-400">{data.instructions}</p>
                        </div>
                    )}

                    <div className="mt-6 flex justify-end">
                        <RadixDialog.Close asChild>
                            <button className="px-4 py-2 bg-forestGreen hover:bg-lime-700 text-white font-medium rounded-lg transition-colors">
                                Close
                            </button>
                        </RadixDialog.Close>
                    </div>

                    <RadixDialog.Close asChild>
                        <button
                            className="
                                absolute right-3 top-3
                                inline-flex items-center justify-center
                                w-8 h-8 rounded-full
                                hover:bg-gray-700 transition-colors
                                focus:outline-none
                            "
                            aria-label="Close"
                        >
                            <X className="text-gray-400" />
                        </button>
                    </RadixDialog.Close>
                </RadixDialog.Content>
            </RadixDialog.Portal>
        </RadixDialog.Root>
    );
};

export default Dialog;
