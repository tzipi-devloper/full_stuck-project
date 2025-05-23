import  { useState } from "react";
import { useDispatch } from "react-redux";
import { chooseCompetition } from "../features/competitions/competitionsSlice";
import { Category, CategoryKeys } from "../features/competitions/competitionsTypes";
import CompetitionList from "../features/competitions/CompetitionList";
const categoryLabels: Category = {
  pictures: "Pictures",
  recipes: "Recipes",
  exams: "Exams"
};

const Home = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState<CategoryKeys | null>(null);

  const handleCategoryClick = (categoryKey: CategoryKeys) => {
    dispatch(chooseCompetition(categoryKey)); 
    setSelectedCategory(categoryKey);
  };

  return (
    <div>
      {Object.entries(categoryLabels).map(([key, label]) => (
        <div key={key}>
          <button onClick={() => handleCategoryClick(key as CategoryKeys)}>
            {label}
          </button>
        </div>
      ))}
      {selectedCategory && <CompetitionList />} 
    </div>
  );
};

export default Home;
