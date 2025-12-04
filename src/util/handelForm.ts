
import type { RefObject } from "react";

type TitleRef = RefObject<HTMLInputElement>
type TextareaRef = RefObject<HTMLTextAreaElement>


export function handelForm(titleRef: TitleRef, textareaRef: TextareaRef) {
    console.log(titleRef, textareaRef);

}