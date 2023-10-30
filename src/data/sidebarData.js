import homeIcon from "../assets/svgs/home.svg";
import artistIcon from "../assets/svgs/artist.svg";
import albumIcon from "../assets/svgs/album.svg";
import podcastICon from "../assets/svgs/podcast.svg";
import audioIcon from "../assets/svgs/audio-book.svg";
import timeIcon from "../assets/svgs/time.svg";
import favIcon from "../assets/svgs/fav.svg";
import playlistIcon from "../assets/svgs/playlist.svg";

export const SIDEBAR_NAV = [
  {
    id: 1,
    title: "Home",
    icon: homeIcon,
    path: "/",
  },
  {
    id: 2,
    title: "Artist",
    icon: artistIcon,
    path: "/artist",
  },
  {
    id: 3,
    title: "Album",
    icon: albumIcon,
    path: "/album",
  },
  {
    id: 4,
    title: "Podcast",
    icon: podcastICon,
    path: "/podcast",
  },
  {
    id: 5,
    title: "Audio Book",
    icon: audioIcon,
    path: "/audiobook",
  },
];

export const SIDEBAR_BOTTOM_NAV = [
  {
    id: 1,
    title: "Recent",
    icon: timeIcon,
    path: "/recent",
  },
  {
    id: 2,
    title: "Favourite",
    icon: favIcon,
    path: "/favourite",
  },
  {
    id: 3,
    title: "Playlist",
    icon: playlistIcon,
    path: "/playlist",
  },
];
