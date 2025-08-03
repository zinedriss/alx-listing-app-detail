// components/property/ReviewSection.tsx

import { ReviewProps } from "@/interfaces/index";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"} />
    );
  }
  return <div className="flex items-center">{stars}</div>;
};

const ReviewSection: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p className="text-gray-500">No reviews yet.</p>;
  }

  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <div key={index} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-gray-800">{review.name}</h4>
              <StarRating rating={review.rating} />
            </div>
            <p className="mt-2 text-gray-600">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;