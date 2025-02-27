import { Databases} from "appwrite";
import client  from "./../../../../../lib/appwrite_client";
import { NextResponse } from "next/server";

const database = new Databases(client);

async function fetchBook(id: string){
    try {
        const book = await database.getDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string ,"book" ,
            id
        )
        return book
    } catch (error) {
        console.error('Error fetching the book' , error);
        throw new Error ("Failed to fetch book")
    }
}

async function DeleteBook (id : string){
    try {
        const response = await database.deleteDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string ,"book" ,
            id);
            return response
    } catch (error) {
        console.error('Error deketing the book' , error);
        throw new Error ("Failed to deleting the book")
    }
}

async function UpdateBook (id : string , data :{book : string , description: string}){
    try {
        const response = await database.updateDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string ,"book" ,
            id,
            data
        );
            return response
    } catch (error) {
        console.error('Error deketing the book' , error);
        throw new Error ("Failed to deleting the book")
    }
}

export async  function GET(
    req: Request,
    {params }:{params:{id: string}}
) {
    try {
        const id = params.id;
        const book = await fetchBook(id); 
        return NextResponse.json({book});
    }catch (error){
        return NextResponse.json({error: "Failed to fetch book"},
            {status:500}
        )
    }
}

export async  function DELETE(
    req: Request,
    {params }:{params:{id: string}}
) {
    try {
        const id = params.id;
        await DeleteBook(id); 
        return NextResponse.json({message:"Book deleted"});
    }catch (error){
        return NextResponse.json({error: "Failed to delete the book"},
            {status:500}
        )
    }
}

export async  function PUT(
    req: Request,
    {params }:{params:{id: string}}
) {
    try {
        const id = params.id;
        const book = await req.json();
        await UpdateBook(id , book);
        return NextResponse.json({message: 'book updated'});
    }catch (error){
        return NextResponse.json({error: "Failed to Update the book"},
            {status:500}
        )
    }
}