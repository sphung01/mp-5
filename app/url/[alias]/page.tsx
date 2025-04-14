import { redirect } from "next/navigation";
import getCollection, { URL_COLLECTION } from "@/db";

export default async function URLPage({
    params,
}: {
    params: Promise<{ alias: string }>;
}) {
    const { alias } = await params;
   
    const urlCollection = await getCollection(URL_COLLECTION);
    const data = await urlCollection.findOne({alias: alias});

    console.log(data);
    if (data === null) {
        return redirect("/");
    }

    return redirect(data.url);
}