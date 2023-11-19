export type VoteType = {
  subjectId: number;
  subject: string;
  startDate: string;
  endDate: string;
  total: number;
};

export type PlanType = {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  allDay: boolean;
  type: string;
  boardId: number;
};
