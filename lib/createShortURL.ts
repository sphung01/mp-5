"use server";
import getCollection, { URL_COLLECTION } from "@/db";

export default async function createShortURL(
    url: string,
    alias: string,
): Promise<string> {
    const p = {
        url: url,
        alias: alias,
    };

    const urlRes = await fetch(`${url}`);
    
    if(!urlRes.ok){
        throw new Error("Failed to fetch URL");
    } 

    const urlCollection = await getCollection(URL_COLLECTION);
    const res = await urlCollection.insertOne({...p});

    if(!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return alias;
}