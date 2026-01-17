"use client";

import type { DateInputProps as AriaDateInputProps } from "react-aria-components";
import { DateInput as AriaDateInput, DateSegment as AriaDateSegment } from "react-aria-components";
import { cx } from "@/utils/cx";

interface DateInputProps extends Omit<AriaDateInputProps, "children"> {}

export const DateInput = (props: DateInputProps) => {
    return (
        <AriaDateInput
            {...props}
            className={cx(
                "flex rounded-lg bg-white px-2.5 py-2 text-md shadow-xs ring-1 ring-gray-200 ring-inset focus-within:ring-2 focus-within:ring-amber-500",
                typeof props.className === "string" && props.className,
            )}
        >
            {(segment) => (
                <AriaDateSegment
                    segment={segment}
                    className={cx(
                        "rounded px-0.5 text-gray-900 tabular-nums caret-transparent focus:bg-amber-500 focus:font-medium focus:text-white focus:outline-hidden",
                        // The placeholder segment.
                        segment.isPlaceholder && "text-gray-400 uppercase",
                        // The separator "/" segment.
                        segment.type === "literal" && "text-gray-400",
                    )}
                />
            )}
        </AriaDateInput>
    );
};
