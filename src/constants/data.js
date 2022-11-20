import images from "./images";
import {
  FaFileAlt,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";

const gradient = "url(#green-gradient)";

const albums = [
  {
    id: 1,
    image: images.form_main_img,
    title: "Courir",
    text: "Don Bigg",
  },
];

const detailsAlbum = [
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor",
  },
];

const qualities = [
  {
    id: 8,
    icon: <FaFileAlt style={{ fill: gradient }} />,
    title: "Ideas & Plans",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.",
  },
  {
    id: 9,
    icon: <AiOutlineReload style={{ fill: gradient }} />,
    title: "Prompt Strategies",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod.",
  },
];

const features = [
  {
    id: 10,
    title: "Digital Marketing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 11,
    title: "Trade Shows",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 12,
    title: "Branding",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 13,
    title: "Content Creation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 14,
    title: "Graphic Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
  {
    id: 15,
    title: "Media Buying",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc.",
  },
];

const portfolio = [
  {
    id: 16,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_1,
  },
  {
    id: 17,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_2,
  },
  {
    id: 18,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elits",
    image: images.portfolio_img_3,
  },
];

const contact = [
  {
    id: 25,
    icon: <FaPhoneAlt style={{ fill: gradient }} />,
    info: "+212 644 539 276",
  },
  {
    id: 26,
    icon: <FaEnvelopeOpen style={{ fill: gradient }} />,
    info: "saadoune@gmail.com",
  },
  {
    id: 27,
    icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
    info: "Morocco, Casablanca",
  },
];

const sections = {
  albums,
  detailsAlbum,
  qualities,
  features,
  portfolio,
  contact,
};

export default sections;
