import { auth } from "@/auth";
import React from "react";
import Heading from "../components/Heading";
import AuthTest from "./AuthTest";

export default async function Session() {
  const session = await auth();

  return (
    <div>
        <Heading title='Session dashboard' subtitle={""} />
        
        <div className="bg-blue-200 border-2 border-blue-500">
            <h3 className="text-lg">Session data</h3>
            <pre className="whitespace-pre-wrap break-words p-2 bg-gray-100 rounded max-w-full" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
              {JSON.stringify(session, null, 2)}
            </pre>
        </div>
        <div className="mt-4">
          <AuthTest />
        </div>
    </div>
  )
}
