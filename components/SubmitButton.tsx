import { Button } from "@mui/material";

export default function SubmitButton() {
    return(
        <Button 
            sx={{
                bgcolor: "black",
                color: "white",
                width: "150px",
                margin: "4px"
                }}>
            Shorten URL!
        </Button>
    );
}