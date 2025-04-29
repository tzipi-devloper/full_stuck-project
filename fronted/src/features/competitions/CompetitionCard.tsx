import { useState } from "react";
import { CompetitionItem } from "./competitionsTypes";
import { Rating } from "@mui/material";

interface Props {
  competitionItem: CompetitionItem;
}

const CompetitionCard = ({ competitionItem }: Props) => {
  const [value, setValue] = useState<number | null>(null);

  const handleRatingChange = (newValue: number | null) => {
    setValue(newValue);
    // TODO: Add API call to save rating
  };

  return (
    <div style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
      <h3>{competitionItem.name}</h3>
      <p>Category: {competitionItem.category}</p>
      <p>Score: {competitionItem.score}</p>
      {competitionItem.file.endsWith(".jpg") || competitionItem.file.endsWith(".png") ? (
        <img src={competitionItem.file} alt={competitionItem.name} width={150} />
      ) : (
        <a href={competitionItem.file} target="_blank" rel="noopener noreferrer">
          View File
        </a>
      )}
      <Rating
        name={`user-rating-${competitionItem._id}`}
        value={value}
        onChange={(_, newValue) => handleRatingChange(newValue)}
      />
    </div>
  );
};

export default CompetitionCard;