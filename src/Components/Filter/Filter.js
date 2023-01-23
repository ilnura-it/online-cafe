import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";
import { useDispatch } from "react-redux";
import { filterCategory } from "../../redux/dishesSlice";

const Filter = ({category}) => {

   const selectedCategory = useSelector(getSelectedCategory);
   const dispatch = useDispatch();
   return (
      <div>
         <h3 onClick={() => {dispatch(filterCategory(category))}} className =  {selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'} > {category}</h3>
      </div>
   )
}

export default Filter;