import { createFileRoute } from "@tanstack/react-router";
import KefaruMindsetSection from "@/components/KefaruMindset";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kefaru Tech — More Than Technology" },
      {
        name: "description",
        content:
          "At Kefaru, we combine innovation, expertise and a fearless mindset to build technology that helps businesses grow, adapt and lead — today and tomorrow.",
      },
      { property: "og:title", content: "Kefaru Tech — More Than Technology" },
      {
        property: "og:description",
        content:
          "A way of moving business forward — security, cloud, AI, automation, data and Salesforce expertise, built around people.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KefaruMindsetSection,
});
