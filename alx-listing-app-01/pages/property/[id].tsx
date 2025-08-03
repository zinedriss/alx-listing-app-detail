// pages/property/[id].tsx

import PropertyDetail from "@/components/property/PropertyDetail";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import Head from "next/head";

export default function PropertyPage() {
  const router = useRouter();
  // The router query might not be available on initial render, so we check for it.
  const { id } = router.query;

  // Find the property based on the 'id' from the URL.
  // In a real app, this would be an API call: e.g., useSWR('/api/properties/' + id)
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);

  // Show a loading state while the router is warming up
  if (router.isFallback || !id) {
    return <p>Loading...</p>;
  }

  // If no property is found for the given id
  if (!property) {
    return <p className="text-center text-xl mt-10">Property not found</p>;
  }

  return (
    <>
      <Head>
        <title>{property.name} - Listing App</title>
        <meta name="description" content={property.description} />
      </Head>
      <main className="bg-gray-50 min-h-screen">
        <PropertyDetail property={property} />
      </main>
    </>
  );
}