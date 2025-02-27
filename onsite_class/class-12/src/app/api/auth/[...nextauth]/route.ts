// lib/auth.ts
export const handlers = {
    GET: async (req: Request) => {
      return new Response("GET request handled", { status: 200 });
    },
    POST: async (req: Request) => {
      return new Response("POST request handled", { status: 201 });
    },
  };
  