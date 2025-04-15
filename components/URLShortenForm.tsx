"use client"
import { Button } from "@mui/material";
import { useState } from "react";
import createShortURL from "@/lib/createShortURL";
import Link from "next/link";

export default function URLShortenForm() {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [result, setResult] = useState<Promise<string>>();

    const handleUrl = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(url);
        setResult(createShortURL(url, alias));
        //If the createShortURl passes, then we display the shorten url to user.
    }

    return(
        <>
            <form 
                className="flex flex-col items-center justify-center 
                    bg-green-600 w-200 h-100 rounded-md space-y-6 border-groove border-4"
                onSubmit={handleUrl}
                >
                <input
                    className="text-black text-center text-lg rounded-md 
                    border-round border-groove border-4
                    bg-white w-125 h-10"
                    value={url}
                    type="url"
                    placeholder="Enter URL here"
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <input
                    className="text-black text-center text-lg rounded-md 
                    border-round border-groove border-4
                    bg-white w-75 h-10"
                    value={alias}
                    type="text"
                    placeholder="Enter custom alias here "
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
            <Link href={`/url/${alias}`}>
                <p>{result}</p>
            </Link>
        </>
        
    );
}