"use client"
import { Button } from "@mui/material";
import { useState } from "react";
import createShortURL from "@/lib/createShortURL";

export default function URLShortenForm() {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");

    const handleUrl = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(url);
        createShortURL(url, alias);
    }

    return(
        <form 
            className="flex flex-col items-center justify-center 
                bg-green-400 w-100 h-75 rounded-md"
            onSubmit={handleUrl}
            >
            <input
                className="text-black text-center text-lg rounded-md 
                border-round border-groove border-4
                bg-white w-75 h-10"
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
    );
}