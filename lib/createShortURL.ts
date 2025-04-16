"use server";
import getCollection, { URL_COLLECTION } from "@/db";

export default async function createShortURL(
    url: string,
    alias: string,
): Promise<string | null> {
    const p = {
        url: url,
        alias: alias,
    };

    try {
        const urlRes = await fetch(`${url}`);
        if(!urlRes.ok) {
            return "URL ERROR";
        }
    } catch (error) {
        console.error(error);
        return "URL ERROR";
    }

    if(alias == ""){
        return "ERROR EMPTY"
    }

    const urlCollection = await getCollection(URL_COLLECTION);
    const data = await urlCollection.findOne({alias: p.alias});

    if(data?.alias == alias){
        return "ERROR";
    }

    const res = await urlCollection.insertOne({...p});

    if(!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return alias;
}