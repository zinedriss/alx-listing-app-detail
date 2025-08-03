// components/property/PropertyDetail.tsx

import { PropertyProps } from "@/interfaces/index";
import { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaWifi, FaParking, FaSwimmingPool, FaUtensils, FaTv, FaWind } from "react-icons/fa";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const amenityIcons: { [key: string]: React.ReactElement } = {
  "WiFi": <FaWifi />,
  "Kitchen": <FaUtensils />,
  "Pool": <FaSwimmingPool />,
  "Free parking": <FaParking />,
  "Air conditioning": <FaWind />,
  "TV": <FaTv />,
};

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("description");

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return <p className="text-gray-600 leading-relaxed">{property.description}</p>;
      case "amenities":
        return (
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {property.category.map((amenity, index) => (
              <li key={index} className="flex items-center space-x-3 text-gray-700">
                <span className="text-green-500">{amenityIcons[amenity] || <FaStar />}</span>
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        );
      case "reviews":
        return <ReviewSection reviews={property.reviews} />;
      case "host":
        return (
           <div className="flex items-start space-x-4">
             <img src={property.host.avatar} alt={property.host.name} className="w-16 h-16 rounded-full object-cover"/>
             <div>
               <h4 className="text-xl font-semibold">{property.host.name}</h4>
               <p className="mt-2 text-gray-600">{property.host.about}</p>
             </div>
           </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{property.name}</h1>
        <div className="flex items-center space-x-4 mt-2 text-gray-600">
          <div className="flex items-center space-x-1">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold">{property.rating}</span>
            <span className="underline">({property.reviewsCount} reviews)</span>
          </div>
          <span>·</span>
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt />
            <span>{property.address.city}, {property.address.country}</span>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2 mt-6 h-[500px]">
        <img src={property.image} alt={property.name} className="w-full h-full object-cover rounded-l-lg md:row-span-2"/>
        {property.images.slice(0, 4).map((img, index) => (
          <img key={index} src={img} alt={`${property.name}-${index}`} className={`w-full h-full object-cover ${index === 1 ? 'rounded-tr-lg' : ''} ${index === 3 ? 'rounded-br-lg' : ''}`} />
        ))}
      </div>

      {/* Main Content & Booking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 mt-8">
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-6">
              <button onClick={() => setActiveTab('description')} className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'description' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Description</button>
              <button onClick={() => setActiveTab('amenities')} className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'amenities' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>What we offer</button>
              <button onClick={() => setActiveTab('reviews')} className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'reviews' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Reviews</button>
              <button onClick={() => setActiveTab('host')} className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'host' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>About Host</button>
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