---
nav:
  title: Guide
  order: 1
group:
  title: Introduction
  order: -1
---

# Why Sensor-Viewer

Sensor-Viewer is a light, fast, cross-platform tool for visualizing sensor extrinsic parameters.

When we have some calibration parameters of vehicle sensors, we can use this tool to quickly preview and verify the sensor position, and at the same time can perform transformation calculation.

Ros is a set of software libraries and tools that help you build robot applications, We can play rosbag and use the rviz visualization tool to get a preview of the sensor's position. Sensor-Viewer doesn't depend on a ros environment, it takes seconds to install, you can run it on Windows, Linux and MacOS , and of course it's fast, and the results are the same as those seen in rviz!

<img src='/Sensor-Viewer-Doc/showcase.png' >

## Feature

The Sensor-Viewer has the following features:

- Supports adding, editing, checking, location preview and hide/show sensors
- Support any sensor and reference point for transform calculation
- Support `Euler` and `Quaternion` rotation methods
- Supports sensor configuration file import and export
- Support GLTF model file export

## Question Feedback

If you find any problems during use, or have suggestions for improvement, please feel free to post them on GitHub Issues: https://github.com/neo896/Sensor-Viewer/issues
