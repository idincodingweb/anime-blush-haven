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
    title: "Dragon Ball Z",
    category: "action",
    rating: 4.8,
    year: 1989,
    episodes: 291,
    status: "completed",
    description: "Goku and friends defend Earth from powerful enemies in epic battles.",
    thumbnail: "https://img.youtube.com/vi/M7FIvfx5J10/maxresdefault.jpg",
    youtubeId: "M7FIvfx5J10",
    tags: ["Fighting", "Superpowers", "Classic", "Epic Battles"]
  },
  {
    id: "11",
    title: "Bleach",
    category: "action",
    rating: 4.6,
    year: 2004,
    episodes: 366,
    status: "completed",
    description: "A teenager gains Soul Reaper powers and protects the living and dead worlds.",
    thumbnail: "https://img.youtube.com/vi/PLn28rzIFME/maxresdefault.jpg",
    youtubeId: "PLn28rzIFME",
    tags: ["Soul Reapers", "Supernatural", "Sword Fighting", "Shinigami"]
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
    title: "Cowboy Bebop",
    category: "action",
    rating: 4.8,
    year: 1998,
    episodes: 26,
    status: "completed",
    description: "Bounty hunters travel through space in this stylish and iconic anime series.",
    thumbnail: "https://img.youtube.com/vi/QCaEJZqLeTU/maxresdefault.jpg",
    youtubeId: "QCaEJZqLeTU",
    tags: ["Space", "Bounty Hunters", "Jazz", "Classic"]
  },
  {
    id: "20",
    title: "One Piece Film: Red",
    category: "action",
    rating: 4.6,
    year: 2022,
    episodes: 1,
    status: "completed",
    description: "Luffy and his crew attend a concert by the world's most beloved singer, Uta.",
    thumbnail: "https://img.youtube.com/vi/Ades3pQbeh8/maxresdefault.jpg",
    youtubeId: "Ades3pQbeh8",
    tags: ["Movie", "Music", "Adventure", "Pirates"]
  },
  {
    id: "21",
    title: "Chainsaw Man",
    category: "action",
    rating: 4.7,
    year: 2022,
    episodes: 12,
    status: "ongoing",
    description: "A young Devil Hunter with a chainsaw-devil heart fights dangerous devils.",
    thumbnail: "https://img.youtube.com/vi/q15CRdE5Bv0/maxresdefault.jpg",
    youtubeId: "q15CRdE5Bv0",
    tags: ["Devils", "Gore", "Dark", "Modern"]
  },
  {
    id: "22",
    title: "Spy x Family",
    category: "comedy",
    rating: 4.8,
    year: 2022,
    episodes: 25,
    status: "ongoing",
    description: "A spy, an assassin, and a telepath form a fake family for their secret missions.",
    thumbnail: "https://img.youtube.com/vi/ofXigq9aIpo/maxresdefault.jpg",
    youtubeId: "ofXigq9aIpo",
    tags: ["Family", "Spy", "Comedy", "Wholesome"]
  },
  {
    id: "23",
    title: "Kimetsu no Yaiba: Mugen Train",
    category: "action",
    rating: 4.9,
    year: 2020,
    episodes: 1,
    status: "completed",
    description: "Tanjiro and friends board the Mugen Train to hunt a demon terrorizing passengers.",
    thumbnail: "https://img.youtube.com/vi/ATJYac_dORw/maxresdefault.jpg",
    youtubeId: "ATJYac_dORw",
    tags: ["Movie", "Demons", "Action", "Beautiful Animation"]
  },
  {
    id: "24",
    title: "Haikyuu!!",
    category: "drama",
    rating: 4.8,
    year: 2014,
    episodes: 85,
    status: "completed",
    description: "A determined boy joins his high school volleyball team to become like his idol.",
    thumbnail: "https://img.youtube.com/vi/JOGp2c7-cKc/maxresdefault.jpg",
    youtubeId: "JOGp2c7-cKc",
    tags: ["Sports", "Volleyball", "Teamwork", "Inspiring"]
  },
  {
    id: "25",
    title: "Dr. Stone",
    category: "drama",
    rating: 4.6,
    year: 2019,
    episodes: 58,
    status: "ongoing",
    description: "A scientific genius works to rebuild civilization after humanity turns to stone.",
    thumbnail: "https://img.youtube.com/vi/v50Ao8pNlD0/maxresdefault.jpg",
    youtubeId: "v50Ao8pNlD0",
    tags: ["Science", "Post-Apocalyptic", "Educational", "Survival"]
  }
];