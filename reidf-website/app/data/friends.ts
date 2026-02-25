export interface Friend {
  id: string;
  name: string;
  url: string;
  description?: string;
}

export const friends: Friend[] = [
  // Example — replace with real entries
  {
    id: "example",
    name: "Example Friend",
    url: "https://example.com",
    description: "A cool person doing cool things.",
  },
];
