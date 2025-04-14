"use server";
import getCollection, { URL_COLLECTION } from "@/db";
import { URLProps } from "@/types";

export default async function createShortURL(
    url: string,
    alias: string,
): Promise<string> {
    const p = {
        url: url,
        alias: alias,
    };

    const urlRes = fetch(`${url}`);
    
    if(!urlRes){
        throw new Error("Failed to fetch the URL");
    }

    const urlCollection = await getCollection(URL_COLLECTION);
    const res = await urlCollection.insertOne({...p});

    if(!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return alias;
}