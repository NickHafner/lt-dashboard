type Exercise_Tag = {
  name: string;
};

export type SB_Exercise = {
  name: string;
  desc: string;
  tags?: [Exercise_Tag];
};
