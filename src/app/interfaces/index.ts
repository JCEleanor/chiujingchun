export interface HackMDNote {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: number;
  titleUpdatedAt: number;
  tagsUpdatedAt: number;
  publishType: "view" | "edit" | "slide" | "book";
  publishedAt: number | null;
  permalink: string | null;
  publishLink: string;
  shortId: string;
  lastChangedAt: number;
  lastChangeUser: {
    name: string;
    userPath: string;
    photo: string;
    biography: string | null;
  };
  userPath: string;
  teamPath: string | null;
  readPermission: string;
  writePermission: string;
}
