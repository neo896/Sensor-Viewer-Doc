---
nav:
  title: Guide
  order: 1
group:
  title: Introduction
  order: -1
---

# What is Sensor-Viewer

Currently, when we get the installation parameters of the sensors on the car, often we need to convert the raw data to rosbag data, and then we can preview it through rviz in order to know or check if the parameters are correct.
Sensor-Viewer is a cross-platform, light and fast sensor position visualization tool, no ros environment, we just need to fill in the parameters or import configuration files, you can visualize the sensor position, at the same time, through the transform transformation, we can know the tf information between any two points!

## Feature

The Sensor-Viewer has the following features:

- Supports adding, editing, checking, location preview, hiding/showing of vehicle sensors
- Support any sensor and reference point for transform calculation
- Support `Euler` and `Quaternion` rotation methods
- Supports sensor configuration file import and export
- Support GLTF model file export

## Question Feedback

If you find any problems during use, or have suggestions for improvement, please feel free to post them on GitHub Issues: https://github.com/neo896/Sensor-Viewer/issues
