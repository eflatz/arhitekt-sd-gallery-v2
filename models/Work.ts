import WorkImage from './WorkImage'

export default interface Work {
  title: string;
  //nid: string,
  term: string;
  tags: { tid: string }[];
  year: string;
  students: string[];
  course: string[];
  semester: string[];
  //mentors: string[],
  description: string;
  study: string[];
  images: WorkImage[];
  imageOne: WorkImage[];
  //video: string
}