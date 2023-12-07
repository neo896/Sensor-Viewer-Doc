---
nav: Guide
group:
  title: Usage
  order: 0
toc: content
---

# Add Sensor

## Add manually

1. Choose "Add Sensor Manually" tabs
2. Pick Euler or Quaternion rotation
3. Input sensor's position parameter and push "create sensor" button to add sensor
4. Push "save" button and preview

## Import via configuration file

You can import sensor by configuration file, we define a yaml standard file, you should follow the standard, the following is a yaml example:

```yaml
- frame_id: CAM_INSIDE_DRIVER
  reference_frame_id: LDR_FRONT_RIGHT
  sensor_type: Camera
  transform:
    translation:
      x: -1.64141841467
      y: -0.445115868544
      z: -1.44456005613
    rotation:
      x: -0.617790534391
      y: 0.341020163922
      z: -0.339632090994
      w: 0.621844149431
- frame_id: CAM_PBQ_FRONT_LEFT
  reference_frame_id: LDR_FRONT_LEFT
  sensor_type: Camera
  transform:
    translation:
      x: -0.00939999649542
      y: 0.0980000132531
      z: -0.0106999663806
    rotation:
      x: -0.662252442078
      y: 0.434908515513
      z: -0.345898927788
      w: 0.50262333596
```

- the frame_id and reference_frame_id: if frame_id is A and reference_frame_id is B, it means that if the position of B is known, then A is transformed to get the new position
- sensor_type: the type of the sensor, including Camera, Lidar, Radar and IMU/GNSS, if the name is not one of these four, the sensor list icon will not be displayed
- transform: including translation and rotation, and for rotation, you can use Euler(yaw, pitch, roll) order is 'XYZ' or Quaternion(x, y, z, w)
