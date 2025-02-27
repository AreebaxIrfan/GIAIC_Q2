import { Databases, ID, Query } from "appwrite";
import client  from "./../../../../lib/appwrite_client";
import { NextResponse } from "next/server";

const database = new Databases(client);

async function createBook(data : {book:string, description:string}){
    try {
        const response = await database.createDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string ,"book" ,ID.unique(),data);

        return response;
    } catch (error) {
        console.error("Error creating book" , error)
        throw new Error('Failed to create you book')
    }
}

async function fetchBook(){
    try {
        const response = await database.listDocuments(process.env.Next_PUBLIC_APPWRITE_DATABASE_ID as string ,"book" ,
        [Query.orderDesc("$createdAt")]
    );

        return response.documents;
    } catch (error) {
        console.error("Error fetching book" , error)
        throw new Error('Failed to fetch you book')
    }
}

export async function POST(req: Request) {
 
    try {
        const {book , description} = await req.json();
        const data = {book , description};
        await createBook(data)

        return NextResponse.json ({message: 'Book Created'})
    } catch (error) {
      return NextResponse.json(
        {
            error: "Failed to create book"
        },
        {
            status: 500
        }
      )
    }
}

export async function GET (){
    try{
        const books = await fetchBook();
        return NextResponse.json(books);
    }catch(error){
        return NextResponse.json({error: "Failed to fetch "},
            {status : 500}
        )
    }
}