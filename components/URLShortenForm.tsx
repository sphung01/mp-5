"use client"
import { Button } from "@mui/material";

export default function URLShortenForm() {
    return(
        <form>
            <div className="flex flex-col items-center justify-center bg-green-400 w-100 h-75 rounded-md">
                <input
                    className="text-black text-center text-lg rounded-md 
                    border-round border-groove border-4
                    bg-white w-75 h-10"
                    placeholder="Enter your URL here"
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
            </div>
        </form>
    );
}