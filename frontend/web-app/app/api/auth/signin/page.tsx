import EmptyFilter from "@/app/components/EmptyFilter";

export default async function SignIn({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const resolvedParams = await searchParams;
  
  return (
    <EmptyFilter 
        title="You need to be logged in to do that"
        subtitle="Please click below to login"
        showLogin
        callbackUrl={resolvedParams.callbackUrl || ''}
    />
  );
}
