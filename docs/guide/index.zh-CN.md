---
nav:
  title: 指南
  order: 1
group:
  title: 介绍
  order: -1
---

# 为什么选择 Sensor-Viewer

Sensor-Viewer 是一款轻量、快速、跨平台的传感器外参可视化工具。

当我们有了一些车辆传感器的标定参数后，就可以使用该工具快速预览和验证传感器的位置，同时还可以进行变换计算。

Ros 是一套帮助您构建机器人应用程序的软件库和工具，我们可以在播放 rosbag 的同时使用 rviz 可视化工具来预览传感器的位置。Sensor-Viewer 不依赖于 ros 环境，安装只需几秒钟，可以在 Windows、Linux 和 MacOS 上运行，当然速度也很快，而且结果与 rviz 中看到的一样！

<img src='/Sensor-Viewer-Doc/showcase-cn.png'>

## 特性

传感器查看器具有以下功能：

- 支持添加、编辑、检查、位置预览、隐藏/显示传感器
- 支持任何传感器和参考点的变换计算
- 支持`欧拉`和`四元数`旋转方法
- 支持传感器配置文件的导入和导出
- 支持导出 GLTF 模型文件

## 问题反馈

如果您在使用过程中发现任何问题，或有任何改进建议，请随时在 GitHub Issues: https://github.com/neo896/Sensor-Viewer/issues 上发布。
