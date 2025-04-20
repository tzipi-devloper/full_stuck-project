import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { chooseCompetition } from "../features/competitions/competitionsSlice";
import { Category, CategoryKeys } from "../features/competitions/competitionsTypes";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {Object.keys(Category).map(key => {
        const categoryKey = key as CategoryKeys;
        return (
          <div key={categoryKey}>
            <Link to={categoryKey} onClick={() => dispatch(chooseCompetition(categoryKey))}>
              {Category[categoryKey]}
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default Home;
