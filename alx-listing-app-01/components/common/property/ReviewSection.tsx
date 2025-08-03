// components/property/ReviewSection.tsx

import { ReviewProps } from "@/interfaces/index";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"} />
      ))}
    </div>
  );
};

const ReviewSection: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  return (
    <div className="mt-8 space-y-6">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4">
          <div className="flex items-center mb-2">
            <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">{review.name}</p>
              <div className="flex items-center">
                <StarRating rating={review.rating} />
                <span className="ml-2 text-gray-600">{review.rating} stars</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;