"use client"
import { Button } from "@mui/material";
import { useState } from "react";
import createShortURL from "@/lib/createShortURL";
import Link from "next/link";

export default function URLShortenForm() {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [currentAlias, setCurrentAlias] = useState("");
    const [message, setMessage] = useState("Please enter URL.");
    const [validation, setValidation] = useState(false);

    const handleUrl = async (event: React.FormEvent) => {
        event.preventDefault();
        const result = await createShortURL(url, alias);
        if(result == "URL ERROR") {
            setValidation(false);
            setMessage("ERROR: URL is invalid OR The URL is not accessible. Please try again.");
        } 
        else if(result == "ERROR EMPTY") {
            setValidation(false);
            setMessage(`ERROR: The alias input is empty! Please enter custom alias.`);
        }
        else if(result == "ERROR") {
            setValidation(false);
            setMessage(`ERROR: The alias name "${alias}" already exists.`);
        }
        else {
            setValidation(true);
            setCurrentAlias(alias);
            setMessage("URL shortened successfully! You can click or copy link below!");
        }
    }

    const copyButton = () => {
        navigator.clipboard.writeText(`https://mp-5-olive.vercel.app/url/${currentAlias}`);
    }

    return(
        <>
            <form 
                className="flex flex-col items-center justify-center 
                    bg-green-500 w-200 h-100 rounded-md space-y-2 border-groove border-4"
                onSubmit={handleUrl}
            >
                <p className="font-bold">URL</p>
                <input
                    className="text-black text-center text-lg rounded-md 
                    border-round border-groove border-4
                    bg-white w-125 h-10"
                    value={url}
                    type="text"
                    placeholder="https://example.com/url/"
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <p className="font-bold">Custom Alias</p>
                <input
                    className="text-black text-center text-lg rounded-md 
                    border-round border-groove border-4
                    bg-white w-75 h-10"
                    value={alias}
                    type="text"
                    placeholder="your-custom-alias"
                    onChange={(e) => setAlias(e.target.value)}
                    required
                />
                <Button 
                    type="submit"
                    sx={{
                        bgcolor: "black",
                        color: "white",
                        width: "150px",
                        margin: "4px"
                        }}>
                    Shorten URL!
                </Button>
            </form>
            {
                validation ? 
                <div className="flex flex-col items-center justify-center 
                    bg-white w-200 h-25 rounded-md space-y-6 border-groove border-4">
                    <p className="text-green-500 font-bold">{message}</p>
                    <div className="flex flex-row justify-between items-center space-x-50">
                        <Link href={`/url/${currentAlias}`} 
                              className="text-xl hover:underline"
                        >
                            https://mp-5-olive.vercel.app/url/{currentAlias}
                        </Link>
                        <Button 
                            type="submit"
                            sx={{
                                bgcolor: "black",
                                color: "white",
                                width: "30px",
                                margin: "4px"
                            }}
                            onClick={copyButton}>
                            COPY!
                        </Button>
                    </div>
                </div> :
                <div className="flex flex-col items-center justify-center 
                    bg-white w-200 h-25 rounded-md space-y-6 border-groove border-4">
                    <p className="text-red-500 font-bold">{message}</p>
                    <div className="flex flex-row justify-between items-center space-x-50">
                        <Link href={`/url/${currentAlias}`} 
                              className="text-xl hover:underline"
                        >
                            https://mp-5-olive.vercel.app/url/{currentAlias}
                        </Link>
                        <Button 
                            type="submit"
                            sx={{
                                bgcolor: "black",
                                color: "white",
                                width: "30px",
                                margin: "4px"
                            }}
                            onClick={copyButton}>
                            COPY!
                        </Button>
                    </div>
                </div>
            }
        </>
    );
}