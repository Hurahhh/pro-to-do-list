import {Timestamp} from 'firebase/firestore';

export type Entity = {
  id: string | null;
  creatorId: string;
  creatorName: string;
  createdAt: Timestamp;
  updaterId: string | null;
  updaterName: string | null;
  updatedAt: Timestamp | null;
  isActive: boolean;
};
