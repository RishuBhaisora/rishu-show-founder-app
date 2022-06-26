export type show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  status: string;
  rating: {
    average: number;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
};
