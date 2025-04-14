"use client"
import SubmitButton from "./SubmitButton";
import InputBox from "./InputBox";

export default function URLShortenForm() {
    return(
        <form>
            <div className="flex flex-col items-center justify-center bg-green-400 w-100 h-75 rounded-md">
                <InputBox />
                <SubmitButton />
            </div>
        </form>
    );
}