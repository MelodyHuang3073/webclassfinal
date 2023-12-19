//QA
export type QAadd = {
  question: string;
  answer: string;
};

export type QA = {
  id?: string;
  qaId: string;
  question: string;
  answer: string;
  qaAskTime: Date;
  qaUpdateTime: Date | string;
  qaDeleteTime: Date | string;
  needAssignTime: Date | boolean;
  stuNum: string; //學號
  lastUpdaterId: string;
  office: string; //目前指派單位
  officeId: string;
  assignCount: number; //轉介次數
  history: string[];
  status: string; //狀態 e.g 是否審核過
  sendResponse: number; //預設0 當officeId相等確認時為0 代表第一次發
  autoDeleteTime: Date | boolean;
};

//office
export type Office = {
  id: string;
  value: string;
  name: string;
};
