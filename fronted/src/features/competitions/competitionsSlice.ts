import { createSlice } from "@reduxjs/toolkit";
import {CategoryKeys, CompetitionItem } from "./competitionsTypes";

interface CompetitionsState {
    val: string;
    currentCompetition: CategoryKeys;
    currentCompetitionList: CompetitionItem[];
}

const initialState: CompetitionsState = {
    val: "competiton",
    currentCompetition: "Exams", 
    currentCompetitionList: []
};

const competitionsSlice = createSlice({
    name: "competiton",
    initialState,
    reducers: {
        show: (state: CompetitionsState) => {
            alert(state.val);
        },
        chooseCompetition: (state, action: { payload: CategoryKeys }) => {
            state.currentCompetition = action.payload;
        
            switch (action.payload) {
                case "Pictures": 
                    state.currentCompetitionList = [
                        { id: 1, name: 'Image 1', score: 95, category: 'Nature', file: '/path/to/image1.jpg' },
                        { id: 2, name: 'Image 2', score: 85, category: 'Architecture', file: '/path/to/image2.jpg' },
                        { id: 3, name: 'Image 3', score: 75, category: 'Animals', file: '/path/to/image3.jpg' },
                    ];
                    break;
                case "Recipes":
                    state.currentCompetitionList = [
                        { id: 1, name: 'Pasta', score: 90, category: 'recipes', file: '/path/to/pasta_recipe.pdf' },
                        { id: 2, name: 'Sushi', score: 85, category: 'recipes', file: '/path/to/sushi_recipe.pdf' },
                        { id: 3, name: 'Tacos', score: 80, category: 'recipes', file: '/path/to/tacos_recipe.pdf' },
                    ];
                    break;
                case "Exams":
                    state.currentCompetitionList = [
                        { id: 1, name: 'Math Exam', score: 95, category: 'Mathematics', file: '/path/to/math_exam.pdf' },
                        { id: 2, name: 'Science Exam', score: 85, category: 'Science', file: '/path/to/science_exam.pdf' },
                        { id: 3, name: 'History Exam', score: 75, category: 'History', file: '/path/to/history_exam.pdf' },
                    ];
                    break;
                default:
                    state.currentCompetitionList = [];
                    break;
            }
        }
    }
});

export const { show } = competitionsSlice.actions;
export const { chooseCompetition } = competitionsSlice.actions;
export const selectCurrentCompetitionList = (state: { competiton: CompetitionsState }) => state.competiton.currentCompetitionList;
export const selectCurrentCompetition = (state: { competiton: CompetitionsState }) => state.competiton.currentCompetition;

export default competitionsSlice.reducer;

