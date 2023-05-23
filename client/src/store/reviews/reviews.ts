import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Review = {
  id: string;
  image: string;
  label: string;
  description: string;

  content: string;
};

type ReviewsState = {
  reviews: Review[];
};

const initialState = {
  reviews: [
    {
      id: "0",
      image:
        "https://images.iphonephotographyschool.com/24755/portrait-photography.jpg",
      label: "Алиса Вонг",
      description: "Все прошло классно, точно приду еще!",
      content:
        "Приятный мастер, отличная работа. Мне красили ресницы. Результатом довольна, приду еще. Мастер общалась прекрасно",
    },

    {
      id: "1",
      image:
        "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?fit=5184%2C3456&ssl=1",
      label: "Мей Миллер",
      description: "Мне понравилось, всем рекомендую",
      content:
        "Всё замечательно было. Результат в процессе, а сервис мне понравился. Свежий ремонт, приветливые сотрудники.",
    },

    {
      id: "2",
      image:
        "https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg",
      label: "Марк Цао",
      description: "Все было круто, точно зайду еще",
      content:
        "Был в этом салоне по рекомендации своей подруги. У меня натуральные волосы, очень хотелось сделать блонд. Сказать, что все понравилось - ничего не сказать. Точно приду еще!",
    },
  ],
} as ReviewsState;

export const ReviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<Review>) {
      state.reviews = [...state.reviews, action.payload];
    },
  },
});

export const selectReviews = (state: RootState) => state.reviews.reviews;
