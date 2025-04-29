import { useSelector } from "react-redux";
import { selectCurrentCompetition } from "../competitions/competitionsSlice";
import { useGetCompetitionByCategoryQuery } from "./competitionsAPI";
import CompetitionCard from "./CompetitionCard";
import { CompetitionItem } from "./competitionsTypes";

const CompetitionList = () => {
  const selectedCategory = useSelector(selectCurrentCompetition);
  if (!selectedCategory) {
    // טיפול במקרה שהקטגוריה לא מוגדרת
    return <p>שגיאה: קטגוריה לא מוגדרת</p>;
  }
  // const { data: competitions, isLoading, error } = useGetCompetitionsByCategoryQuery(selectedCategory);
  const { data, error, isLoading } = useGetCompetitionByCategoryQuery(selectedCategory); 
  if (isLoading) return <p>טוען נתונים...</p>;
  if (error) return <p>שגיאה בשליפת נתונים</p>;

  return (
    <div>
      {data?.map((competitionItem :CompetitionItem) => (
        <CompetitionCard key={competitionItem._id} competitionItem={competitionItem} />
      ))}
    </div>
  );
};

export default CompetitionList;


