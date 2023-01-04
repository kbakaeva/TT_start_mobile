export interface IUserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ISupport {
  url: string;
  text: string;
}

export interface IRootObject {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUserData[];
  support: ISupport;
}
