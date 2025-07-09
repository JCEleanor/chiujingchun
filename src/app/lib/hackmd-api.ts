export interface HackMDNote {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: number;
  titleUpdatedAt: number;
  tagsUpdatedAt: number;
  publishType: "view" | "edit" | "slide" | "book";
  publishedAt: string | null;
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

export async function fetchHackMDNotes(): Promise<HackMDNote[]> {
  const apiKey = process.env.HACKMD_API_KEY;

  if (!apiKey) {
    throw new Error("HACKMD_API_KEY environment variable is not set");
  }

  try {
    const response = await fetch("https://api.hackmd.io/v1/notes", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: HackMDNote[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching HackMD notes:", error);
    throw error;
  }
}
