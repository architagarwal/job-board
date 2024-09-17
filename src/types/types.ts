export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string;
  name: string;
  email: string;
  totalBids: number;
  minBid: number;
  maxBid: number;
  publishDate: number;
  expiry: number;
}

export type JobList = {
  [key: string]: Job
}

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  isPoster: Boolean;
  isSeeker: Boolean;
}

export type ErrorResponse = {
  message: string
}

export type PostResponse = {
  message: string
}

export type LoginState = {
  email: string;
  password: string;
}

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>

export type FormEvent = React.FormEvent<HTMLFormElement>
