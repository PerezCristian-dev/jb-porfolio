export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  thumbnail: string;
  gifPreview?: string;
  videoUrl: string;
  year: string;
}

// Thumbnails: picsum.photos (free, public domain photography, grayscale for cinematic look)
// videoUrl: public Vimeo staff picks (real embeds for demo purposes)
export const projects: Project[] = [
  {
    id: "01",
    title: "Solitude",
    client: "Personal Work",
    category: "Short Film",
    thumbnail: "https://picsum.photos/seed/solitude/1200/900?grayscale",
    gifPreview: "https://picsum.photos/seed/solitude2/1200/900?grayscale&blur=1",
    videoUrl: "https://player.vimeo.com/video/169599296",
    year: "2024",
  },
  {
    id: "02",
    title: "In Motion",
    client: "Nike",
    category: "Commercial",
    thumbnail: "https://picsum.photos/seed/motion/1200/900?grayscale",
    gifPreview: "https://picsum.photos/seed/motion2/1200/900?grayscale&blur=1",
    videoUrl: "https://player.vimeo.com/video/169599296",
    year: "2024",
  },
  {
    id: "03",
    title: "Golden Hour",
    client: "Apple",
    category: "Brand Film",
    thumbnail: "https://picsum.photos/seed/golden/1200/900?grayscale",
    gifPreview: "https://picsum.photos/seed/golden2/1200/900?grayscale&blur=1",
    videoUrl: "https://player.vimeo.com/video/169599296",
    year: "2023",
  },
  {
    id: "04",
    title: "Frequencies",
    client: "Sony Music",
    category: "Music Video",
    thumbnail: "https://picsum.photos/seed/freq/1200/900?grayscale",
    gifPreview: "https://picsum.photos/seed/freq2/1200/900?grayscale&blur=1",
    videoUrl: "https://player.vimeo.com/video/169599296",
    year: "2023",
  },
  {
    id: "05",
    title: "Concrete Dreams",
    client: "MTV",
    category: "Documentary",
    thumbnail: "https://picsum.photos/seed/concrete/1200/900?grayscale",
    gifPreview: "https://picsum.photos/seed/concrete2/1200/900?grayscale&blur=1",
    videoUrl: "https://player.vimeo.com/video/169599296",
    year: "2023",
  },
  {
    id: "06",
    title: "Still Life",
    client: "Personal Work",
    category: "Short Film",
    thumbnail: "https://picsum.photos/seed/still/1200/900?grayscale",
    gifPreview: "https://picsum.photos/seed/still2/1200/900?grayscale&blur=1",
    videoUrl: "https://player.vimeo.com/video/169599296",
    year: "2022",
  },
];
