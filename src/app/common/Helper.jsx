import {
  Discord,
  HeroDiscord,
  HeroLinkdin,
  HeroTelegram,
  HeroTwiter,
  Linkdin,
  Telegram,
  Twiter,
} from "../common/Icon";

export const TechniqueData = [
  { url: "https://www.linkedin.com/login", icon: <Linkdin /> },
  { url: "https://discord.com/", icon: <Discord /> },
  { url: "https://web.telegram.org/k/", icon: <Telegram /> },
  { url: "https://x.com/i/flow/login", icon: <Twiter /> },
];

export const quickLinks = [
  { name: "Home", url: "/" },
  { name: "Games", url: "/games" },
  { name: "AI-Platform", url: "/ai-platform" },
  { name: "Team", url: "/team" },
  { name: "Careers", url: "/careers" },
  { name: "Privacy Policy", url: "/privacy-policy" },
];
export const HeroSocialIconArray = [
  { socialIcon: <HeroTwiter />, url: "https://x.com/i/flow/login" },
  { socialIcon: <HeroDiscord />, url: "https://discord.com/" },
  { socialIcon: <HeroTelegram />, url: "https://web.telegram.org/k/" },
  { socialIcon: <HeroLinkdin />, url: "https://www.linkedin.com/login" },
];
