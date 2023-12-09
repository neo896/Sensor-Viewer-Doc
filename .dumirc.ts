import { defineConfig } from "dumi";
import { defineThemeConfig } from "dumi-theme-chakra";

export default defineConfig({
  base: "/Sensor-Viewer-Doc/",
  publicPath: "/Sensor-Viewer-Doc/",
  exportStatic: {},
  locales: [
    { id: "en-US", name: "English" },
    { id: "zh-CN", name: "中文" },
  ],
  esbuildMinifyIIFE: true,
  themeConfig: {
    nprogress: false,
    name: "Sensor-Viewer",
    logo: "/Sensor-Viewer-Doc/logo.png",
    ...defineThemeConfig({
      helmetIcon: "🍺",
      settingPanelVisible: true,
      thumbBackground: true,
      description:
        "A Light, Fast, Cross-Platform Sensor Extrinsic Parameters Visualization Tool",
      keywords: ["Extrinsics", "Tauri", "Cross-Platform", "Calibration"],
      author: "qqkkwana@gmail.com",
      social: {
        github: {
          name: "dumi-theme-chakra",
          link: "https://github.com/neo896/Sensor-Viewer.git",
        },
      },
      announcementBar: {
        id: "New Release",
        content:
          "Now Sensor-Viewer has released version 0.4.0!  现在Sensor-Viewer发布了0.4.0版本!",
        isCloseable: true,
      },
    }),
    footer: `Copyright © ${new Date().getFullYear()} Sensor-Viewer`,
  },
});
