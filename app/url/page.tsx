export default function ErrorPage() {
    return(
        <main className="flex flex-col items-center text-center space-y-6 bg-green-100 min-h-screen">
            <p className="font-bold text-4xl">
                You probably clicked on the link that leads you to no where. 
                Please click on the title, top left, to return to the original page.
                And this time, be sure to enter your valid URL.
            </p>
        </main>
    )
}