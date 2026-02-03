// "use client";

// import { useEffect, useState, Suspense } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { MessageSquare, MapPin, Hospital } from "lucide-react";
// import {
//   getPincodeCoordinates,
//   getHospitalsNearby,
//   formatHospitalData,
// } from "@/lib/openstreetmap";
// import { toast } from "@/components/ui/use-toast";

// interface Hospital {
//   id: string;
//   name: string;
//   distance: number;
//   address: string;
//   coordinates: {
//     lat: number;
//     lon: number;
//   };
// }

// function HospitalSkeleton() {
//   return (
//     <div className="group p-6 rounded-xl border bg-card animate-pulse">
//       <div className="flex items-start justify-between">
//         <div className="flex-1">
//           <div className="h-7 bg-muted-foreground/20 rounded w-48 mb-3" />
//           <div className="flex items-center gap-2 mb-4">
//             <div className="w-4 h-4 rounded-full bg-muted-foreground/20" />
//             <div className="h-4 bg-muted-foreground/20 rounded w-64" />
//           </div>
//           <div className="h-4 bg-muted-foreground/20 rounded w-24" />
//         </div>
//         <div className="w-32 h-9 bg-muted-foreground/20 rounded" />
//       </div>
//     </div>
//   );
// }

// export default function HospitalsContent() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [hospitals, setHospitals] = useState<Hospital[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [inputPincode, setInputPincode] = useState(""); // State for the search box

//   // Get pincode from URL
//   const pincode = searchParams.get("pincode");

//   useEffect(() => {
//     // If no pincode in URL, do nothing (don't fetch, don't redirect)
//     if (!pincode) return;

//     setLoading(true);

//     const fetchHospitals = async () => {
//       try {
//         const coordinates = await getPincodeCoordinates(pincode);
//         if (!coordinates) {
//           toast({
//             title: "Error",
//             description: "Could not find coordinates",
//             variant: "destructive",
//           });
//           setLoading(false);
//           return;
//         }

//         const nearbyHospitals = await getHospitalsNearby(coordinates);
//         const formattedHospitals = nearbyHospitals.map((hospital) =>
//           formatHospitalData(hospital, coordinates.lat, coordinates.lon)
//         );
//         setHospitals(formattedHospitals);
//       } catch (error) {
//         console.error("Error fetching hospitals:", error);
//         toast({
//           title: "Error",
//           description: "Failed to fetch hospitals.",
//           variant: "destructive",
//         });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHospitals();
//   }, [pincode]); // Only re-run if pincode changes

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (inputPincode.length === 6) {
//       // This adds ?pincode=XXXXXX to the URL, triggering the useEffect above
//       router.push(`/hospitals?pincode=${inputPincode}`);
//     } else {
//       toast({
//         title: "Invalid Pincode",
//         description: "Please enter a valid 6-digit pincode",
//         variant: "destructive",
//       });
//     }
//   };

//   const handleChatClick = (hospitalId: string) => {
//     router.push(`/auth?hospital=${hospitalId}`);
//   };

//   // 1. If NO pincode is in the URL, show the Search Box
//   if (!pincode) {
//     return (
//       <div className="flex flex-col  items-center justify-center space-y-6 p-10 border rounded-xl mt-10 bg-card shadow-sm">
//         <div className="text-center space-y-2">
//           <h2 className="text-2xl font-semibold">Where are you?</h2>
//           <p className="text-muted-foreground">Enter your pincode to find nearby help.</p>
//         </div>
        
//         <form onSubmit={handleSearch} className="flex w-full max-w-sm items-center space-x-2">
//           <input
//             type="text"
//             placeholder="Ex: 110001"
//             className="flex h-full w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//             value={inputPincode}
//             onChange={(e) => setInputPincode(e.target.value)}
//             maxLength={6}
//           />
//           <Button type="submit">Search</Button>
//         </form>
//       </div>
//     );
//   }

//   // 2. If Loading
//   if (loading) {
//     return (
//       <div className="space-y-4">
//         <HospitalSkeleton />
//         <HospitalSkeleton />
//         <HospitalSkeleton />
//       </div>
//     );
//   }

//   // 3. If Results Found
//   return (
//     <div className="space-y-4 md:p-0 p-4">
//       {hospitals.length === 0 ? (
//         <div className="text-center p-10 text-muted-foreground">No hospitals found nearby.</div>
//       ) : (
//         hospitals.map((hospital) => (
//           <div
//             key={hospital.id}
//             className="group p-6 rounded-xl border bg-card hover:shadow-md transition-shadow"
//           >
//             <div className="flex items-start justify-between">
//               <div className="flex-1">
//                 <h3 className="text-lg font-semibold mb-2">{hospital.name}</h3>
//                 <div className="flex items-center gap-2 text-muted-foreground mb-4">
//                   <MapPin className="h-4 w-4" />
//                   <span>{hospital.address}</span>
//                 </div>
//                 <a
//                   href={`https://www.google.com/maps?q=${hospital.coordinates.lat},${hospital.coordinates.lon}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm text-primary hover:underline"
//                 >
//                   View on map
//                 </a>
//               </div>
//               <Button
//                 variant="secondary"
//                 className="gap-2"
//                 onClick={() => handleChatClick(hospital.id)}
//               >
//                 <MessageSquare className="h-4 w-4" />
//                 Chat
//               </Button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  MapPin, 
  Hospital, 
  Search, 
  Navigation,
  AlertCircle 
} from "lucide-react";
import {
  getPincodeCoordinates,
  getHospitalsNearby,
  formatHospitalData,
} from "@/lib/openstreetmap";
import { toast } from "@/components/ui/use-toast";

interface HospitalData {
  id: string;
  name: string;
  distance: number;
  address: string;
  coordinates: {
    lat: number;
    lon: number;
  };
}

function HospitalSkeleton() {
  return (
    <div className="p-6 rounded-xl border bg-white shadow-sm animate-pulse">
      <div className="flex justify-between items-start">
        <div className="space-y-3 flex-1">
          <div className="h-6 bg-slate-200 rounded w-3/4" />
          <div className="h-4 bg-slate-100 rounded w-1/2" />
          <div className="h-4 bg-slate-100 rounded w-1/3" />
        </div>
        <div className="h-10 w-24 bg-slate-200 rounded" />
      </div>
    </div>
  );
}

export default function HospitalsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [hospitals, setHospitals] = useState<HospitalData[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputPincode, setInputPincode] = useState("");

  const pincode = searchParams.get("pincode");

  useEffect(() => {
    if (!pincode) return;

    setLoading(true);

    const fetchHospitals = async () => {
      try {
        const coordinates = await getPincodeCoordinates(pincode);
        if (!coordinates) {
          toast({
            title: "Location Not Found",
            description: "Could not find coordinates for this pincode.",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }

        const nearbyHospitals = await getHospitalsNearby(coordinates);
        const formattedHospitals = nearbyHospitals.map((hospital) =>
          formatHospitalData(hospital, coordinates.lat, coordinates.lon)
        );
        
        // Sort by distance
        formattedHospitals.sort((a, b) => a.distance - b.distance);
        
        setHospitals(formattedHospitals);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
        toast({
          title: "Connection Error",
          description: "Failed to fetch hospitals. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, [pincode]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPincode.length === 6 && /^\d+$/.test(inputPincode)) {
      router.push(`/hospitals?pincode=${inputPincode}`);
    } else {
      toast({
        title: "Invalid Pincode",
        description: "Please enter a valid 6-digit Indian pincode",
        variant: "destructive",
      });
    }
  };

  const handleChatClick = (hospitalId: string) => {
  
  router.push(`/chat?id=${hospitalId}`); 
};

  // --- STATE 1: SEARCH VIEW (Hero Section) ---
  if (!pincode) {
    return (
      // Added pt-24 to fix navbar overlap
      <div className="min-h-[80vh] flex flex-col items-center justify-center pt-24 px-4 bg-slate-50/50">
        <div className="w-full max-w-lg space-y-8 text-center">
          <div className="mx-auto w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center shadow-inner">
            <MapPin className="w-10 h-10 text-rose-600 animate-bounce" />
          </div>
          
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Find Nearby Hospitals
            </h1>
            <p className="text-slate-500 text-lg">
              Enter your pincode to instantly connect with medical facilities near you.
            </p>
          </div>

          <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-100">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter 6-digit Pincode (e.g. 110001)"
                  className="w-full pl-10 pr-4 py-4 rounded-xl text-lg outline-none placeholder:text-slate-300"
                  value={inputPincode}
                  onChange={(e) => setInputPincode(e.target.value)}
                  maxLength={6}
                />
              </div>
              <Button size="lg" type="submit" className="h-11 px-8 cursor-pointer rounded-xl bg-rose-600 hover:bg-rose-700 text-lg">
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // --- STATE 2: LOADING ---
  if (loading) {
    return (
      <div className="container max-w-5xl mx-auto pt-28 px-4 space-y-6">
        <div className="h-8 bg-slate-200 rounded w-64 animate-pulse mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HospitalSkeleton />
          <HospitalSkeleton />
          <HospitalSkeleton />
          <HospitalSkeleton />
        </div>
      </div>
    );
  }

  // --- STATE 3: RESULTS LIST ---
  return (
    <div className="min-h-screen bg-slate-50/50 pt-24 pb-12">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Hospital className="w-8 h-8 text-rose-600" />
              Results for {pincode}
            </h2>
            <p className="text-slate-500 mt-1">
              Found {hospitals.length} medical facilities nearby
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => router.push('/hospitals')}
            className="text-slate-600"
          >
            Change Location
          </Button>
        </div>

        {hospitals.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed">
            <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900">No hospitals found</h3>
            <p className="text-slate-500">Try increasing your search radius or checking the pincode.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-rose-100 transition-all duration-300 flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-700 mb-2">
                      {hospital.distance} km away
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                      {hospital.name}
                    </h3>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-rose-50 transition-colors">
                    <Hospital className="w-6 h-6 text-slate-400 group-hover:text-rose-500" />
                  </div>
                </div>

                <div className="flex-1 space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-sm leading-snug">
                      {hospital.address !== "Address not available" 
                        ? hospital.address 
                        : "Detailed address not available on map"}
                    </span>
                  </div>
                  
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${hospital.coordinates.lat},${hospital.coordinates.lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium"
                  >
                    <Navigation className="w-4 h-4" />
                    Navigate via Google Maps
                  </a>
                </div>

                <Button
                
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20 gap-2 h-11 rounded-xl"
                  onClick={() => handleChatClick(hospital.id)}
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat with Hospital
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}