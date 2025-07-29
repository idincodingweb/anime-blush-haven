export interface Anime {
  id: string;
  title: string;
  category: string;
  rating: number;
  year: number;
  episodes: number;
  status: "completed" | "ongoing" | "upcoming";
  description: string;
  thumbnail: string;
  youtubeId: string;
  tags: string[];
}

export const categories = [
  { id: "action", name: "Action", color: "from-red-500 to-orange-500" },
  { id: "romance", name: "Romance", color: "from-pink-500 to-rose-500" },
  { id: "comedy", name: "Comedy", color: "from-yellow-500 to-amber-500" },
  { id: "drama", name: "Drama", color: "from-purple-500 to-indigo-500" },
  { id: "fantasy", name: "Fantasy", color: "from-green-500 to-emerald-500" },
  { id: "thriller", name: "Thriller", color: "from-gray-600 to-slate-600" },
];

export const animeData: Anime[] = [
  {
    id: "1",
    title: "Attack on Titan",
    category: "action",
    rating: 4.9,
    year: 2013,
    episodes: 87,
    status: "completed",
    description: "Humanity fights for survival against giant humanoid Titans in this epic dark fantasy series.",
    thumbnail: "https://img.youtube.com/vi/LHtdKWJdif4/maxresdefault.jpg",
    youtubeId: "LHtdKWJdif4",
    tags: ["Dark", "Military", "Survival", "Epic"]
  },
  {
    id: "2",
    title: "Demon Slayer",
    category: "action",
    rating: 4.8,
    year: 2019,
    episodes: 44,
    status: "ongoing",
    description: "Tanjiro becomes a demon slayer to save his sister and avenge his family.",
    thumbnail: "https://img.youtube.com/vi/VQGCKyvzIM4/maxresdefault.jpg",
    youtubeId: "VQGCKyvzIM4",
    tags: ["Supernatural", "Family", "Revenge", "Beautiful Animation"]
  },
  {
    id: "3",
    title: "Your Name",
    category: "romance",
    rating: 4.7,
    year: 2016,
    episodes: 1,
    status: "completed",
    description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies.",
    thumbnail: "https://img.youtube.com/vi/xU47nhruN-Q/maxresdefault.jpg",
    youtubeId: "xU47nhruN-Q",
    tags: ["Supernatural", "Time Travel", "Beautiful", "Emotional"]
  },
  {
    id: "4",
    title: "One Piece",
    category: "action",
    rating: 4.9,
    year: 1999,
    episodes: 1000,
    status: "ongoing",
    description: "Follow Monkey D. Luffy and his crew as they search for the ultimate treasure, One Piece.",
    thumbnail: "https://img.youtube.com/vi/MCb13lbVGE0/maxresdefault.jpg",
    youtubeId: "MCb13lbVGE0",
    tags: ["Adventure", "Friendship", "Pirates", "Long-running"]
  },
  {
    id: "5",
    title: "Spirited Away",
    category: "fantasy",
    rating: 4.8,
    year: 2001,
    episodes: 1,
    status: "completed",
    description: "A girl enters a world ruled by gods and witches where humans are changed into beasts.",
    thumbnail: "https://img.youtube.com/vi/ByXuk9QqQkk/maxresdefault.jpg",
    youtubeId: "ByXuk9QqQkk",
    tags: ["Studio Ghibli", "Magic", "Coming of Age", "Classic"]
  },
  {
    id: "6",
    title: "Naruto",
    category: "action",
    rating: 4.6,
    year: 2002,
    episodes: 720,
    status: "completed",
    description: "Follow Naruto Uzumaki's journey to become the strongest ninja and Hokage of his village.",
    thumbnail: "https://img.youtube.com/vi/1dy2zPPrKD0/maxresdefault.jpg",
    youtubeId: "1dy2zPPrKD0",
    tags: ["Ninja", "Friendship", "Determination", "Classic"]
  },
  {
    id: "7",
    title: "My Hero Academia",
    category: "action",
    rating: 4.7,
    year: 2016,
    episodes: 138,
    status: "ongoing",
    description: "In a world where superpowers are common, a boy without powers dreams of becoming a hero.",
    thumbnail: "https://img.youtube.com/vi/D5fYOnwYkj4/maxresdefault.jpg",
    youtubeId: "D5fYOnwYkj4",
    tags: ["Superhero", "School", "Inspiring", "Modern"]
  },
  {
    id: "8",
    title: "Death Note",
    category: "thriller",
    rating: 4.9,
    year: 2006,
    episodes: 37,
    status: "completed",
    description: "A high school student finds a supernatural notebook that kills anyone whose name is written in it.",
    thumbnail: "https://img.youtube.com/vi/NlJZ-YgAt-c/maxresdefault.jpg",
    youtubeId: "NlJZ-YgAt-c",
    tags: ["Psychological", "Supernatural", "Dark", "Mind Games"]
  },
  {
    id: "9",
    title: "Princess Mononoke",
    category: "fantasy",
    rating: 4.8,
    year: 1997,
    episodes: 1,
    status: "completed",
    description: "A young warrior gets involved in the struggle between forest gods and humans.",
    thumbnail: "https://img.youtube.com/vi/4OiMOHRDs14/maxresdefault.jpg",
    youtubeId: "4OiMOHRDs14",
    tags: ["Studio Ghibli", "Nature", "War", "Environmental"]
  },
  {
    id: "10",
    title: "Akira",
    category: "action",
    rating: 4.6,
    year: 1988,
    episodes: 1,
    status: "completed",
    description: "In Neo-Tokyo, a biker gang member gains psychic powers and threatens the city.",
    thumbnail: "https://img.youtube.com/vi/t1GO-93Nt6c/maxresdefault.jpg",
    youtubeId: "t1GO-93Nt6c",
    tags: ["Cyberpunk", "Psychic Powers", "Classic", "Dystopian"]
  },
  {
    id: "11",
    title: "Weathering with You",
    category: "romance",
    rating: 4.5,
    year: 2019,
    episodes: 1,
    status: "completed",
    description: "A boy meets a girl who can manipulate the weather in this beautiful romance.",
    thumbnail: "https://img.youtube.com/vi/Q6iK6DjV_g8/maxresdefault.jpg",
    youtubeId: "Q6iK6DjV_g8",
    tags: ["Weather", "Supernatural", "Beautiful", "Modern"]
  },
  {
    id: "12",
    title: "Jujutsu Kaisen",
    category: "action",
    rating: 4.8,
    year: 2020,
    episodes: 24,
    status: "ongoing",
    description: "Students fight cursed spirits in this modern supernatural action series.",
    thumbnail: "https://img.youtube.com/vi/4A_X-Dvl0ws/maxresdefault.jpg",
    youtubeId: "4A_X-Dvl0ws",
    tags: ["Supernatural", "School", "Curses", "Modern"]
  },
  {
    id: "13",
    title: "One Punch Man",
    category: "comedy",
    rating: 4.7,
    year: 2015,
    episodes: 24,
    status: "ongoing",
    description: "A hero who can defeat any enemy with a single punch searches for a worthy opponent.",
    thumbnail: "https://img.youtube.com/vi/km2OPUctni4/maxresdefault.jpg",
    youtubeId: "km2OPUctni4",
    tags: ["Superhero", "Parody", "Overpowered", "Comedy"]
  },
  {
    id: "14",
    title: "Tokyo Ghoul",
    category: "thriller",
    rating: 4.4,
    year: 2014,
    episodes: 48,
    status: "completed",
    description: "A college student becomes a half-ghoul and must navigate between human and ghoul worlds.",
    thumbnail: "https://img.youtube.com/vi/vGuQeQsoRgU/maxresdefault.jpg",
    youtubeId: "vGuQeQsoRgU",
    tags: ["Dark", "Supernatural", "Identity Crisis", "Gore"]
  },
  {
    id: "15",
    title: "Hunter x Hunter",
    category: "action",
    rating: 4.9,
    year: 2011,
    episodes: 148,
    status: "completed",
    description: "A young boy searches for his father while becoming a Hunter in this adventure series.",
    thumbnail: "https://img.youtube.com/vi/d6kBeJjTGnY/maxresdefault.jpg",
    youtubeId: "d6kBeJjTGnY",
    tags: ["Adventure", "Friendship", "Complex", "Strategy"]
  },
  {
    id: "16",
    title: "Fullmetal Alchemist",
    category: "drama",
    rating: 4.9,
    year: 2003,
    episodes: 64,
    status: "completed",
    description: "Two brothers use alchemy to search for the Philosopher's Stone to restore their bodies.",
    thumbnail: "https://img.youtube.com/vi/-GoNo0DGroU/maxresdefault.jpg",
    youtubeId: "-GoNo0DGroU",
    tags: ["Alchemy", "Brotherhood", "Dark", "Philosophy"]
  },
  {
    id: "17",
    title: "Mob Psycho 100",
    category: "comedy",
    rating: 4.8,
    year: 2016,
    episodes: 37,
    status: "completed",
    description: "A psychic middle schooler tries to live a normal life while controlling his powers.",
    thumbnail: "https://img.youtube.com/vi/Bw-5Lka7gPE/maxresdefault.jpg",
    youtubeId: "Bw-5Lka7gPE",
    tags: ["Psychic", "School", "Coming of Age", "Unique Art"]
  },
  {
    id: "18",
    title: "A Silent Voice",
    category: "drama",
    rating: 4.6,
    year: 2016,
    episodes: 1,
    status: "completed",
    description: "A former bully seeks redemption by reconnecting with a deaf girl he once tormented.",
    thumbnail: "https://img.youtube.com/vi/nfK6UgLra7g/maxresdefault.jpg",
    youtubeId: "nfK6UgLra7g",
    tags: ["Redemption", "Disability", "Emotional", "Beautiful"]
  },
  {
    id: "19",
    title: "Violet Evergarden",
    category: "drama",
    rating: 4.7,
    year: 2018,
    episodes: 13,
    status: "completed",
    description: "A former soldier becomes a letter writer to understand human emotions and love.",
    thumbnail: "https://img.youtube.com/vi/0CJeDetA45Q/maxresdefault.jpg",
    youtubeId: "0CJeDetA45Q",
    tags: ["Post-war", "Emotions", "Beautiful Animation", "Touching"]
  },
  {
    id: "20",
    title: "Ghost in the Shell",
    category: "action",
    rating: 4.5,
    year: 1995,
    episodes: 1,
    status: "completed",
    description: "In a cyberpunk future, a cyborg cop hunts a mysterious hacker known as the Puppet Master.",
    thumbnail: "https://img.youtube.com/vi/SvBVDibOrgs/maxresdefault.jpg",
    youtubeId: "SvBVDibOrgs",
    tags: ["Cyberpunk", "Philosophy", "Technology", "Classic"]
  }
];