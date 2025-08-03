// components/property/PropertyDetail.tsx

import { PropertyProps } from "@/interfaces/index";
import { useState } from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("description");

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return <p className="text-gray-600 leading-relaxed">{property.description}</p>;
      case "amenities": // "What we offer"
        return (
          <ul className="grid grid-cols-2 gap-4">
            {property.category.map((amenity, index) => (
              <li key={index} className="text-gray-700">{amenity}</li>
            ))}
          </ul>
        );
      case "reviews":
        return <ReviewSection reviews={property.reviews} />;
      case "host":
        return (
           <div className="flex items-center space-x-4">
             <img src={property.host.avatar} alt={property.host.name} className="w-16 h-16 rounded-full"/>
             <div>
               <h4 className="text-xl font-semibold">{property.host.name}</h4>
               <p className="mt-1 text-gray-600">{property.host.about}</p>
             </div>
           </div>
        );
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-4 mt-2">
        <span className="flex items-center"><FaStar className="text-yellow-500 mr-1"/> {property.rating} stars</span>
        <span className="flex items-center"><FaMapMarkerAlt className="mr-1"/> {property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6 h-[450px]">
        <img src={property.image} alt={property.name} className="col-span-2 md:col-span-1 md:row-span-2 w-full h-full object-cover rounded-lg" />
        <img src={property.images[0]} alt="" className="w-full h-full object-cover rounded-lg" />
        <img src={property.images[1]} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* Main Content & Booking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
        <div className="lg:col-span-2">
          <div className="border-b">
            <nav className="flex space-x-6">
              <button onClick={() => setActiveTab('description')} className={`py-4 px-1 border-b-2 ${activeTab === 'description' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500'}`}>Description</button>
              <button onClick={() => setActiveTab('amenities')} className={`py-4 px-1 border-b-2 ${activeTab === 'amenities' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500'}`}>What we offer</button>
              <button onClick={() => setActiveTab('reviews')} className={`py-4 px-1 border-b-2 ${activeTab === 'reviews' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500'}`}>Reviews</button>
              <button onClick={() => setActiveTab('host')} className={`py-4 px-1 border-b-2 ${activeTab === 'host' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500'}`}>About Host</button>
            </nav>
          </div>
          <div className="mt-6">{renderTabContent()}</div>
        </div>
        
        <div className="lg:col-span-1">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;